import { Hero } from '../components/sections/Hero'
import { ProblemSection } from '../components/sections/ProblemSection'
import { ServicesSection } from '../components/sections/ServicesSection'
import { IndustriesSection } from '../components/sections/IndustriesSection'
import { IntegrationsSection } from '../components/sections/IntegrationsSection'
import { ProcessSection } from '../components/sections/ProcessSection'
import { SelectedWorkSection } from '../components/sections/SelectedWorkSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { StatsSection } from '../components/sections/StatsSection'
import { PricingSection } from '../components/sections/PricingSection'
import { FAQSection } from '../components/sections/FAQSection'
import { FinalCTA } from '../components/sections/FinalCTA'
import { homeFaqs } from '../lib/content/services'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ServicesSection />
      <IndustriesSection />
      <IntegrationsSection />
      <ProcessSection />
      <SelectedWorkSection />
      <TestimonialsSection />
      <StatsSection />
      <PricingSection />
      <FAQSection items={homeFaqs} />
      <FinalCTA />
    </>
  )
}
