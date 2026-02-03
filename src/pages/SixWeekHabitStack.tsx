import { Button } from "@/components/ui/button";
import henryTransformation from "@/assets/henry-stack-transformation.png";
import cianTransformation from "@/assets/cian-stack-transformation.jpg";
import jagTransformation from "@/assets/jag-transformation.jpg";
import tomTransformation from "@/assets/tom-stack-transformation.jpg";
import sarahTransformation from "@/assets/sarah-transformation.png";
import reubenTransformation from "@/assets/reuben-transformation.jpg";
import lawsonTransformation from "@/assets/lawson-transformation.jpg";
import edTransformation from "@/assets/ed-transformation.jpg";
import jonTransformation from "@/assets/jon-transformation.jpg";

const SixWeekHabitStack = () => {
  const transformations = [
    { name: "Henry", result: "-19lbs", image: henryTransformation },
    { name: "Cian", result: "-26lbs", image: cianTransformation },
    { name: "Jag", result: "-18lbs", image: jagTransformation },
    { name: "Tom", result: "-24lbs", image: tomTransformation },
    { name: "Sarah", result: "-32lbs", image: sarahTransformation },
    { name: "Reuben", result: "-16lbs", image: reubenTransformation },
    { name: "Lawson", result: "-22lbs", image: lawsonTransformation },
    { name: "Ed", result: "-45lbs", image: edTransformation },
    { name: "Jon", result: "-58lbs", image: jonTransformation },
  ];

  const blueprintCards = [
    {
      number: "01",
      title: "Lean Build Programme",
      description: "Maximum training efficiency in 2-3 sessions per week. No gym chores.",
    },
    {
      number: "02",
      title: "Foodie-Flex Framework",
      description: "2 high-calorie days per week. Sustainable fat loss without restricted social life.",
    },
    {
      number: "03",
      title: "Confident Lifter Blueprint",
      description: "Stop swinging weights. Learn the mechanics required for muscle growth.",
    },
    {
      number: "04",
      title: "Consistency Compass",
      description: "The permanent strategy to stay lean and in control for life.",
    },
  ];

  const appFeatures = [
    {
      number: "01",
      title: "Personal Programme & Exercise Videos",
      description: "Step-by-step guidance on every lift.",
    },
    {
      number: "02",
      title: "Live Coaching Adjustments",
      description: "I tweak your plan as you progress.",
    },
    {
      number: "03",
      title: "Private Group Accountability",
      description: "High-performing community for the 6 weeks.",
    },
    {
      number: "04",
      title: "Weekly Live Coaching Calls",
      description: "Direct access to me to solve your hurdles.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-tight text-white">
            Lose 10lbs in 6 weeks with just 2 workouts per week without giving up your favourite foods.
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            The 6 week habit stack is the next phase of habits designed to get the most from your gym time and lock in the food habits that will keep you lean for life.
          </p>
          
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full btn-shadow transition-all duration-300 hover:scale-105"
          >
            Join the 6 Week Habit Stack
          </Button>
        </div>
      </section>

      {/* Proof Slider Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            The Habit Stack In Action
          </h2>
          
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 no-scrollbar">
            {transformations.map((item, index) => (
              <div 
                key={index}
                className="client-card p-4"
              >
                <div className="aspect-square bg-foreground/5 rounded-xl mb-4 flex items-center justify-center">
                  {item.hasImage ? (
                    <span className="text-foreground/40 text-sm">Client Photo</span>
                  ) : (
                    <span className="text-foreground/30 text-lg font-semibold">{item.name}</span>
                  )}
                </div>
                {item.hasImage && (
                  <div className="text-center">
                    <p className="text-primary font-bold text-xl">{item.name}</p>
                    <p className="text-primary font-black text-2xl">{item.result}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <p className="text-center text-foreground/50 text-sm mt-4 md:hidden">
            Swipe to see all proof
          </p>
        </div>
      </section>

      {/* 6-Week Blueprint Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            The 6-Week Blueprint
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blueprintCards.map((card) => (
              <div key={card.number} className="glassmorphism-card p-8">
                <span className="text-primary font-black text-4xl">{card.number}</span>
                <h3 className="text-white font-bold text-2xl mt-4 mb-2">{card.title}</h3>
                <p className="text-foreground/60">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Mockup Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative w-64 h-[500px] bg-foreground/5 rounded-[3rem] border-4 border-foreground/20 p-2">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-foreground/20 rounded-full"></div>
                <div className="w-full h-full bg-foreground/10 rounded-[2.5rem] flex items-center justify-center">
                  <span className="text-foreground/40 text-sm text-center px-4">[App Screenshot Mockup]</span>
                </div>
              </div>
            </div>
            
            {/* Features List */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Everything you need<br />
                <span className="text-primary">inside my app</span>
              </h2>
              
              <div className="space-y-6">
                {appFeatures.map((feature) => (
                  <div key={feature.number} className="flex gap-4">
                    <span className="text-primary font-black text-xl">{feature.number}</span>
                    <div>
                      <h3 className="text-white font-bold text-lg">{feature.title}</h3>
                      <p className="text-foreground/60">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee & Price Section */}
      <section className="py-16 px-4 pb-24">
        <div className="max-w-2xl mx-auto">
          <div className="glassmorphism-card p-8 md:p-12 text-center space-y-8">
            {/* Guarantee Badge */}
            <div className="inline-block">
              <div className="bg-primary text-primary-foreground font-black text-5xl md:text-6xl px-6 py-4 rounded-2xl">
                5LB
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-2xl md:text-3xl mb-4">
                The 5LB Guarantee
              </h3>
              <p className="text-foreground/70">
                If you don't lose at least 5lbs in the 6 weeks using this system, I will continue to work with you FREE OF CHARGE until you do.
              </p>
            </div>
            
            {/* Price */}
            <div className="text-primary font-black text-5xl md:text-7xl">
              ONLY £149
            </div>
            
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full btn-shadow transition-all duration-300 hover:scale-105 w-full md:w-auto"
            >
              Join the 6 Week Habit Stack
            </Button>
            
            <p className="text-foreground/40 text-sm">
              © 2026 Zach Thomas Coaching
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SixWeekHabitStack;
