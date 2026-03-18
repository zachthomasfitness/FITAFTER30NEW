const MidPageCTA = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 px-6 border-t border-border text-center bg-secondary glow-cta overflow-hidden pb-[15px] pt-[15px] pl-[35px] pr-[35px]">
      <div className="max-w-xl mx-auto relative z-10">
        <h2 className="text-xl md:text-3xl font-extrabold text-foreground mb-4">
          Ready to get started?
        </h2>
        <p className="text-secondary-foreground mb-6">
          Join the free 10-Day Habit Kickstart now.
        </p>
        <button
          onClick={scrollToTop}
          className="bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-lg hover:brightness-95 transition-all hover:shadow-[0_0_20px_hsl(49_100%_67%/0.3)]">
          
          JOIN THE FREE KICKSTART
        </button>
      </div>
    </section>);

};

export default MidPageCTA;
