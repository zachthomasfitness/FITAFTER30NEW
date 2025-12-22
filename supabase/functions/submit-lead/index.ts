import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse request body
    const { firstName, lastName, email, phone } = await req.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !phone) {
      console.error("Missing required fields:", { firstName: !!firstName, lastName: !!lastName, email: !!email, phone: !!phone });
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Retrieve secret and log presence (NOT the actual value)
    const PULSE_API_KEY = Deno.env.get("PULSE_API_KEY");
    console.log("PULSE_API_KEY status:", PULSE_API_KEY ? "Present" : "Missing");
    console.log("PULSE_API_KEY length:", PULSE_API_KEY ? PULSE_API_KEY.length : 0);

    if (!PULSE_API_KEY) {
      console.error("PULSE_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Clean phone number - remove any spaces or special chars except + and digits
    const cleanPhone = phone.replace(/[^\d+]/g, "");
    console.log("Phone cleaned from:", phone, "to:", cleanPhone);

    // Build payload with HARDCODED locationId
    const payload = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      phone: cleanPhone,
      locationId: "FmSt47hINB4PxwmdJ5Ik"
    };

    console.log("=== PULSE API REQUEST ===");
    console.log("Endpoint: https://services.leadconnectorhq.com/contacts/");
    console.log("Method: POST");
    console.log("Payload:", JSON.stringify(payload, null, 2));

    // Build headers - ensure NO double quotes, exactly one space after Bearer
    const authHeader = "Bearer " + PULSE_API_KEY;
    const headers = {
      "Authorization": authHeader,
      "Version": "2021-07-28",
      "Content-Type": "application/json",
      "Accept": "application/json"
    };

    console.log("Headers configured:");
    console.log("- Authorization: Bearer <key> (length:", authHeader.length, ")");
    console.log("- Version: 2021-07-28");
    console.log("- Content-Type: application/json");

    // Make the API call
    const response = await fetch("https://services.leadconnectorhq.com/contacts/", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload)
    });

    // Get response details
    const statusCode = response.status;
    const responseText = await response.text();
    
    console.log("=== PULSE API RESPONSE ===");
    console.log("Status Code:", statusCode);
    console.log("Response Body:", responseText);

    // Parse response
    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch {
      responseData = { raw: responseText };
    }

    // Check for success (200 or 201 only)
    if (statusCode === 200 || statusCode === 201) {
      console.log("SUCCESS: Lead submitted to Pulse CRM");
      return new Response(
        JSON.stringify({ success: true, data: responseData }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Handle errors with specific messages
    console.error("=== PULSE API ERROR ===");
    console.error("Status:", statusCode);
    console.error("Response:", JSON.stringify(responseData, null, 2));

    if (statusCode === 401) {
      console.error("401 UNAUTHORIZED - Possible causes:");
      console.error("1. API key is invalid or expired");
      console.error("2. API key lacks 'contacts.write' scope");
      console.error("3. API key doesn't have access to this location");
    }

    return new Response(
      JSON.stringify({ 
        error: `CRM Error: ${statusCode}`,
        details: responseData,
        statusCode: statusCode
      }),
      { status: statusCode, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Function error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
