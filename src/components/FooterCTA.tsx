import PulseFormEmbed from "./PulseFormEmbed";

const FooterCTA = () => {
  return (
    <footer id="footer-signup-form" className="py-16 md:py-24 px-6 border-t border-border text-center">
      <div className="max-w-xl mx-auto">
        {/* Section Header - tighter spacing to form */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
          Ready to start Day 1?
        </h2>

        {/* Embedded Form - naked, no container */}
        <div className="w-full mb-6">
          <PulseFormEmbed id="footer-inline-7DTFHh8ZmEmWrmVpsktd" />
        </div>
        
        <p className="text-muted-foreground text-base italic">
          Limited spots for the Jan 26th Intake
        </p>
      </div>
    </footer>
  );
};

export default FooterCTA;
