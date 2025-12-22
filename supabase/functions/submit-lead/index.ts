import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req) => {
  console.log("=== SUBMIT-LEAD FUNCTION INVOKED ===");
  console.log("Request method:", req.method);
  console.log("Timestamp:", new Date().toISOString());

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse request body
    const { firstName, lastName, email, phone } = await req.json();
    console.log("Received form data:", { firstName, lastName, email, phone: phone ? "***" + phone.slice(-4) : "missing" });

    // Validate required fields
    if (!firstName || !lastName || !email || !phone) {
      console.error("VALIDATION FAILED - Missing fields:", { 
        firstName: !!firstName, 
        lastName: !!lastName, 
        email: !!email, 
        phone: !!phone 
      });
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // === SECRET VERIFICATION ===
    console.log("=== SECRET VERIFICATION ===");
    const PULSE_API_KEY = Deno.env.get("PULSE_API_KEY");
    
    if (PULSE_API_KEY === undefined) {
      console.error("CRITICAL: PULSE_API_KEY is UNDEFINED (not set in secrets)");
      return new Response(
        JSON.stringify({ error: "API key not configured", details: { message: "PULSE_API_KEY secret is missing" } }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    
    if (PULSE_API_KEY === "") {
      console.error("CRITICAL: PULSE_API_KEY is EMPTY STRING");
      return new Response(
        JSON.stringify({ error: "API key is empty", details: { message: "PULSE_API_KEY secret has no value" } }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("PULSE_API_KEY status: PRESENT");
    console.log("PULSE_API_KEY length:", PULSE_API_KEY.length, "characters");
    console.log("PULSE_API_KEY starts with:", PULSE_API_KEY.substring(0, 4) + "...");
    console.log("PULSE_API_KEY ends with:", "..." + PULSE_API_KEY.substring(PULSE_API_KEY.length - 4));

    // Clean phone number
    const cleanPhone = phone.replace(/[^\d+]/g, "");
    console.log("Phone formatted:", phone, "→", cleanPhone);

    // Build payload with HARDCODED locationId
    const payload = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      phone: cleanPhone,
      locationId: "FmSt47hINB4PxwmdJ5Ik"
    };

    // === HEADER LOGGING ===
    console.log("=== HEADERS BEING SENT ===");
    console.log("Authorization: Bearer ****" + PULSE_API_KEY.substring(PULSE_API_KEY.length - 8));
    console.log("Version: 2021-07-28");
    console.log("Content-Type: application/json");
    console.log("Accept: application/json");

    // Build headers
    const headers = {
      "Authorization": "Bearer " + PULSE_API_KEY,
      "Version": "2021-07-28",
      "Content-Type": "application/json",
      "Accept": "application/json"
    };

    console.log("=== PULSE API REQUEST ===");
    console.log("Endpoint: https://services.leadconnectorhq.com/contacts/");
    console.log("Method: POST");
    console.log("Payload:", JSON.stringify(payload, null, 2));

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
    console.log("Status Text:", response.statusText);
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
      console.log("✓ SUCCESS: Lead submitted to Pulse CRM");
      return new Response(
        JSON.stringify({ success: true, data: responseData }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // === DETAILED ERROR ANALYSIS ===
    console.error("=== PULSE API ERROR ANALYSIS ===");
    console.error("HTTP Status:", statusCode);
    console.error("Full Response:", JSON.stringify(responseData, null, 2));

    if (statusCode === 401) {
      console.error("=== 401 UNAUTHORIZED DIAGNOSTIC ===");
      console.error("The Pulse/LeadConnector API rejected the token.");
      console.error("REQUIRED SCOPES for this endpoint:");
      console.error("  - contacts.write (to create contacts)");
      console.error("  - contacts.readonly (may also be needed)");
      console.error("POSSIBLE CAUSES:");
      console.error("  1. Token is invalid or expired");
      console.error("  2. Token lacks 'contacts.write' scope");
      console.error("  3. Token doesn't have access to location: FmSt47hINB4PxwmdJ5Ik");
      console.error("  4. Token type mismatch (needs Private Integration Token)");
      console.error("CHECK: Go to Settings > Integrations > Private Integrations in your CRM");
    }

    if (statusCode === 400) {
      console.error("=== 400 BAD REQUEST DIAGNOSTIC ===");
      console.error("The request payload was rejected.");
      console.error("Check if email/phone format is valid.");
    }

    if (statusCode === 422) {
      console.error("=== 422 VALIDATION ERROR DIAGNOSTIC ===");
      console.error("The CRM rejected the data. Check field formats.");
    }

    // Return detailed error to frontend
    return new Response(
      JSON.stringify({ 
        error: `CRM Error: ${statusCode}`,
        details: responseData,
        statusCode: statusCode,
        pulseMessage: responseData?.message || responseData?.error || "Unknown CRM error"
      }),
      { status: statusCode, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("=== FUNCTION EXCEPTION ===");
    console.error("Error:", error);
    console.error("Stack:", error instanceof Error ? error.stack : "N/A");
    return new Response(
      JSON.stringify({ 
        error: "Function error", 
        details: { message: error instanceof Error ? error.message : "Unknown error" }
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
