import PulseFormEmbed from "./PulseFormEmbed";

const MidPageCTA = () => {
  return (
    <section className="py-16 md:py-24 px-6 border-t border-border text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-xl md:text-3xl font-extrabold text-foreground mb-4">
          Ready to get started?
        </h2>
        <p className="text-foreground/90 mb-6">
          Join the free 10-Day Habit Kickstart now.
        </p>

        <div className="w-full mb-6">
          <PulseFormEmbed id="mid-page-cta-7DTFHh8ZmEmWrmVpsktd" />
        </div>

        <p className="text-primary font-bold text-lg">
          Join the Free 10-Day Kickstart
        </p>
      </div>
    </section>
  );
};

export default MidPageCTA;
