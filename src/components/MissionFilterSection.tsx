import { useState } from "react";
import LeadCaptureModal from "./LeadCaptureModal";

const fitList = [
  "Busy men in their 30's & 40's",
  "High-performers and fathers",
  "Food lovers and pub-goers",
  "You want results that actually stick",
];

const rejectList = [
  "Need abs tomorrow",
  "Enjoy 2-hour daily gym sessions",
  "You hate good food & eating out",
  "You don't want to stay fit for more than 3 months",
];

const MissionFilterSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-12 md:py-20 px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-5xl font-extrabold text-foreground mb-8 md:mb-12">
            Who is this for?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
            {/* The Fit Card */}
            <div className="glassmorphism-card p-6 md:p-8 text-left flex gap-4 md:gap-6">
              <div className="text-4xl md:text-5xl text-primary flex-shrink-0">✓</div>
              <ul className="space-y-2 md:space-y-3">
                {fitList.map((item, index) => (
                  <li key={index} className="text-sm md:text-base text-foreground/90">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* The Rejection Card */}
            <div className="glassmorphism-card p-6 md:p-8 text-left flex gap-4 md:gap-6">
              <div className="text-4xl md:text-5xl text-destructive flex-shrink-0">✕</div>
              <ul className="space-y-2 md:space-y-3">
                {rejectList.map((item, index) => (
                  <li key={index} className="text-sm md:text-base text-foreground/90">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="brand-bg hover:scale-105 text-primary-foreground text-base md:text-xl font-black py-4 md:py-5 px-8 md:px-12 rounded-xl transform transition btn-shadow uppercase"
          >
            Join the FREE 14 Day Kickstart →
          </button>
        </div>
      </section>

      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default MissionFilterSection;