import CountdownTimer from "./CountdownTimer";
import PulseFormEmbed from "./PulseFormEmbed";

const HeroSection = () => {
  return (
    <>
      {/* Top Banner */}
      <div className="w-full bg-primary/30 border-b-2 border-primary/50 py-2.5 px-4 text-center">
        <span className="text-foreground uppercase tracking-[0.04em] md:tracking-[0.08em] text-[11px] md:text-[0.875rem] font-black text-center font-sans whitespace-nowrap">
          For Over-30s Who Don't Feel Like Themselves Anymore
        </span>
      </div>

      <header className="relative pt-8 md:pt-20 pb-2 md:pb-12 px-4 md:px-6 text-center bg-transparent overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Headline */}
          <h1 className="text-[24px] md:text-4xl lg:text-6xl font-black text-foreground leading-[1.05] mb-3 md:mb-6">
          Tired of Starting Over Every Monday? Here's How to Get Stupidly Consistent and Lose Fat for Good
          </h1>

          {/* Subheadline */}
          <p className="text-xs md:text-lg text-secondary-foreground font-semibold mb-3 md:mb-0">
          Learn the system that's helped hundreds of over-30s lose fat, get their energy back, and feel confident again - without training every day or eating bland food.
          </p>

          {/* ACTION CLUSTER */}
          <div className="flex flex-col items-center gap-1 mt-2 md:mt-6 md:gap-3">
            <div id="signup-form" className="w-full max-w-[480px] mx-auto overflow-hidden" style={{ height: '270px' }}>
              <div style={{ marginTop: '-48px', transform: 'scale(0.88)', transformOrigin: 'top center' }}>
                <PulseFormEmbed id="hero-inline-7DTFHh8ZmEmWrmVpsktd" />
              </div>
            </div>

            {/* Countdown below form */}
            <div className="flex flex-col items-center gap-0.5">
              <p className="text-foreground font-bold text-[10px] md:text-xs uppercase tracking-wider">
                Join the Free 10-Day Kickstart
              </p>
              <CountdownTimer compact />
            </div>

            {/* Live Status */}
            <div className="flex items-center justify-center gap-2 md:gap-3 text-muted-foreground font-medium text-[11px] md:text-base whitespace-nowrap mb-4 md:mb-6">
              <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-[#22c55e]"></span>
              </span>
              This is a live challenge and I'll be personally coaching you
            </div>
          </div>
        </div>
      </header>
    </>);

};

export default HeroSection;