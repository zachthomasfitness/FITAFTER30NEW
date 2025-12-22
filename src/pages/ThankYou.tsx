import { useEffect } from "react";

const ThankYou = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Success Icon */}
        <div className="mb-6 md:mb-8 flex justify-center">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#22c55e]/20 flex items-center justify-center">
            <svg
              className="w-10 h-10 md:w-12 md:h-12 text-[#22c55e]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#ffde59] mb-4 md:mb-6">
          You're In!
        </h1>

        {/* Body Text */}
        <p className="text-base md:text-xl lg:text-2xl text-foreground/80 leading-relaxed mb-8 md:mb-10 max-w-xl mx-auto">
          I've just sent your{" "}
          <span className="text-foreground font-bold">Day 0 Tactical Audit</span>{" "}
          to your inbox. Check it now to get started.
        </p>

        {/* Subtle CTA */}
        <p className="text-sm md:text-base text-muted-foreground">
          Can't find it? Check your spam folder or promotions tab.
        </p>

        {/* Back link */}
        <a
          href="/"
          className="inline-block mt-8 md:mt-10 text-[#ffde59] hover:text-[#ffde59]/80 font-semibold text-sm md:text-base transition underline underline-offset-4"
        >
          ← Back to homepage
        </a>
      </div>
    </div>
  );
};

export default ThankYou;
