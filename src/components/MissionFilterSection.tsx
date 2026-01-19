const fitList = [
  "You've gained weight, but are finally ready to lose the gut.",
  "You know how to train, but you're inconsistent.",
  "You love food and don't want to give up your normal life.",
  "You want to get lean, strong and confident in 2026.",
];

const rejectList = [
  "You're looking for a short cut/magic pill solution.",
  "You love 2-hour daily gym sessions.",
  "You want to eat bland food & discipline is nothing to you.",
  "You only want short term progress.",
];

const MissionFilterSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-10 md:mb-14">
          Who is this for?
        </h2>

        {/* Mobile: Horizontal snap slider | Desktop: 2-column grid */}
        <div className="flex md:grid md:grid-cols-2 gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar md:overflow-visible px-[7.5%] md:px-0">
          {/* The Fit Card */}
          <div className="glassmorphism-card p-6 md:p-8 text-center flex-shrink-0 w-[85%] md:w-full snap-center">
            <div className="text-4xl md:text-5xl text-primary mb-4">✓</div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 md:mb-6">
              This is perfect for you if:
            </h3>
            <ul className="space-y-3 md:space-y-4 text-left">
              {fitList.map((item, index) => (
                <li key={index} className="text-base md:text-lg text-foreground/90">
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          {/* The Rejection Card */}
          <div className="glassmorphism-card p-6 md:p-8 text-center flex-shrink-0 w-[85%] md:w-full snap-center">
            <div className="text-4xl md:text-5xl text-destructive mb-4">✕</div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 md:mb-6">
              This isn't for you if:
            </h3>
            <ul className="space-y-3 md:space-y-4 text-left">
              {rejectList.map((item, index) => (
                <li key={index} className="text-base md:text-lg text-foreground/90">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Swipe hint - mobile only */}
        <p className="md:hidden text-foreground/50 text-sm mt-4">
          Swipe to see both →
        </p>
      </div>
    </section>
  );
};

export default MissionFilterSection;
