import { useState } from "react";
import LeadCaptureModal from "./LeadCaptureModal";

const FooterCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer id="join" className="py-16 md:py-24 px-6 border-t border-border text-center">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-8 md:mb-10">
            Ready to start Day 1?
          </h2>
          
          {/* CTA Button - Match main CTA sizing */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="brand-bg text-primary-foreground text-[15px] md:text-2xl font-black py-[22px] md:py-6 px-9 md:px-14 rounded-xl shadow-2xl hover:scale-105 transition btn-shadow uppercase whitespace-nowrap"
          >
            Join the FREE 14 Day Kickstart
          </button>
          
          <p className="mt-8 md:mt-10 text-muted-foreground text-base italic">
            Limited spots for the Jan 26th Intake
          </p>
        </div>
      </footer>

      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default FooterCTA;
