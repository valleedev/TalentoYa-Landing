import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero-section"
import { DashboardShowcase } from "@/components/sections/dashboard-showcase"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { SiteFooter } from "@/components/sections/site-footer"

export default function TalentoYaLanding() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <DashboardShowcase />
      <BenefitsSection />
      <FeaturesSection />
      <PricingSection />
      <SiteFooter />
    </div>
  )
}
