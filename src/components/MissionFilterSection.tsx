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
  "Don't want to stay fit for more than 3 months",
];

const MissionFilterSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('signup-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-10 md:mb-14">
          Who is this for?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
          {/* The Fit Card */}
          <div className="glassmorphism-card p-6 md:p-8 text-left flex gap-4 md:gap-6">
            <div className="text-4xl md:text-5xl text-primary flex-shrink-0">✓</div>
            <ul className="space-y-3 md:space-y-4">
              {fitList.map((item, index) => (
                <li key={index} className="text-base md:text-lg text-foreground/90">
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          {/* The Rejection Card */}
          <div className="glassmorphism-card p-6 md:p-8 text-left flex gap-4 md:gap-6">
            <div className="text-4xl md:text-5xl text-destructive flex-shrink-0">✕</div>
            <ul className="space-y-3 md:space-y-4">
              {rejectList.map((item, index) => (
                <li key={index} className="text-base md:text-lg text-foreground/90">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Button - Match main CTA sizing */}
        <button
          onClick={scrollToForm}
          className="brand-bg hover:scale-105 text-primary-foreground text-[15px] md:text-2xl font-black py-[22px] md:py-6 px-9 md:px-14 rounded-xl transform transition btn-shadow uppercase whitespace-nowrap"
        >
          Join the FREE 14 Day Kickstart →
        </button>
      </div>
    </section>
  );
};

export default MissionFilterSection;
