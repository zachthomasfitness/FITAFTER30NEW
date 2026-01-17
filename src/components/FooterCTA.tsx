import { useEffect } from "react";

const FooterCTA = () => {
  useEffect(() => {
    // Load the Pulse form embed script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <footer id="signup-form" className="py-16 md:py-24 px-6 border-t border-border text-center">
      <div className="max-w-xl mx-auto">
        {/* Section Header - matches other section headers */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
          Ready to start Day 1?
        </h2>
        
        <p className="text-muted-foreground mb-10 text-sm md:text-base">
          Enter your details below to claim your spot for the January 26th Intake.
        </p>

        {/* Glassmorphism Form Container with brand border */}
        <div className="glassmorphism-card border-2 border-primary rounded-3xl p-4 md:p-8">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/7DTFHh8ZmEmWrmVpsktd"
            style={{ width: '100%', height: '462px', border: 'none', borderRadius: '25px' }}
            id="inline-7DTFHh8ZmEmWrmVpsktd"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Challenge Opt-in"
            data-height="462"
            data-layout-iframe-id="inline-7DTFHh8ZmEmWrmVpsktd"
            data-form-id="7DTFHh8ZmEmWrmVpsktd"
            title="Challenge Opt-in"
          />
        </div>
        
        <p className="mt-10 text-muted-foreground text-base italic">
          Limited spots for the Jan 26th Intake
        </p>
      </div>
    </footer>
  );
};

export default FooterCTA;
