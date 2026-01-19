import CountdownTimer from "./CountdownTimer";
import PulseFormEmbed from "./PulseFormEmbed";

const FooterCTA = () => {
  return (
    <footer id="footer-signup-form" className="py-16 md:py-24 px-6 border-t border-border text-center">
      <div className="max-w-xl mx-auto">
        {/* Section Header - matches other section headers */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
          Ready to start Day 1?
        </h2>

        {/* ACTION CLUSTER: Start Date + Timer + Form grouped tightly */}
        <div className="flex flex-col items-center gap-2 mb-8">
          {/* Start Date - compact */}
          <p className="text-primary font-bold text-[10px] md:text-xs uppercase tracking-wider">
            Start Date: January 26th
          </p>
          
          {/* Countdown Timer - compact version */}
          <CountdownTimer compact />
          
          {/* Embedded Form - using isolated component */}
          <div className="w-full mt-2">
            <PulseFormEmbed id="footer-inline-7DTFHh8ZmEmWrmVpsktd" />
          </div>
        </div>
        
        <p className="text-muted-foreground text-base italic">
          Limited spots for the Jan 26th Intake
        </p>
      </div>
    </footer>
  );
};

export default FooterCTA;
