const clients = [
  {
    name: "Tom",
    result: "-24lbs",
  },
  {
    name: "Henry",
    result: "-19lbs",
  },
  {
    name: "Eisa",
    result: "-67lbs",
  },
  {
    name: "Reuben",
    result: "-16lbs",
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
              <div className="aspect-[4/5] bg-secondary flex items-center justify-center border-b border-border text-muted-foreground">
                <div className="text-center">
                  <div className="text-6xl mb-2">📸</div>
                  <span className="text-xs uppercase tracking-wider">{client.name}'s Transformation</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-foreground mb-1">
                  {client.name}
                </h4>
                <span className="text-2xl font-black brand-text">{client.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
