const MidPageCTA = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 px-6 border-t border-border text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-xl md:text-3xl font-extrabold text-foreground mb-4">
          Ready to get started?
        </h2>
        <p className="text-foreground/90 mb-6">
          Join the free 10-Day Habit Kickstart now.
        </p>
        <button
          onClick={scrollToTop}
          className="bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
        >
          JOIN THE FREE KICKSTART
        </button>
      </div>
    </section>
  );
};

export default MidPageCTA;
