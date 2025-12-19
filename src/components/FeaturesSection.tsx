const features = [
  {
    number: "01",
    title: "Tactical Habits",
    description:
      "Build a sustainable week that gets incredible results without the need for willpower.",
  },
  {
    number: "02",
    title: "Beer & Steak OK",
    description:
      "Learn to navigate dinners and social events without stalling your progress.",
  },
  {
    number: "03",
    title: "Proven Results",
    description:
      "The same habit layering system taught to hundreds of clients over 10 years.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-16 italic">
          Built for the <span className="brand-text uppercase">Busy Man</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 client-card">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 mx-auto italic font-black">
                {feature.number}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
