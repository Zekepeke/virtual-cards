import { 
  FloatingHearts, 
  HeartDivider,
} from '../../micro-illustrations';

import { NavBar } from "./sections/NavBar";
import { Hero } from "./sections/Hero";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { TemplatesSection } from "./sections/TemplatesSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { PricingSection } from "./sections/PricingSection";
import { CtaSection } from "./sections/CtaSection";
import { FooterSection } from "./sections/FooterSection";

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