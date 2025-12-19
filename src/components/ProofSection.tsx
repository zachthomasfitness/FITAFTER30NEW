const clients = [
  {
    name: "Mark S.",
    result: "Lost 12lbs",
    description:
      "High-level director. We focused on tactical 20-minute sessions he could do anywhere.",
  },
  {
    name: "James R.",
    result: "Lost 15lbs",
    description:
      'Used our "Social Ledger" to keep his social life while dropping the gut.',
  },
  {
    name: "David L.",
    result: "8% Fat Loss",
    description:
      "Prioritized sleep micro-habits to regain energy and mental focus.",
  },
  {
    name: "Chris B.",
    result: "Peak Health",
    description:
      'Moved from "office-tired" to high-performance in under 6 weeks.',
  },
];

const ProofSection = () => {
  return (
    <section className="py-24 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center px-6 mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 max-w-4xl mx-auto leading-tight">
            Meet the clients who have transformed their habits
          </h2>
          <p className="text-muted-foreground text-sm md:hidden">
            Swipe to see transformations
          </p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 md:gap-6 px-6">
          {clients.map((client, index) => (
            <div key={index} className="client-card">
              <div className="aspect-[4/5] bg-secondary flex items-center justify-center border-b border-border text-muted-foreground italic">
                [Before/After {index + 1}]
              </div>
              <div className="p-6 text-left">
                <h4 className="text-lg font-bold text-foreground mb-2">
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
