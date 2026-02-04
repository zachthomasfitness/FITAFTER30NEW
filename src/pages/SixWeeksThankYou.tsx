const SixWeeksThankYou = () => {
  return (
    <div 
      className="min-h-screen px-4 py-12 md:py-20 font-sans text-center flex items-center justify-center"
      style={{
        backgroundColor: '#000000',
        backgroundImage: 'radial-gradient(ellipse at 50% 0%, #1a1a1a 0%, #000000 75%)',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-3xl mx-auto space-y-8 md:space-y-10">
        
        {/* Main Confirmation */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#ffde59] uppercase tracking-tight leading-tight">
            You're on the Fast-Track!
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            I'll be reaching out to you on WhatsApp within the next 2 hours to book your 1-1 onboarding call.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Check your inbox for your 6-week Welcome Pack.
          </p>
        </section>

        {/* WhatsApp Expectation Card */}
        <section className="relative">
          <div className="absolute -inset-1 bg-[#ffde59] rounded-3xl opacity-20 blur-md"></div>
          <div 
            className="relative rounded-3xl p-6 md:p-10 text-center space-y-5"
            style={{
              background: 'rgba(255, 222, 89, 0.05)',
              border: '2px solid #ffde59',
              backdropFilter: 'blur(12px)',
            }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
              What Happens Next?
            </h2>
            <div className="space-y-4 text-left max-w-md mx-auto">
              <div className="flex items-start gap-3">
                <span className="text-[#ffde59] font-bold text-base">01.</span>
                <span className="text-base md:text-lg text-foreground/80">
                  I'll message you on WhatsApp to schedule your onboarding call
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#ffde59] font-bold text-base">02.</span>
                <span className="text-base md:text-lg text-foreground/80">
                  Check your email for the 6-Week Welcome Pack & app access
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#ffde59] font-bold text-base">03.</span>
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
            className="text-[#ffde59] hover:text-[#ffde59]/80 font-semibold text-sm md:text-base transition underline underline-offset-4"
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
