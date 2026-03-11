import CountdownTimer from "./CountdownTimer";
import PulseFormEmbed from "./PulseFormEmbed";

const HeroSection = () => {
  return (
    <>
      {/* Top Banner */}
      <div className="w-full bg-primary/10 border-b border-primary/20 py-2.5 px-4 text-center">
        <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.15em]">
          A FREE 10-DAY HABIT KICKSTART FOR MEN OVER 30
        </span>
      </div>

      <header className="relative pt-12 md:pt-20 pb-8 md:pb-12 px-4 md:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Headline - pure white, natural text wrap */}
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-foreground leading-[1.05] mb-4 md:mb-6">
          Sick of Falling Off Every Plan You Start? Here's How to Get Stupidly Consistent to Finally Feel Confident in Your Own Skin Again
          </h1>

          {/* Subheadline - clean and focused */}
          <p className="text-base md:text-xl text-foreground/80 font-semibold">
            Join the Free 14-Day Habit Kickstart to build a foundation of consistency - without giving up the foods you love or living in the gym.
          </p>

          {/* ACTION CLUSTER: Form -> Start Date -> Timer -> Live Line */}
          <div className="flex flex-col items-center">
            {/* Sign-up form wrapper - pulled up toward subheadline */}
            <div id="signup-form" className="w-full max-w-[480px] mx-auto -mt-10 md:-mt-12">
              <PulseFormEmbed id="hero-inline-7DTFHh8ZmEmWrmVpsktd" />
            </div>

            {/* Start Date + Timer container - pulled up tight to form submit button */}
            <div className="flex flex-col items-center -mt-24 md:-mt-28">
              <p className="text-primary font-bold text-[10px] md:text-xs uppercase tracking-wider mb-1">
                Start Date: January 26th
              </p>
              <div className="mb-2">
                <CountdownTimer compact />
              </div>
            </div>

            {/* Live Status - at the bottom of the cluster */}
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
    </>
  );
};

export default HeroSection;
