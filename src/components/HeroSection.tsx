import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  return (
    <>
      {/* Top Banner */}
      <div className="w-full bg-primary/10 border-b border-primary/30 py-2 md:py-3 px-4 text-center">
        <span className="text-primary text-[11px] md:text-sm font-bold uppercase tracking-widest">
          Now open: The 14 day habit kickstart
        </span>
      </div>

      <header className="relative pt-12 md:pt-20 pb-12 md:pb-20 px-4 md:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Massive Headline - text-4xl mobile, text-8xl desktop, 3 lines */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-foreground leading-[1.05] mb-4 md:mb-6">
            Learn the fundamental habits<br />
            every man over 30 needs to look<br />
            <span className="brand-text whitespace-nowrap">sharp in his shirts and confident without them</span>
          </h1>

          {/* Subheadline - clean and focused */}
          <p className="text-base md:text-xl text-foreground/80 font-semibold mb-6 md:mb-8">
            14 days of healthy habits designed to get you lean, strong and confident.
          </p>

          {/* ACTION CLUSTER: Start Date + Timer + Form grouped tightly */}
          <div className="flex flex-col items-center mb-8 md:mb-10">
            {/* Start Date - compact, no bottom margin */}
            <p className="text-primary font-bold text-[10px] md:text-xs uppercase tracking-wider mb-1">
              Start Date: January 26th
            </p>
            
            {/* Countdown Timer - compact version, no bottom margin */}
            <CountdownTimer compact />
            
            {/* Embedded Form - pulled up with negative margin */}
            <div className="form-embed-wrapper -mt-4 md:-mt-6">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/7DTFHh8ZmEmWrmVpsktd"
                style={{ width: '100%', height: '462px', border: 'none', borderRadius: '25px' }}
                id="hero-inline-7DTFHh8ZmEmWrmVpsktd"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Challenge Opt-in"
                data-height="462"
                data-layout-iframe-id="hero-inline-7DTFHh8ZmEmWrmVpsktd"
                data-form-id="7DTFHh8ZmEmWrmVpsktd"
                title="Challenge Opt-in"
                sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Live Status */}
          <div className="flex items-center justify-center gap-2 md:gap-3 text-muted-foreground font-medium text-[12px] md:text-base whitespace-nowrap">
            <span className="relative flex h-3 w-3 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#22c55e]"></span>
            </span>
            This is a live challenge and I'll be personally coaching you
          </div>
        </div>
      </header>
    </>
  );
};

export default HeroSection;
