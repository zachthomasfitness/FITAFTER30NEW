const clients = [
  {
    name: "Mark S.",
    result: "Lost 12lbs",
    description:
      "Managing Director working 50+ hours. We used habit layering to ensure his progress stayed on track despite high-stress weeks and frequent travel.",
  },
  {
    name: "James R.",
    result: "Lost 15lbs",
    description:
      'Used the "Social Ledger" system to navigate weekend social events without having to restrict himself or skip Friday beers.',
  },
  {
    name: "David L.",
    result: "8% Body Fat Loss",
    description:
      "Built a bulletproof routine that prioritized sleep and tactical nutrition, allowing him to regain his energy levels and mental focus.",
  },
  {
    name: "Chris B.",
    result: "Consistent Results",
    description:
      'Implemented the exactly tactical habits to move from "constantly tired" to high-performance health in less than 6 weeks.',
  },
];

const ProofSection = () => {
  return (
    <section className="py-24 px-6 border-y border-border">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-16 max-w-4xl mx-auto leading-tight">
          Meet the clients who have transformed their habits with this exact system
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="client-card">
              <div className="aspect-video bg-secondary flex items-center justify-center border-b border-border text-muted-foreground italic">
                [Before / After Image {index + 1}]
              </div>
              <div className="p-8 text-left">
                <h4 className="text-xl font-bold text-foreground mb-2">
                  {client.name} — <span className="brand-text">{client.result}</span>
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {client.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
