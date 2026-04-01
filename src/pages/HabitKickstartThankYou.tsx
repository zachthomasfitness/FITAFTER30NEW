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
      window.fbq('track', 'CompleteRegistration');
    }
  }, []);

  const checklistItems = [
    { num: "01.", text: "Search your inbox for \"You're in ✅ Here's what happens next\"." },
    { num: "02.", text: "Can't find it? Check junk and move it to your inbox so you don't miss the daily emails." },
    { num: "03.", text: "Reply 'READY' to the email so I know you are active." },
  ];

  return (
    <div className="min-h-screen px-4 py-12 md:py-20 font-sans text-center">
      <div className="max-w-3xl mx-auto space-y-8 md:space-y-10">

        {/* Section 1: The Confirmation */}
        <section className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#C4622D] uppercase tracking-tight">
            You're In!
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-lg mx-auto">
            The 10 Day Habit Kickstart officially begins April 6th.<br />
            In the meantime, follow these steps ↓
          </p>
        </section>

        {/* Step 1 - WhatsApp Group (Primary Card - Orange Outline) */}
        <section className="relative">
          <div
            className="relative rounded-3xl p-6 md:p-10 text-center space-y-5"
            style={{
              background: 'rgba(196, 98, 45, 0.06)',
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
              href="https://chat.whatsapp.com/BQlTpYVGAib3sU1RxHXyIX?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C4622D] hover:scale-105 text-white text-base md:text-lg font-bold py-4 px-8 md:px-12 rounded-xl transform transition tracking-wide"
              style={{
                boxShadow: '0 0 30px 5px rgba(196, 98, 45, 0.3), 0 10px 40px -10px rgba(196, 98, 45, 0.4)',
              }}
            >
              Join the Kickstart Group
            </a>
          </div>
        </section>

        {/* Step 2 - Whitelisting */}
        <section
          className="rounded-3xl p-6 md:p-10 text-center space-y-6"
          style={{
            background: 'rgba(255, 255, 255, 0.75)',
            border: '1px solid rgba(0, 0, 0, 0.08)',
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

        {/* Elite Fast-Track Card */}
        <section
          className="rounded-3xl p-6 md:p-10 text-center space-y-5"
          style={{
            background: 'rgba(255, 255, 255, 0.75)',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-foreground">
            Looking for 1-on-1 Support?
          </h2>
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-xl mx-auto">
            If you're ready, you can work with me in my private online coaching programme. For more details click below ↓
          </p>
          <a
            href="https://wa.me/message/4G7GYPALNFDGD1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-[#C4622D] text-[#C4622D] hover:bg-[#C4622D] hover:text-white text-base md:text-lg font-semibold py-3 px-8 rounded-xl transform transition hover:scale-105"
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
