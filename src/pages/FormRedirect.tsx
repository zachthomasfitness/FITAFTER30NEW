import { useEffect } from "react";

/**
 * Relay page for GHL iframe form redirect.
 * GHL redirects the iframe to this page (same domain), which then
 * breaks out of the iframe and navigates the full browser window
 * to the thank you page. Tracking fires on the thank you page itself.
 */
const FormRedirect = () => {
  useEffect(() => {
    const target = '/habitkickstart-thankyou';
    // Try to break out of the iframe; fall back to self-navigation
    // if cross-origin restrictions block access to window.top (e.g. preview).
    try {
      if (window.top && window.top !== window.self) {
        window.top.location.href = target;
        return;
      }
    } catch {
      // Cross-origin — can't touch top. Fall through to self navigation.
    }
    window.location.href = target;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-foreground/50 text-sm">Redirecting...</p>
    </div>
  );
};

export default FormRedirect;
