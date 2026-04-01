const FinalCTA = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 md:py-24 px-6 border-t border-border/20 text-center bg-transparent overflow-hidden pt-[25px] pb-[25px] pl-[25px] pr-[25px]">
      <div className="max-w-xl mx-auto relative z-10">
        <h2 className="md:text-3xl font-extrabold text-foreground mb-4 text-lg">
          You made it all the way down here??       
        </h2>
        <p className="text-secondary-foreground mb-6">
          This kickstart is probably for you then!
   
  

 
      
        </p>
        <button onClick={scrollToTop} className="bg-primary text-primary-foreground font-bold text-sm px-6 py-3 rounded-lg hover:brightness-95 transition-all shadow-lg hover:shadow-xl mb-4">
          
          JOIN THE FREE KICKSTART
        </button>
        <p className="text-muted-foreground text-sm">
          It's completely free. No credit card required.
        </p>
      </div>
    </footer>);};
export default FinalCTA;