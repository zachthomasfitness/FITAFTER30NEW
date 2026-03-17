import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import ProofSection from "@/components/ProofSection";
import FooterCTA from "@/components/FooterCTA";
import MidPageCTA from "@/components/MidPageCTA";
import MissionFilterSection from "@/components/MissionFilterSection";

const HabitKickstart = () => {
  return (
    <>
      <Helmet>
        <title>10-Day Habit Kickstart</title>
        <meta name="description" content="Join the free 10-day Habit Kickstart and learn the system that's helped hundreds of over-30s lose fat, get their energy back, and feel confident again." />
        <meta property="og:title" content="10-Day Habit Kickstart" />
        <meta property="og:description" content="Join the free 10-day Habit Kickstart and learn the system that's helped hundreds of over-30s lose fat, get their energy back, and feel confident again." />
        <meta property="og:image" content="https://habit-kickstart.lovable.app/og-habitkickstart.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="10-Day Habit Kickstart" />
        <meta name="twitter:description" content="Join the free 10-day Habit Kickstart and learn the system that's helped hundreds of over-30s lose fat, get their energy back, and feel confident again." />
        <meta name="twitter:image" content="https://habit-kickstart.lovable.app/og-habitkickstart.png" />
      </Helmet>
      <main className="min-h-screen">
        <HeroSection />
        <ProofSection />
        <MissionFilterSection />
        <FooterCTA />
      </main>
    </>
  );
};

export default HabitKickstart;