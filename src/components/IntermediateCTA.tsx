import { useState } from "react";
import LeadCaptureModal from "./LeadCaptureModal";

const IntermediateCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-8 md:py-12 px-4 md:px-6 text-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="brand-bg hover:scale-105 text-primary-foreground text-center text-base md:text-2xl font-black py-4 md:py-6 px-8 md:px-12 rounded-xl transform transition btn-shadow uppercase"
        >
          Join the FREE 14 Day Kickstart →
        </button>
      </section>

      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default IntermediateCTA;
