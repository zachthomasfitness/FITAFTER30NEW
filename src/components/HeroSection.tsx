import CountdownTimer from "./CountdownTimer";
import PulseFormEmbed from "./PulseFormEmbed";

const HeroSection = () => {
  return (
    <>
      {/* Top Banner */}
      <div className="w-full bg-primary/10 border-b border-primary/20 py-2.5 px-4 text-center">
        <span className="text-primary uppercase tracking-[0.08em] text-[8px] md:text-xs font-bold">
          Free Kickstart for Busy Over-30s Who Keep Falling Off
        </span>
      </div>

      <header className="relative pt-12 md:pt-20 pb-8 md:pb-12 px-4 md:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Headline */}
          <h1 className="text-[26px] md:text-4xl lg:text-6xl font-black text-[hsl(215,30%,15%)] leading-[1.05] mb-4 md:mb-6">
          Sick of Falling Off Every Plan You Start? Here's How to Get Stupidly Consistent to Lose Fat, Get Strong, and Feel Like Yourself Again
          </h1>

          {/* Subheadline */}
          <p className="text-sm md:text-lg text-foreground/80 font-semibold">
          Join the free 10-Day Habit Kickstart and learn the system that's helped hundreds of over-30s lose fat, get their energy back, get strong, and feel like themselves again - without training every day or eating bland food.
          </p>

          {/* ACTION CLUSTER */}
          <div className="flex flex-col items-center">
            <div id="signup-form" className="w-full max-w-[480px] mx-auto -mt-10 md:-mt-12">
              <PulseFormEmbed id="hero-inline-7DTFHh8ZmEmWrmVpsktd" />
            </div>

            <div className="flex flex-col items-center -mt-24 md:-mt-28">
              <p className="text-primary font-bold text-[10px] md:text-xs uppercase tracking-wider mb-1">
              Join the Free 10-Day Kickstart
              </p>
              <div className="mb-2">
                <CountdownTimer compact />
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
        </div>
      </header>
    </>);

};

export default HeroSection;