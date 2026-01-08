import { 
  FloatingHearts, 
  HeartDivider,
} from '../../micro-illustrations';

import { NavBar } from "./landingpage-sections/NavBar";
import { Hero } from "./landingpage-sections/Hero";
import { HowItWorksSection } from "./landingpage-sections/HowItWorksSection";
import { TemplatesSection } from "./landingpage-sections/TemplatesSection";
import { FeaturesSection } from "./landingpage-sections/FeaturesSection";
import { TestimonialsSection } from "./landingpage-sections/TestimonialsSection";
import { PricingSection } from "./landingpage-sections/PricingSection";
import { CtaSection } from "./landingpage-sections/CtaSection";
import { FooterSection } from "./landingpage-sections/FooterSection";

export function LandingPage() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <FloatingHearts />

      <NavBar />
      <Hero />

      <HeartDivider />
      <HowItWorksSection />

      <HeartDivider />
      <TemplatesSection />

      <HeartDivider />
      <FeaturesSection />

      <HeartDivider />
      <TestimonialsSection />

      <HeartDivider />
      <PricingSection />

      <CtaSection />
      <FooterSection />
    </div>
  );
}