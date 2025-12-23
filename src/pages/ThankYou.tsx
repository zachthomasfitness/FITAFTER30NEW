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
    <div 
      className="min-h-screen px-4 py-12 md:py-20 font-sans"
      style={{
        background: 'radial-gradient(ellipse at center, hsl(225 50% 12%) 0%, hsl(0 0% 4%) 70%)',
      }}
    >
      <div className="max-w-3xl mx-auto space-y-8 md:space-y-10">
        
        {/* Section 1: The Confirmation */}
        <section className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-primary uppercase tracking-tight">
            You're In!
          </h1>
          <p className="text-lg md:text-2xl text-foreground font-medium">
            The 14-Day Tactical Kickstart officially begins now.
          </p>
        </section>

        {/* Step 1 - WhatsApp Group (Primary Card - Outline style) */}
        <section className="relative">
          {/* Subtle glow effect */}
          <div className="absolute -inset-1 bg-[#ffde59] rounded-2xl opacity-20 blur-md"></div>
          <div 
            className="relative rounded-2xl p-6 md:p-10 text-center space-y-5"
            style={{
              background: 'rgba(255, 222, 89, 0.05)',
              border: '2px solid #ffde59',
            }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#ffde59]/20 text-[#ffde59] font-bold text-xl md:text-2xl mb-2">
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
              className="inline-block bg-[#ffde59] hover:scale-105 text-[#0a0a0a] text-base md:text-lg font-black py-4 px-8 md:px-12 rounded-xl transform transition uppercase tracking-wide animate-pulse"
              style={{
                boxShadow: '0 0 30px 5px rgba(255, 222, 89, 0.5), 0 10px 40px -10px rgba(255, 222, 89, 0.6)',
              }}
            >
              Join the Challenge Group →
            </a>
          </div>
        </section>

        {/* Step 2 - Whitelisting (Glassmorphism Card) */}
        <section 
          className="rounded-2xl p-6 md:p-10 text-center space-y-6"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#ffde59]/20 text-[#ffde59] font-bold text-xl md:text-2xl mb-2">
            2
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Secure Your Content.
          </h2>
          <ul className="space-y-4 max-w-md mx-auto">
            {checklistItems.map((item, index) => (
              <li key={index} className="flex items-center justify-center gap-4 text-center">
                <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#ffde59]/50 flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#ffde59]" />
                </div>
                <span className="text-base md:text-lg text-foreground/90 text-left">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Elite Fast-Track Card (Subtle Coaching Offer - No step number) */}
        <section 
          className="rounded-2xl p-6 md:p-10 text-center space-y-5"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Looking for the Elite Fast-Track?
          </h2>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-xl mx-auto">
            If you're ready to take action today, you can work 1-on-1 with me as a client in my 
            online coaching programme to get a custom roadmap and daily accountability that 
            guarantees your results.
          </p>
          <a
            href="#"
            className="inline-block border-2 border-[#ffde59] text-[#ffde59] hover:bg-[#ffde59] hover:text-[#0a0a0a] text-base md:text-lg font-black py-4 px-8 md:px-12 rounded-xl transform transition hover:scale-105 uppercase tracking-wide"
          >
            Apply for 1-1 Coaching →
          </a>
        </section>

        {/* Back link */}
        <div className="text-center pt-4">
          <a
            href="/"
            className="text-[#ffde59] hover:text-[#ffde59]/80 font-semibold text-sm md:text-base transition underline underline-offset-4"
          >
            ← Back to homepage
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
