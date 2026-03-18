const fitList = [
"You've tried plans before and fallen off by the end of the week",
"You're tired of the all-or-nothing cycle (one bad meal ruins everything)",
"You have a job, kids, a life — and you're not giving that up to get in shape",
"You want a realistic plan that actually fits your life"];


const rejectList = [
"You're looking for a quick fix or magic pill",
"You want to \"get shredded in 6 weeks\"",
"You're not willing to show up consistently (even on bad days)"];


const MissionFilterSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 text-center bg-background pt-[25px] pb-[25px] pr-0 pl-0">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <h2 className="text-xl md:text-4xl font-extrabold text-[hsl(215,30%,15%)] mb-10 md:mb-14">
          Who is this for?
        </h2>

        {/* Mobile: Horizontal snap slider | Desktop: 2-column grid */}
        <div className="flex md:grid md:grid-cols-2 gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar md:overflow-visible px-[7.5%] md:px-0">
          {/* The Fit Card */}
          <div className="glassmorphism-card p-6 md:p-8 text-center flex-shrink-0 w-[85%] md:w-full snap-center">
            <div className="text-4xl md:text-5xl text-primary mb-4">✅</div>
            <h3 className="text-lg md:text-xl font-bold text-[hsl(215,30%,15%)] mb-4 md:mb-6">
              This is for you if:
            </h3>
            <ul className="space-y-3 md:space-y-4 text-left">
              {fitList.map((item, index) =>
              <li key={index} className="text-sm md:text-base text-foreground/90">
                  • {item}
                </li>
              )}
            </ul>
          </div>

          {/* The Rejection Card */}
          <div className="glassmorphism-card p-6 md:p-8 text-center flex-shrink-0 w-[85%] md:w-full snap-center">
            <div className="text-4xl md:text-5xl text-destructive mb-4">❌</div>
            <h3 className="text-lg md:text-xl font-bold text-[hsl(215,30%,15%)] mb-4 md:mb-6">
              This is NOT for you if:
            </h3>
            <ul className="space-y-3 md:space-y-4 text-left">
              {rejectList.map((item, index) =>
              <li key={index} className="text-sm md:text-base text-foreground/90">
                  • {item}
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Swipe hint - mobile only */}
        <p className="md:hidden text-muted-foreground text-sm mt-4">
          Swipe to see both →
        </p>
      </div>
    </section>);

};

export default MissionFilterSection;