const FinalCTA = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 md:py-24 px-6 border-t border-border text-center bg-[hsl(215,30%,15%)]">
      <div className="max-w-xl mx-auto">
        <h2 className="text-xl md:text-3xl font-extrabold text-white mb-4">
          Ready to stop falling off every plan you start?
        </h2>
        <p className="text-white/80 mb-6">
          Join the free 10-Day Habit Kickstart and learn the system that's helped hundreds of people get stupidly consistent.
        </p>
        <button
          onClick={scrollToTop}
          className="bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-lg hover:bg-[hsl(162,100%,38%)] transition-colors mb-4"
        >
          JOIN THE FREE KICKSTART
        </button>
        <p className="text-white/50 text-sm">
          It's completely free. No credit card required.
        </p>
      </div>
    </footer>
  );
};

export default FinalCTA;
