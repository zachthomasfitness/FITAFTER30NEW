import { useEffect } from "react";
import { Check } from "lucide-react";

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const checklistItems = [
    "Search your inbox for 'The Habit Kickstart'.",
    "Move the email to your 'Primary' folder.",
    "Reply 'READY' to the email so my system knows you are active.",
  ];

  return (
    <div className="min-h-screen bg-background px-4 py-12 md:py-20">
      <div className="max-w-3xl mx-auto space-y-8 md:space-y-12">
        
        {/* Section 1: The Confirmation */}
        <section className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-primary uppercase tracking-tight">
            You're In!
          </h1>
          <p className="text-lg md:text-2xl text-foreground font-medium">
            The 14-Day Tactical Kickstart officially begins now.
          </p>
        </section>

        {/* Section 2: Step 1 - WhatsApp Group (Primary Card) */}
        <section className="relative">
          <div className="absolute -inset-0.5 bg-primary rounded-2xl opacity-60 blur-sm"></div>
          <div 
            className="relative rounded-2xl p-6 md:p-10 text-center space-y-5"
            style={{
              background: 'hsl(0 0% 100% / 0.03)',
              border: '2px solid hsl(49 100% 67%)',
            }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/20 text-primary font-bold text-xl md:text-2xl mb-2">
              1
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Join the WhatsApp Group.
            </h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-xl mx-auto">
              This is where the daily challenge content, tactical habits, and live coaching happen. 
              If you aren't in the group, you aren't in the challenge.
            </p>
            <a
              href="#"
              className="inline-block bg-primary hover:scale-105 text-primary-foreground text-base md:text-lg font-black py-4 px-8 md:px-12 rounded-xl transform transition uppercase tracking-wide animate-pulse"
              style={{
                boxShadow: '0 0 30px 5px hsl(49 100% 67% / 0.5), 0 10px 40px -10px hsl(49 100% 67% / 0.6)',
              }}
            >
              Join the Challenge Group →
            </a>
          </div>
        </section>

        {/* Section 3: Step 2 - Whitelisting (Checklist Card) */}
        <section 
          className="rounded-2xl p-6 md:p-10 text-center space-y-6"
          style={{
            background: 'hsl(0 0% 100% / 0.03)',
            border: '1px solid hsl(0 0% 100% / 0.08)',
          }}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/20 text-primary font-bold text-xl md:text-2xl mb-2">
            2
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Secure Your Content.
          </h2>
          <ul className="space-y-4 max-w-md mx-auto text-left">
            {checklistItems.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-primary/50 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-base md:text-lg text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 4: Step 3 - 1-1 Coaching (Premium Offer) */}
        <section 
          className="rounded-2xl p-6 md:p-10 text-center space-y-6 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, hsl(0 0% 100% / 0.05) 0%, hsl(0 0% 100% / 0.02) 100%)',
            border: '1px solid hsl(0 0% 100% / 0.12)',
          }}
        >
          {/* Subtle premium glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-primary/10 blur-3xl rounded-full"></div>
          
          <div className="relative space-y-5">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/20 text-primary font-bold text-xl md:text-2xl">
              3
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              The Fast-Track: Elite 1-on-1 Coaching
            </h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-xl mx-auto">
              If you are ready to stop guessing and start executing today, you can work with me 1-on-1. 
              I will build you a custom tactical roadmap designed for your schedule, providing the daily 
              accountability required to ensure your 5-10lb drop is permanent.
            </p>
            <a
              href="#"
              className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base md:text-lg font-black py-4 px-8 md:px-12 rounded-xl transform transition hover:scale-105 uppercase tracking-wide"
            >
              Apply for 1-1 Coaching →
            </a>
          </div>
        </section>

        {/* Back link */}
        <div className="text-center pt-4">
          <a
            href="/"
            className="text-primary hover:text-primary/80 font-semibold text-sm md:text-base transition underline underline-offset-4"
          >
            ← Back to homepage
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
