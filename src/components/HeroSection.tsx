import { useState } from "react";
import LeadCaptureModal from "./LeadCaptureModal";
import VidalyticsPlayer from "./VidalyticsPlayer";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Top Banner - Full width slim banner */}
      <div className="w-full bg-primary/10 border-b border-primary/30 py-2 px-4 text-center">
        <span className="text-primary text-xs font-bold uppercase tracking-widest">
          Now open: The 14 day habit kickstart
        </span>
      </div>

      <header className="relative pt-8 md:pt-16 pb-8 md:pb-16 px-4 md:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Exact 3-Line Headline - "as a guy in your 30's" stays on one line */}
          <h1 className="text-[1.75rem] md:text-6xl lg:text-8xl font-extrabold text-foreground leading-[1.1] mb-2 md:mb-6">
            How to lose<br />
            <span className="brand-text">5-10lbs in 6 weeks</span><br />
            <span className="whitespace-nowrap">as a guy in your 30's</span>
          </h1>

          {/* Subheading - smaller on mobile, tighter gap */}
          <p className="text-sm md:text-2xl text-muted-foreground font-medium mb-4 md:mb-10 whitespace-nowrap">
            (Whilst navigating work, family & friends)
          </p>

          {/* VSL Player Section - Vidalytics embed */}
          <div className="relative max-w-3xl mx-auto mb-6 md:mb-12 group">
            <div className="absolute -inset-1 brand-bg rounded-[20px] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative bg-secondary rounded-[20px] overflow-hidden border border-border vsl-glow">
              <VidalyticsPlayer />
            </div>
          </div>

          {/* Description - smaller on mobile */}
          <p className="text-sm md:text-xl text-foreground/80 leading-relaxed mb-3 md:mb-6 max-w-2xl mx-auto">
            14 days of the exact tactical habits my clients in their 30s and 40s use to make sustainable transformations —{" "}
            <span className="text-foreground font-bold">
              without sacrificing their favourite food or their social lives.
            </span>
          </p>

          {/* CTA - smaller on mobile */}
          <div className="flex flex-col items-center gap-3 md:gap-4 mb-10 md:mb-20">
            {/* Challenge Start Date */}
            <p className="text-primary font-bold text-sm md:text-lg uppercase tracking-wide">
              Start Date: January 26th
            </p>
            {/* Countdown Timer */}
            <CountdownTimer />
            <button
              onClick={() => setIsModalOpen(true)}
              className="brand-bg hover:scale-105 text-primary-foreground text-center text-base md:text-2xl font-black py-4 md:py-6 px-8 md:px-12 rounded-xl transform transition btn-shadow uppercase"
            >
              Join the FREE 14 Day Kickstart →
            </button>
            {/* Live Status - Green dot */}
            <div className="flex items-center justify-center gap-3 text-muted-foreground font-medium text-xs md:text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#22c55e]"></span>
              </span>
              This is a live challenge and I'll be personally coaching you
            </div>
          </div>
        </div>
      </header>

      {/* Lead Capture Modal */}
      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default HeroSection;
