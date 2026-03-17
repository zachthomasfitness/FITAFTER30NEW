import PulseFormEmbed from "./PulseFormEmbed";

const FooterCTA = () => {
  return (
    <footer id="footer-signup-form" className="py-16 md:py-24 px-6 border-t border-border text-center">
      <div className="max-w-xl mx-auto">
        {/* Section Header - tighter spacing to form */}
        <h2 className="text-xl md:text-3xl font-extrabold text-foreground mb-4">
          Here's What You'll Get in the Free 10-Day Kickstart:
        </h2>

        {/* Benefits List */}
        <ul className="text-left space-y-3 mb-6 text-foreground/90">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">✓</span>
            <span><strong>Daily video lessons</strong> — one simple habit to focus on each day (no overwhelm, no confusion)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">✓</span>
            <span><strong>Simple daily tasks</strong> — small actions that build momentum (you'll know exactly what to do)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">✓</span>
            <span><strong>WhatsApp group access</strong> — accountability and support from people on the same journey</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">✓</span>
            <span><strong>The Habit Layering framework</strong> — the system that's helped hundreds of people lose fat, get their energy back, and stay consistent for life</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">✓</span>
            <span><strong>Plus:</strong> On Day 7, join the live implementation workshop where I'll show you how to turn the habits you've built into real, visible results over the next 6 weeks.</span>
          </li>
        </ul>

        {/* Embedded Form - naked, no container */}
        <div className="w-full mb-6">
          <PulseFormEmbed id="footer-inline-7DTFHh8ZmEmWrmVpsktd" />
        </div>
        
        

        
      </div>
    </footer>);

};

export default FooterCTA;