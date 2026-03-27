import henryTransformation from "@/assets/henry-transformation.png";
import immyTransformation from "@/assets/immy-transformation.png";
import tomTransformation from "@/assets/tom-transformation.jpg";
import sarahTransformation from "@/assets/sarah-transformation.png";
import cianTransformation from "@/assets/cian-transformation.jpg";

const clients = [
{
  name: "Henry",
  result: "Feels attractive and confident around his partner again",
  detail: "",
  image: henryTransformation
},
{
  name: "Immy",
  result: "From struggling with Endometriosis & Fibroids to running, lifting & feeling like her younger self again",
  detail: "",
  image: immyTransformation
},
{
  name: "Tom",
  result: "Finally got his energy back & feels confident in his work shirts again",
  detail: "",
  image: tomTransformation
},
{
  name: "Sarah",
  result: "Finally feels like she belongs in the gym",
  detail: "",
  image: sarahTransformation
},
{
  name: "Cian",
  result: "Finally enjoys holidays without worrying about taking his shirt off",
  detail: "",
  image: cianTransformation
}];

const ProofSection = () => {
  return (
    <section className="md:pt-10 md:pb-24 bg-transparent border-y border-border/20 pt-[30px] pb-[30px]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center px-4 md:px-6 mb-12 md:mb-16">
          <h2 className="md:text-4xl font-extrabold text-foreground leading-tight pl-0 mx-0 text-lg">
            This Actually Works. Just Ask These Lot.
          </h2>
        </div>

        {/* Client Cards Slider */}
        <div className="relative">
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
          {/* Swipe hint */}
          <div className="flex items-center justify-center gap-1.5 mt-4 md:hidden">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">Swipe</span>
            <svg className="w-4 h-4 text-primary animate-bounce-x" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>);

};

export default ProofSection;