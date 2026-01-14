import { Check, X } from "lucide-react";

const fitList = [
  "Busy men in their 30s & 40s",
  "High-performers and fathers",
  "You love food",
  "You value efficiency",
  "You want results that actually stick",
];

const rejectList = [
  "You're looking for a 'get shredded quick' magic pill",
  "You enjoy spending 2 hours in the gym",
  "You hate good food & eating out",
];

const MissionFilterSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-extrabold text-foreground mb-8 md:mb-12">
          Is this for you?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* The Fit Card */}
          <div className="glassmorphism-card p-6 md:p-8 text-left">
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 md:mb-6 uppercase tracking-wide">
              This is for you if:
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {fitList.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The Rejection Card */}
          <div className="glassmorphism-card p-6 md:p-8 text-left">
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 md:mb-6 uppercase tracking-wide">
              This is not for you if:
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {rejectList.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionFilterSection;
