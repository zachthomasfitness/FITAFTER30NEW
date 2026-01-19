import HeroSection from "@/components/HeroSection";
import ProofSection from "@/components/ProofSection";
import MissionFilterSection from "@/components/MissionFilterSection";
import FeaturesSection from "@/components/FeaturesSection";
import FooterCTA from "@/components/FooterCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MissionFilterSection />
      <ProofSection />
      <FeaturesSection />
      <FooterCTA />
    </main>
  );
};

export default Index;
