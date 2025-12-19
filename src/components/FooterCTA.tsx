const FooterCTA = () => {
  return (
    <footer id="join" className="py-24 px-6 border-t border-border text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-foreground mb-8">
          Ready to start Day 1?
        </h2>
        <button className="brand-bg text-primary-foreground text-xl font-black py-6 px-14 rounded-2xl shadow-2xl hover:scale-105 transition btn-shadow uppercase">
          Join the FREE 14 Day Kickstart
        </button>
        <p className="mt-8 text-muted-foreground text-sm italic">
          Limited spots for the next live round.
        </p>
      </div>
    </footer>
  );
};

export default FooterCTA;
