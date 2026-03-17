import henryTransformation from "@/assets/henry-transformation.png";
import immyTransformation from "@/assets/immy-transformation.png";
import tomTransformation from "@/assets/tom-transformation.png";
import sarahTransformation from "@/assets/sarah-transformation.png";
import cianTransformation from "@/assets/cian-transformation.jpg";

const clients = [
  {
    name: "Henry",
    result: "Dropped his body fat from 29% to 14% and gained 10lbs of muscle in 10 months",
    detail: "Training 2x/week. Still goes to Wolves games. Still has beers with his mates.",
    image: henryTransformation,
  },
  {
    name: "Immy",
    result: "Lost 8.5kg and dropped her body fat from 36% to 20%",
    detail: "Got her energy back. Feels strong again. Feels herself again.",
    image: immyTransformation,
  },
  {
    name: "Tom",
    result: "Lost 24lbs",
    detail: '"I don\'t even feel like I\'m on a diet anymore."',
    image: tomTransformation,
  },
  {
    name: "Sarah",
    result: "Stayed consistent for 6 years, completely transforming not only how she looks, but who she is",
    detail: "The photos tell the story - from 2020 to 2026, showing up even through the hard times.",
    image: sarahTransformation,
  },
  {
    name: "Cian",
    result: "Lost 26lbs and dropped his body fat from 26% to 12% in 6 months",
    detail: "Training 3x/week. Still eats out. Still enjoys life.",
    image: cianTransformation,
  },
];

const ProofSection = () => {
  return (
    <section className="pt-6 md:pt-10 pb-20 md:pb-24 border-y border-border">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center px-4 md:px-6 mb-12 md:mb-16">
          <h2 className="text-[26px] md:text-5xl font-extrabold text-foreground leading-tight">
            Here's What's Possible When You Get Stupidly Consistent:
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
                <h4 className="text-xl font-bold text-foreground mb-2">
                  {client.name}
                </h4>
                <p className="text-sm text-foreground mb-2">{client.result}</p>
                <p className="text-sm italic text-muted-foreground">{client.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
