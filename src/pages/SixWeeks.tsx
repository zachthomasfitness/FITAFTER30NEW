import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import henryTransformation from "@/assets/henry-stack-transformation.png";
import cianTransformation from "@/assets/cian-stack-transformation.jpg";
import tomTransformation from "@/assets/tom-stack-transformation.jpg";
import reubenTransformation from "@/assets/reuben-transformation.jpg";
import eisaTransformation from "@/assets/eisa-stack-transformation.jpg";
import immyTransformation from "@/assets/immy-transformation.png";
import callumTransformation from "@/assets/callum-transformation.jpg";
import hollieTransformation from "@/assets/hollie-transformation.jpg";
import jonTransformation from "@/assets/jon-stack-transformation.jpg";

const SixWeeks = () => {
  const transformations = [
    { 
      name: "Tom", 
      result: "-24lbs", 
      image: tomTransformation,
      story: "Trained 2x per week & loves pizza"
    },
    { 
      name: "Henry", 
      result: "-19lbs", 
      image: henryTransformation,
      story: "Busy Director who found his 'Floor'"
    },
    { 
      name: "Cian", 
      result: "-26lbs", 
      image: cianTransformation,
      story: "Dropped 26lbs without the daily gym grind"
    },
    { 
      name: "Eisa", 
      result: "-82lbs", 
      image: eisaTransformation,
      story: "Navigated work travel without stalling"
    },
    { 
      name: "Reuben", 
      result: "-16lbs", 
      image: reubenTransformation,
      story: "Gained muscle while eating family takeaways"
    },
    { 
      name: "Immy", 
      result: "-20lbs",
      image: immyTransformation,
      story: "Transformed while balancing a busy schedule"
    },
    { 
      name: "Callum", 
      result: "+10kg Muscle",
      image: callumTransformation,
      story: "Built lean muscle with minimal gym time"
    },
    { 
      name: "Hollie", 
      result: "-23lbs",
      image: hollieTransformation,
      story: "Gained strength and confidence"
    },
    { 
      name: "Jon", 
      result: "-33lbs",
      image: jonTransformation,
      story: "Complete body transformation"
    },
  ];

  const blueprintCards = [
    {
      number: "01",
      title: "Lean Build Programme",
      description: "Maximum results from minimal gym time.",
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

  const handleJoinClick = () => {
    // Future: redirect to payment/checkout flow
    console.log("Join clicked - implement payment flow");
  };

  // Duplicate the transformations for seamless infinite scroll
  const duplicatedTransformations = [...transformations, ...transformations];

  return (
    <main className="min-h-screen">
      {/* Above-The-Fold Hero Section */}
      <section className="pt-4 md:pt-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Compact Headline */}
          <h1 className="text-xl md:text-4xl lg:text-5xl font-black text-center text-white mb-4 md:mb-8 leading-tight">
            Give me 6 weeks to install the Habit Stack,<br />
            <span className="text-primary">and I'll give you a body you're actually proud to own.</span>
          </h1>
        </div>
      </section>

      {/* Infinite Proof Carousel */}
      <section className="overflow-hidden py-2 md:py-4">
        <div 
          className="flex animate-marquee hover:[animation-play-state:paused]"
          style={{ width: 'max-content' }}
        >
          {duplicatedTransformations.map((item, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-[200px] md:w-[240px] mx-2 md:mx-3"
            >
              <div className="glass-card overflow-hidden">
                {/* Photo */}
                <div className="aspect-square overflow-hidden bg-foreground/5">
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={`${item.name}'s transformation`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-foreground/30 text-xs">
                      [Photo]
                    </div>
                  )}
                </div>
                
                {/* Name, Result & Story */}
                <div className="p-3 md:p-4 text-center">
                  <p className="text-primary font-black text-base md:text-lg">
                    {item.name}: {item.result}
                  </p>
                  <p className="text-foreground/60 text-xs md:text-sm mt-1 line-clamp-2">
                    "{item.story}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Immediate CTA Section */}
      <section className="py-4 md:py-8 px-4">
        <div className="max-w-xl mx-auto text-center space-y-2">
          <Button 
            onClick={handleJoinClick}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full btn-shadow transition-all duration-300 hover:scale-105 w-full md:w-auto"
          >
            Join The Habit Stack Today <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-foreground/50 text-xs md:text-sm">
            Limited spots for the Jan 26th Intake
          </p>
        </div>
      </section>

      {/* 6-Week Blueprint Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 md:mb-12">
            The 6-Week Blueprint
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blueprintCards.map((card) => (
              <div key={card.number} className="glass-card p-6 md:p-8 text-center">
                <span className="text-primary font-black text-4xl">{card.number}</span>
                <h3 className="text-white font-bold text-xl md:text-2xl mt-4 mb-2">{card.title}</h3>
                <p className="text-foreground/60">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Mockup Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
            {/* Phone Mockup */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative w-64 h-[500px] bg-foreground/5 rounded-[3rem] border-4 border-foreground/20 p-2">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-foreground/20 rounded-full"></div>
                <div className="w-full h-full bg-foreground/10 rounded-[2.5rem] flex items-center justify-center">
                  <span className="text-foreground/40 text-sm text-center px-4">[App Screenshot Mockup]</span>
                </div>
              </div>
            </div>
            
            {/* Features List */}
            <div className="space-y-6 text-center lg:text-left order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Everything you need<br />
                <span className="text-primary">inside my app</span>
              </h2>
              
              <div className="space-y-6">
                {appFeatures.map((feature) => (
                  <div key={feature.number} className="flex gap-4 justify-center lg:justify-start">
                    <span className="text-primary font-black text-xl">{feature.number}</span>
                    <div className="text-left">
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
      <section className="py-12 md:py-16 px-4 pb-24">
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center space-y-8">
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
              onClick={handleJoinClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full btn-shadow transition-all duration-300 hover:scale-105 w-full md:w-auto"
            >
              Join The Habit Stack Today <ArrowRight className="ml-2 h-5 w-5" />
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

export default SixWeeks;
