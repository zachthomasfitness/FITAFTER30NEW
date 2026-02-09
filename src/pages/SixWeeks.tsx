import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import henryTransformation from "@/assets/henry-stack-transformation.png";
import cianTransformation from "@/assets/cian-stack-transformation.jpg";
import tomTransformation from "@/assets/tom-stack-transformation.jpg";
import eisaTransformation from "@/assets/eisa-stack-transformation.jpg";
import immyTransformation from "@/assets/immy-transformation.png";
import callumTransformation from "@/assets/callum-transformation.jpg";
import hollieTransformation from "@/assets/hollie-transformation.jpg";
import jonTransformation from "@/assets/jon-stack-transformation.jpg";
import lawsonTransformation from "@/assets/lawson-stack-transformation.jpg";
import sarahTransformation from "@/assets/sarah-stack-transformation.png";
import jagTransformation from "@/assets/jag-stack-transformation.jpg";
import edTransformation from "@/assets/ed-stack-transformation.jpg";
import appScreenshot from "@/assets/app-screenshot.png";
import appScreenshot2 from "@/assets/app-screenshot-2.png";

const PAYMENT_URL = "https://link.fastpaydirect.com/payment-link/69845a993533382a86c60462";

const SixWeeks = () => {
  const [iframeLoading, setIframeLoading] = useState(true);
  const transformations = [
    { name: "Hollie", result: "-23lbs", image: hollieTransformation, story: "Had never stepped foot in a gym before" },
    { name: "Callum", result: "+10kg Muscle", image: callumTransformation, story: "Stayed consistent despite 12 hour work days" },
    { name: "Lawson", result: "-18lbs", image: lawsonTransformation, story: "Gained the energy to power through long days on his feet" },
    { name: "Immy", result: "-20lbs", image: immyTransformation, story: "Hectic schedule running her own company" },
    { name: "Cian", result: "-26lbs", image: cianTransformation, story: "Stopped training daily and followed a regimented plan" },
    { name: "Ed", result: "-52lbs", image: edTransformation, story: "Lost weight 52lbs and transformed his confidence" },
    { name: "Sarah", result: "Total Transformation", image: sarahTransformation, story: "From complete beginner to fitness lover" },
    { name: "Henry", result: "-19lbs", image: henryTransformation, story: "Still gets to enjoy a few drinks at the weekend" },
    { name: "Jon", result: "-43lbs", image: jonTransformation, story: "Lost 43lbs to regain his confidence" },
    { name: "Jag", result: "+15lbs Muscle", image: jagTransformation, story: "Gained 15lbs of muscle whilst running his own business" },
    { name: "Tom", result: "-24lbs", image: tomTransformation, story: "Feels great in his work shirts again" },
    { name: "Eisa", result: "-82lbs", image: eisaTransformation, story: "Changed his life with simple changes to his diet" },
  ];

  const blueprintCards = [
    {
      number: "01",
      title: "Lean Build Programme",
      description: "Personalised training programme to get maximum results from limited gym time.",
    },
    {
      number: "02",
      title: "Foodie-Flex Framework",
      description: "A framework for foodie's like myself to still get lean and feel great whilst eating the foods they love.",
    },
    {
      number: "03",
      title: "Confident Lifter Blueprint",
      description: "Stop feeling lost in the gym - learn the mechanics to lift effectively and maximise muscle gain.",
    },
    {
      number: "04",
      title: "Consistency Compass",
      description: "This is your strategy for staying lean & in control for life. No more inconsistent, stop-start cycle. The last plan you'll ever need.",
    },
  ];

  const appFeatures = [
    {
      number: "01",
      title: "Personalised Programme & Workout Videos",
      description: "Training optimised to fit your ability, schedule, and equipment access. No random workouts. No guesswork.",
    },
    {
      number: "02",
      title: "Open Door Accountability",
      description: "I coach you, check in on you, and support you with live adjustments as and when needed.",
    },
    {
      number: "03",
      title: "Private Group Support",
      description: "Weekly group calls hosted to answer questions and overcome immediate hurdles.",
    },
    {
      number: "04",
      title: "Food Journal",
      description: "Implement the foodie-flex framework in the app to keep you accountable to the plan we create.",
    },
  ];

  // Duplicate the transformations for seamless infinite scroll
  const duplicatedTransformations = [...transformations, ...transformations];

  return (
    <main className="min-h-screen">
      {/* Above-The-Fold Hero Section */}
      <section className="pt-14 md:pt-24 px-1 md:px-2">
        <div className="max-w-7xl mx-auto">
          {/* Compact Headline */}
          <h1 className="text-[28px] md:text-5xl lg:text-7xl font-black text-center text-white mb-4 md:mb-6 leading-[1.1] md:leading-[1.05] tracking-tight uppercase">
            Give me 6 weeks to install the <span className="text-primary">Habit Stack</span>, and I'll give you a body you're actually <span className="text-primary">proud to own</span>.
          </h1>
          
          {/* Sub-heading */}
          <p className="text-foreground/60 text-base md:text-lg text-center max-w-3xl mx-auto mb-2">
            These guys stopped trying to be perfect, and finally got results by stacking new habits.
          </p>
        </div>
      </section>

      {/* Infinite Proof Carousel */}
      <section className="overflow-hidden mt-10 md:mt-16 py-2 md:py-4">
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

      {/* Immediate CTA Section - smooth scroll to checkout */}
      <section className="py-4 md:py-6 px-4">
        <div className="max-w-xl mx-auto text-center space-y-3">
          <button 
            onClick={() => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full btn-shadow transition-all duration-300 hover:scale-105 w-full md:w-auto"
          >
            Join The Habit Stack Today <ArrowRight className="h-5 w-5" />
          </button>
          
          <p className="pt-2 text-[10px] font-semibold text-slate-500 text-center">
            🔒 SECURE CHECKOUT VIA FASTPAY
          </p>
        </div>
      </section>

      {/* The Reality Check Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center space-y-6 md:space-y-8">
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              You aren't lazy.<br />
              You're <span className="text-[#ffde59]">OVERLOADED</span>.
            </h2>
            <div className="space-y-5 text-foreground/70 text-base md:text-lg text-left leading-relaxed">
              <p>
                You already know you should eat better and move more. The problem isn't a lack of knowledge - it's a lack of a reliable system &amp; accountability.
              </p>
              <p>
                Stress at work, poor sleep, family commitments, and a back-to-back calendar have turned your health into a "someday" project.
              </p>
              <p>
                You aren't struggling because you lack willpower. You're struggling because you've never had a system designed to work when life gets pressured.
              </p>
              <p>
                That's exactly what the Habit Stack gives you.
              </p>
              <p>
                You get me in your pocket every day for 6 weeks to navigate the family dinners, late work nights, and the unexpected social plans - ensuring you rebuild your body, mind, and confidence no matter what life throws at you.
              </p>
            </div>
            <p className="text-white font-bold text-base md:text-lg text-right">
              - Zach Thomas
            </p>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-6 md:py-8 px-4">
        <div className="text-center">
          <button
            onClick={() => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary bg-transparent hover:bg-primary/10 font-bold text-sm md:text-base px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            YES, I'M OVERLOADED - START MY STACK →
          </button>
        </div>
      </section>

      {/* 6-Week Blueprint Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold italic uppercase text-center text-white mb-10 md:mb-12">
            THE 6-WEEK PILLARS
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
            {/* Double Phone Mockup */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative w-80 h-[480px]">
                {/* Yellow glow behind phones */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-72 bg-[#ffde59]/20 rounded-full blur-3xl"></div>
                </div>
                
                {/* Background Phone - left side, tilted */}
                <div className="absolute left-[-8px] top-4 w-52 h-[440px] bg-black rounded-[2.5rem] border-[3px] border-foreground/30 p-1.5 shadow-2xl -rotate-[10deg] origin-center">
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full z-10"></div>
                  <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden">
                    <img 
                      src={appScreenshot2} 
                      alt="Habit Stack App Workout View" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Foreground Phone - right side */}
                <div className="absolute right-[-8px] top-4 w-52 h-[440px] bg-black rounded-[2.5rem] border-[3px] border-foreground/30 p-1.5 shadow-2xl z-10">
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full z-10"></div>
                  <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden">
                    <img 
                      src={appScreenshot} 
                      alt="Habit Stack App" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
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
                      <h3 className="text-white font-bold text-lg uppercase">{feature.title}</h3>
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
          {/* 5LB Guarantee Card */}
          <div className="glass-card p-8 md:p-12 text-center space-y-6 border-2 border-[#ffde59] rounded-3xl mb-8">
            <h3 className="text-white font-bold text-2xl md:text-3xl">
              The 5LB Guarantee
            </h3>
            <p className="text-foreground/70">
              If you don't lose at least 5lbs in the 6 weeks using this system, I will continue to work with you FREE OF CHARGE until you do.
            </p>
          </div>

          {/* Price */}
          <div className="text-center space-y-2 mb-8">
            <p className="text-foreground/50 text-lg">
              Retail Price: <span className="line-through">£199</span>
            </p>
            <p className="text-[#ffde59] font-black text-5xl md:text-7xl">
              £149
            </p>
          </div>
          
          {/* Embedded Checkout */}
          <div id="checkout" className="glass-card p-4 md:p-8 scroll-mt-8">
            <div className="relative w-full" style={{ minHeight: '650px' }}>
              {iframeLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  <p className="text-[11px] font-semibold text-foreground/40 uppercase tracking-wider">
                    🔒 Loading Secure Checkout…
                  </p>
                </div>
              )}
              <iframe
                src={PAYMENT_URL}
                title="Secure Checkout"
                className="w-full rounded-xl"
                style={{ height: '650px', border: 'none' }}
                onLoad={() => setIframeLoading(false)}
              />
            </div>
            <p className="pt-3 text-[10px] font-semibold text-slate-500 text-center">
              🔒 SECURE CHECKOUT VIA FASTPAY
            </p>
          </div>
          
          <p className="text-foreground/40 text-sm text-center pt-4">
            © 2026 Zach Thomas Coaching
          </p>
        </div>
      </section>
    </main>
  );
};

export default SixWeeks;
