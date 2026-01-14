import HeroSection from "@/components/HeroSection";
import ProofSection from "@/components/ProofSection";
import MissionFilterSection from "@/components/MissionFilterSection";
import IntermediateCTA from "@/components/IntermediateCTA";
import FeaturesSection from "@/components/FeaturesSection";
import FooterCTA from "@/components/FooterCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProofSection />
      <MissionFilterSection />
      <IntermediateCTA />
      <FeaturesSection />
      <FooterCTA />
    </main>
  );
};

export default Index;
