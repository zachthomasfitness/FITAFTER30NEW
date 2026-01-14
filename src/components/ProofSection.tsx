import tomTransformation from "@/assets/tom-transformation.png";
import henryTransformation from "@/assets/henry-transformation.png";
import eisaTransformation from "@/assets/eisa-transformation.jpg";
import cianTransformation from "@/assets/cian-transformation.jpg";

const clients = [
  {
    name: "Cian",
    result: "-26lbs",
    image: cianTransformation,
  },
  {
    name: "Henry",
    result: "-19lbs",
    image: henryTransformation,
  },
  {
    name: "Eisa",
    result: "-67lbs",
    image: eisaTransformation,
  },
  {
    name: "Tom",
    result: "-24lbs",
    image: tomTransformation,
  },
];

const ProofSection = () => {
  return (
    <section className="py-20 md:py-24 border-y border-border">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - text-5xl on desktop, max size for 2 lines on mobile */}
        <div className="text-center px-6 mb-12 md:mb-16">
          <h2 className="text-[23px] leading-[1.15] md:text-5xl md:leading-tight font-extrabold text-foreground">
            Meet the clients who have transformed their habits
          </h2>
        </div>

        {/* Client Cards Slider */}
        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 md:gap-6 px-6">
          {clients.map((client, index) => (
            <div key={index} className="client-card">
              <div className="aspect-square bg-secondary flex items-center justify-center border-b border-border text-muted-foreground overflow-hidden">
                {client.image ? (
                  <img 
                    src={client.image} 
                    alt={`${client.name}'s transformation`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <div className="text-6xl mb-2">📸</div>
                    <span className="text-xs uppercase tracking-wider">{client.name}'s Transformation</span>
                  </div>
                )}
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
