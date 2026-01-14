import { useState } from "react";
import LeadCaptureModal from "./LeadCaptureModal";
import VidalyticsPlayer from "./VidalyticsPlayer";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          {/* Massive Headline - text-4xl mobile, text-8xl desktop */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-foreground leading-[1.1] mb-4 md:mb-6">
            How to lose<br />
            <span className="brand-text">5-10lbs in 6 weeks</span><br />
            <span className="whitespace-nowrap">as a guy in your 30's</span>
          </h1>

          {/* Context Text */}
          <p className="text-base md:text-xl text-muted-foreground font-medium mb-8 md:mb-12">
            (Whilst navigating work, family & friends)
          </p>

          {/* VSL Player Section */}
          <div className="relative max-w-3xl mx-auto mb-8 md:mb-12 group">
            <div className="absolute -inset-1 brand-bg rounded-[20px] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative bg-secondary rounded-[20px] overflow-hidden border border-border vsl-glow">
              <VidalyticsPlayer />
            </div>
          </div>

          {/* Description - 10% larger on mobile: 13px -> 14px */}
          <p className="text-[14px] md:text-xl leading-relaxed text-foreground/80 mb-8 md:mb-10 max-w-3xl mx-auto px-2 md:px-0">
            14 days of the exact tactical habits my clients in their 30s and 40s use to make sustainable transformations — <span className="text-foreground font-bold">without sacrificing their favourite food or their social lives.</span>
          </p>

          {/* CTA Section */}
          <div className="flex flex-col items-center px-4 md:px-0">
            {/* CTA Button - Above everything - 10% larger on mobile: 14px -> 15px, py-5 -> py-5.5 */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="brand-bg hover:scale-105 text-primary-foreground text-[15px] md:text-2xl font-black py-[22px] md:py-6 px-9 md:px-14 rounded-xl transform transition btn-shadow uppercase mb-8 md:mb-10 whitespace-nowrap"
            >
              Join the FREE 14 Day Kickstart →
            </button>

            {/* Start Date & Countdown - 10% larger on mobile: base -> text-[17px] */}
            <div className="flex flex-col items-center gap-4 md:gap-5 mb-6">
              <p className="text-primary font-bold text-[17px] md:text-lg uppercase tracking-wide">
                Start Date: January 26th
              </p>
              <CountdownTimer />
            </div>

            {/* Live Status - 10% larger on mobile: 11px -> 12px */}
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

      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default HeroSection;
