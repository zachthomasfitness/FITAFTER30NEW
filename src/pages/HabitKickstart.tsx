import HeroSection from "@/components/HeroSection";
import ProofSection from "@/components/ProofSection";
import MissionFilterSection from "@/components/MissionFilterSection";
import FooterCTA from "@/components/FooterCTA";

const HabitKickstart = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MissionFilterSection />
      <ProofSection />
      <FooterCTA />
    </main>
  );
};

export default HabitKickstart;
