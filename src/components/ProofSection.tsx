import henryTransformation from "@/assets/henry-transformation.png";
import immyTransformation from "@/assets/immy-transformation.png";
import tomTransformation from "@/assets/tom-transformation.jpg";
import sarahTransformation from "@/assets/sarah-transformation.png";
import cianTransformation from "@/assets/cian-transformation.jpg";

const clients = [
{
  name: "Henry",
  result: "29% → 14% body fat, +10lbs muscle in 10 months",
  detail: "2 sessions/week. Still goes for drinks regularly.",
  image: henryTransformation
},
{
  name: "Immy",
  result: "Lost 8.5kg, 36% → 20% body fat",
  detail: "Got her energy back. Feels herself again.",
  image: immyTransformation
},
{
  name: "Tom",
  result: "Lost 24lbs",
  detail: '"Doesn\'t even feel like a diet anymore."',
  image: tomTransformation
},
{
  name: "Sarah",
  result: "6 years of consistency.",
  detail: "Completely transformed. The photos tell the story.",
  image: sarahTransformation
},
{
  name: "Cian",
  result: "Lost 26lbs, 26% → 12% body fat in 6 months",
  detail: "3 sessions/week. Still eats out, still enjoys life.",
  image: cianTransformation
}];


const ProofSection = () => {
  return (
    <section className="md:pt-10 md:pb-24 bg-transparent border-y border-border/30 pt-[30px] pb-[30px]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center px-4 md:px-6 mb-12 md:mb-16">
          <h2 className="md:text-4xl font-extrabold text-foreground leading-tight pl-0 mx-0 text-lg">
            The Same System These Guys Used:
          </h2>
        </div>

        {/* Client Cards Slider */}
        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 md:gap-6 px-6">
          {clients.map((client, index) =>
          <div key={index} className="client-card">
              <div className="aspect-square bg-muted/30 flex items-center justify-center border-b border-border/20 text-muted-foreground overflow-hidden">
                {client.image ?
              <img
                src={client.image}
                alt={`${client.name}'s transformation`}
                className="w-full h-full object-cover" /> :


              <div className="text-center">
                    <div className="text-6xl mb-2">📸</div>
                    <span className="text-xs uppercase tracking-wider">{client.name}'s Transformation</span>
                  </div>
              }
              </div>
              <div className="p-4 text-center">
                <h4 className="text-base font-bold text-foreground mb-1">
                  {client.name}
                </h4>
                <p className="text-xs text-secondary-foreground mb-1">{client.result}</p>
                <p className="text-xs italic text-muted-foreground">{client.detail}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default ProofSection;