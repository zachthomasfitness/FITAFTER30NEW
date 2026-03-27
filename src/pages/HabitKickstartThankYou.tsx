import { useEffect } from "react";

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

const HabitKickstartThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Track conversion events for Meta Pixel
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead');
      window.fbq('track', 'CompleteRegistration');
    }
  }, []);

  const checklistItems = [
    { num: "01.", text: "Search your inbox for \"The Habit Kickstart\"" },
    { num: "02.", text: "Move the email to your 'Primary' folder" },
    { num: "03.", text: "Reply 'READY' to the email so I know you are active" },
  ];

  return (
    <div 
      className="min-h-screen px-4 py-12 md:py-20 font-sans text-center"
      style={{
        backgroundColor: '#000000',
        backgroundImage: 'radial-gradient(ellipse at 50% 0%, #1a1a1a 0%, #000000 75%)',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-3xl mx-auto space-y-8 md:space-y-10">
        
        {/* Section 1: The Confirmation */}
        <section className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#C4622D] uppercase tracking-tight">
            You're In!
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-lg mx-auto">
            The 14 Day Habit Kickstart officially begins January 26th.<br />
            In the meantime, follow these steps ↓
          </p>
        </section>

        {/* Step 1 - WhatsApp Group (Primary Card - Yellow Outline) */}
        <section className="relative">
          {/* Subtle glow effect */}
          <div className="absolute -inset-1 bg-[#C4622D] rounded-3xl opacity-20 blur-md"></div>
          <div 
            className="relative rounded-3xl p-6 md:p-10 text-center space-y-5"
            style={{
              background: 'rgba(196, 98, 45, 0.05)',
              border: '2px solid #C4622D',
              backdropFilter: 'blur(12px)',
            }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
              Step 1: Join the WhatsApp Group
            </h2>
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-xl mx-auto">
              This is where the daily challenge content, tactical habits, and live coaching happen. 
              If you aren't in the group, you aren't in the challenge.
            </p>
            <a
              href="https://chat.whatsapp.com/DU7kpcndcae0P91DjesQS3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C4622D] hover:scale-105 text-[#0a0a0a] text-base md:text-lg font-bold py-4 px-8 md:px-12 rounded-xl transform transition tracking-wide"
              style={{
                boxShadow: '0 0 30px 5px rgba(196, 98, 45, 0.5), 0 10px 40px -10px rgba(196, 98, 45, 0.6)',
              }}
            >
              Join the Challenge Group
            </a>
          </div>
        </section>

        {/* Step 2 - Whitelisting (Steel Grey Glassmorphism Card) */}
        <section 
          className="rounded-3xl p-6 md:p-10 text-center space-y-6"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-foreground">
            Step 2: Secure Your Content
          </h2>
          <ul className="space-y-3 max-w-md mx-auto">
            {checklistItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[#C4622D] font-bold text-base">{item.num}</span>
                <span className="text-base md:text-lg text-foreground/80 text-left">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Elite Fast-Track Card (Steel Grey Glassmorphism) */}
        <section 
          className="rounded-3xl p-6 md:p-10 text-center space-y-5"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-foreground">
            Looking for the Elite Fast-Track?
          </h2>
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-xl mx-auto">
            If you're ready to take action today, you can work 1-on-1 with me as a client in my 
            online coaching programme to get a custom roadmap and daily accountability that 
            guarantees your results.
          </p>
          <a
            href="https://wa.me/message/4G7GYPALNFDGD1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-[#C4622D] text-[#C4622D] hover:bg-[#C4622D] hover:text-[#0a0a0a] text-base md:text-lg font-semibold py-3 px-8 rounded-xl transform transition hover:scale-105"
          >
            Apply for 1-1 Coaching
          </a>
        </section>

        {/* Footer */}
        <footer className="text-center pt-6 space-y-4">
          <a
            href="/habitkickstart"
            className="text-[#C4622D] hover:text-[#C4622D]/80 font-semibold text-sm md:text-base transition underline underline-offset-4"
          >
            ← Back to Habit Kickstart
          </a>
          <p className="text-foreground/40 text-sm">
            © 2026 Zach Thomas Coaching
          </p>
        </footer>
      </div>
    </div>
  );
};

export default HabitKickstartThankYou;
