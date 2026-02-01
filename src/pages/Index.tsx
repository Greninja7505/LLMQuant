import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { FeaturedModelsSection } from "@/components/landing/FeaturedModelsSection";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { CTASection } from "@/components/landing/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <FeaturedModelsSection />
        <UseCasesSection />
        <ComparisonSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
