import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { DemoSection } from "@/components/sections/demo-section"
import { SiteFooter } from "@/components/sections/site-footer"

export default function TalentoYaLanding() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <DemoSection />
      <SiteFooter />
    </div>
  )
}
