import { useEffect } from "react";

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

/**
 * Relay page for GHL iframe form redirect.
 * GHL redirects the iframe to this page (same domain), which then
 * breaks out of the iframe and navigates the full browser window
 * to the thank you page. This is the only reliable way to handle
 * iframe-based form redirects cross-origin.
 */
const FormRedirect = () => {
  useEffect(() => {
    // Fire Meta pixel
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'CompleteRegistration');
    }

    // Break out of the iframe and redirect the full browser window
    if (window.top) {
      window.top.location.href = '/habitkickstart-thankyou';
    } else {
      window.location.href = '/habitkickstart-thankyou';
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-foreground/50 text-sm">Redirecting...</p>
    </div>
  );
};

export default FormRedirect;
