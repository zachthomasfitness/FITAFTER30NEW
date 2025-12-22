import { useState } from "react";
import LeadCaptureModal from "./LeadCaptureModal";

const FooterCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer id="join" className="py-16 md:py-24 px-6 border-t border-border text-center">
        <div className="max-w-3xl mx-auto">
          {/* Smaller text on mobile, fits one line */}
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-6 md:mb-8 whitespace-nowrap">
            Ready to start Day 1?
          </h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="brand-bg text-primary-foreground text-lg md:text-xl font-black py-5 md:py-6 px-10 md:px-14 rounded-2xl shadow-2xl hover:scale-105 transition btn-shadow uppercase"
          >
            Join the FREE 14 Day Kickstart
          </button>
          <p className="mt-6 md:mt-8 text-muted-foreground text-sm italic">
            Limited spots available
          </p>
        </div>
      </footer>

      {/* Lead Capture Modal */}
      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default FooterCTA;
