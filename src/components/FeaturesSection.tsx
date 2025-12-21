const features = [
  {
    number: "01",
    title: "Tactical Habits",
    description:
      "Build a sustainable week that gets results without the need for willpower.",
  },
  {
    number: "02",
    title: "Beer & Steak OK",
    description:
      "Learn to navigate dinners and social events without stalling progress.",
  },
  {
    number: "03",
    title: "Proven Results",
    description:
      "The same habit system taught to hundreds of clients over 10 years.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 px-0 md:px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-extrabold text-foreground mb-8 md:mb-16 italic px-6 md:px-0">
          Built for the <span className="brand-text uppercase">Busy Man</span>
        </h2>
        
        {/* Horizontal snap slider on mobile, grid on desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar px-6 md:px-0">
          {features.map((feature, index) => (
            <div key={index} className="p-6 md:p-8 feature-card">
              <div className="w-12 md:w-14 h-12 md:h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto italic font-black text-sm md:text-base">
                {feature.number}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
