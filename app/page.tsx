import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { SocialProofSection } from "@/components/sections/social-proof-section"
import { LeadMagnetSection } from "@/components/sections/lead-magnet-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { CtaSection } from "@/components/sections/cta-section"
import { SiteFooter } from "@/components/sections/site-footer"

export default function TalentoYaLanding() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <SocialProofSection />
      <LeadMagnetSection />
      <PricingSection />
      <CtaSection />
      <SiteFooter />
    </div>
  )
}
