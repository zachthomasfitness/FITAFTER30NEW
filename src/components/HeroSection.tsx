const HeroSection = () => {
  return <header className="relative pt-20 pb-16 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Badge */}
        <span className="inline-block py-1 px-4 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">
          Now open: The 14 day habit kickstart
        </span>

        {/* Exact 3-Line Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-foreground leading-[1.1] mb-6">How to sustainably lose
5-10lbs in 6 weeks
as a busy guy in your 30's<br />
          <span className="brand-text">5-10lbs in 6 weeks</span><br />
          as a guy in your 30's
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-10">
          (Whilst navigating work, family & friends)
        </p>

        {/* VSL Player Section */}
        <div className="relative max-w-3xl mx-auto mb-12 group">
          <div className="absolute -inset-1 brand-bg rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          <div className="relative aspect-video bg-secondary rounded-2xl overflow-hidden border border-border vsl-glow">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0" title="VSL Video" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>

        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-10 max-w-2xl mx-auto">
          14 days of the exact tactical habits my clients in their 30s and 40s use to make sustainable transformations —{" "}
          <span className="text-foreground font-bold">
            without sacrificing their favourite food or their social lives.
          </span>
        </p>

        <div className="flex flex-col items-center gap-6 mb-20">
          <a href="#join" className="brand-bg hover:scale-105 text-primary-foreground text-center text-xl md:text-2xl font-black py-6 px-12 rounded-xl transform transition btn-shadow uppercase">
            Join the FREE 14 Day Kickstart →
          </a>
          <div className="flex items-center justify-center gap-3 text-muted-foreground font-medium text-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            This is a live challenge and I'll be personally coaching you through it
          </div>
        </div>
      </div>
    </header>;
};
export default HeroSection;