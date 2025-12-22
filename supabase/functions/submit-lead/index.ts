import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, phone } = await req.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !phone) {
      console.error("Missing required fields:", { firstName, lastName, email, phone });
      return new Response(
        JSON.stringify({ error: "First name, last name, email, and phone are required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const PULSE_API_KEY = Deno.env.get("PULSE_API_KEY");
    const PULSE_LOCATION_ID = Deno.env.get("PULSE_LOCATION_ID");

    if (!PULSE_API_KEY || !PULSE_LOCATION_ID) {
      console.error("Missing Pulse configuration - PULSE_API_KEY exists:", !!PULSE_API_KEY, "PULSE_LOCATION_ID exists:", !!PULSE_LOCATION_ID);
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Build the payload for Pulse CRM
    const payload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      locationId: PULSE_LOCATION_ID,
    };

    console.log("Submitting lead to Pulse CRM with payload:", JSON.stringify(payload, null, 2));
    console.log("Using API endpoint: https://services.leadconnectorhq.com/contacts/");

    // Submit to Pulse CRM (GoHighLevel/LeadConnector V2 API)
    const response = await fetch(
      "https://services.leadconnectorhq.com/contacts/",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${PULSE_API_KEY}`,
          "Version": "2021-07-28",
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    // Get response as text first for better error logging
    const responseText = await response.text();
    console.log("Pulse CRM raw response status:", response.status);
    console.log("Pulse CRM raw response body:", responseText);

    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch {
      responseData = { rawResponse: responseText };
    }

    if (!response.ok) {
      console.error("Pulse CRM error - Status:", response.status);
      console.error("Pulse CRM error - Response:", JSON.stringify(responseData, null, 2));
      
      // Provide more specific error messages
      let errorMessage = "Failed to submit lead";
      if (response.status === 401) {
        errorMessage = "Authentication failed - please check API key";
        console.error("401 Unauthorized - The PULSE_API_KEY may be invalid or expired");
      } else if (response.status === 400) {
        errorMessage = "Invalid request data";
        console.error("400 Bad Request - Check the payload format");
      } else if (response.status === 422) {
        errorMessage = "Validation error from CRM";
        console.error("422 Unprocessable Entity - Data validation failed");
      }

      return new Response(
        JSON.stringify({ 
          error: errorMessage, 
          details: responseData,
          status: response.status 
        }),
        {
          status: response.status,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    console.log("Lead submitted successfully:", JSON.stringify(responseData, null, 2));

    return new Response(
      JSON.stringify({ success: true, data: responseData }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in submit-lead function:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    const errorStack = error instanceof Error ? error.stack : undefined;
    console.error("Error stack:", errorStack);
    
    return new Response(
      JSON.stringify({ error: errorMessage, stack: errorStack }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
