import CountdownTimer from "./CountdownTimer";

const FooterCTA = () => {
  return (
    <footer id="signup-form" className="py-16 md:py-24 px-6 border-t border-border text-center">
      <div className="max-w-xl mx-auto">
        {/* Section Header - matches other section headers */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
          Ready to start Day 1?
        </h2>

        {/* ACTION CLUSTER: Start Date + Timer + Form grouped tightly */}
        <div className="flex flex-col items-center gap-2 mb-8">
          {/* Start Date - compact */}
          <p className="text-primary font-bold text-[10px] md:text-xs uppercase tracking-wider">
            Start Date: January 26th
          </p>
          
          {/* Countdown Timer - compact version */}
          <CountdownTimer compact />
          
          {/* Embedded Form - with sandbox for isolation */}
          <div className="form-embed-wrapper mt-2">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/7DTFHh8ZmEmWrmVpsktd"
              style={{ width: '100%', height: '462px', border: 'none', borderRadius: '25px' }}
              id="footer-inline-7DTFHh8ZmEmWrmVpsktd"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Challenge Opt-in"
              data-height="462"
              data-layout-iframe-id="footer-inline-7DTFHh8ZmEmWrmVpsktd"
              data-form-id="7DTFHh8ZmEmWrmVpsktd"
              title="Challenge Opt-in"
              sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        
        <p className="text-muted-foreground text-base italic">
          Limited spots for the Jan 26th Intake
        </p>
      </div>
    </footer>
  );
};

export default FooterCTA;
