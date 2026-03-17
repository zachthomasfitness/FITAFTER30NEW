const FinalCTA = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 md:py-24 px-6 border-t border-border text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-xl md:text-3xl font-extrabold text-foreground mb-4">
          Ready to stop falling off every plan you start?
        </h2>
        <p className="text-foreground/90 mb-6">
          Join the free 10-Day Habit Kickstart and learn the system that's helped hundreds of people get stupidly consistent.
        </p>
        <button
          onClick={scrollToTop}
          className="bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-lg hover:opacity-90 transition-opacity mb-4"
        >
          JOIN THE FREE KICKSTART
        </button>
        <p className="text-muted-foreground text-sm">
          It's completely free. No credit card required.
        </p>
      </div>
    </footer>
  );
};

export default FinalCTA;
