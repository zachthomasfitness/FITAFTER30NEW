import PulseFormEmbed from "./PulseFormEmbed";

const FooterCTA = () => {
  return (
    <footer id="footer-signup-form" className="py-16 md:py-24 px-6 border-t border-border text-center">
      <div className="max-w-xl mx-auto">
        {/* Section Header - tighter spacing to form */}
        <h2 className="text-xl md:text-3xl font-extrabold text-foreground mb-4">
          Here's what you'll get in the free 10-day Habit Kickstart:
        </h2>

        {/* Benefits List */}
        <ul className="text-left space-y-3 mb-6 text-foreground/90">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">✓</span>
            <span><strong>Daily video lessons</strong> - one simple habit to focus on each day (5-10 minutes max)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">✓</span>
            <span><strong>Simple daily tasks</strong> - no complicated meal plans or gruelling workouts, just small actions that build momentum</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">✓</span>
            <span><strong>WhatsApp group access</strong> - accountability and support from others doing the same thing</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">✓</span>
            <span><strong>Habit Layering framework</strong> - the exact system I use with my 1-1 clients to build habits that actually stick</span>
          </li>
        </ul>

        <p className="text-muted-foreground text-base mb-6">
          No credit card required. No catch. Just 10 days of real habits that actually work.
        </p>

        {/* Embedded Form - naked, no container */}
        <div className="w-full mb-6">
          <PulseFormEmbed id="footer-inline-7DTFHh8ZmEmWrmVpsktd" />
        </div>
        
        <p className="text-primary font-bold text-lg">
          Join the Free 10-Day Kickstart
        </p>
      </div>
    </footer>
  );
};

export default FooterCTA;