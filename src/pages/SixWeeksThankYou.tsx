const SixWeeksThankYou = () => {
  return (
    <div className="min-h-screen px-4 py-12 md:py-20 font-sans text-center flex items-center justify-center">
      <div className="max-w-3xl mx-auto space-y-8 md:space-y-10">

        {/* Main Confirmation */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#C4622D] uppercase tracking-tight leading-tight">
            You're on the Fast-Track!
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            I'll be reaching out to you on WhatsApp within the next 2 hours to discuss next steps.
          </p>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            Check your email inbox as I'll be sending you regular information about your plans and next steps.
          </p>
        </section>

        {/* What Happens Next Card */}
        <section>
          <div
            className="relative rounded-3xl p-6 md:p-10 text-center space-y-5"
            style={{
              background: 'rgba(196, 98, 45, 0.06)',
              border: '2px solid #C4622D',
              backdropFilter: 'blur(12px)',
            }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
              What Happens Next?
            </h2>
            <div className="space-y-4 text-left max-w-md mx-auto">
              <div className="flex items-start gap-3">
                <span className="text-[#C4622D] font-bold text-base">01.</span>
                <span className="text-base md:text-lg text-foreground/80">
                  I'll message you on WhatsApp to open up that line of communication, that way you can ask any questions you have immediately.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#C4622D] font-bold text-base">02.</span>
                <span className="text-base md:text-lg text-foreground/80">
                  Check your email, download the coaching app, and I'll get to work on your plans.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#C4622D] font-bold text-base">03.</span>
                <span className="text-base md:text-lg text-foreground/80">
                  Get ready to start your transformation
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-6 space-y-4">
          <a
            href="/sixweeks"
            className="text-[#C4622D] hover:text-[#C4622D]/80 font-semibold text-sm md:text-base transition underline underline-offset-4"
          >
            ← Back to 6 Week Habit Stack
          </a>
          <p className="text-foreground/40 text-sm">
            © 2026 Zach Thomas Coaching
          </p>
        </footer>
      </div>
    </div>
  );
};

export default SixWeeksThankYou;
