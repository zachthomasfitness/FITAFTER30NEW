import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone } = await req.json();

    // Validate required fields
    if (!name || !email || !phone) {
      console.error("Missing required fields:", { name, email, phone });
      return new Response(
        JSON.stringify({ error: "Name, email, and phone are required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const PULSE_API_KEY = Deno.env.get("PULSE_API_KEY");
    const PULSE_LOCATION_ID = Deno.env.get("PULSE_LOCATION_ID");

    if (!PULSE_API_KEY || !PULSE_LOCATION_ID) {
      console.error("Missing Pulse configuration");
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    console.log("Submitting lead to Pulse CRM:", { firstName: name, email, phone });

    // Submit to Pulse CRM (GoHighLevel/LeadConnector)
    const response = await fetch(
      "https://services.leadconnectorhq.com/contacts/",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${PULSE_API_KEY}`,
          Version: "2021-07-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: name,
          email: email,
          phone: phone,
          locationId: PULSE_LOCATION_ID,
        }),
      }
    );

    const responseData = await response.json();
    console.log("Pulse CRM response:", response.status, responseData);

    if (!response.ok) {
      console.error("Pulse CRM error:", responseData);
      return new Response(
        JSON.stringify({ error: "Failed to submit lead", details: responseData }),
        {
          status: response.status,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

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
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
