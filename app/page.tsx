import { Navbar } from "@/components/spa/navbar"
import { ScrollProgress } from "@/components/spa/scroll-progress"
import { HeroSection } from "@/components/spa/hero-section"
import { WhySection } from "@/components/spa/why-section"
import { HowItWorks } from "@/components/spa/how-it-works"
import { ServicesOverview } from "@/components/spa/services-overview"
import { BeforeAfter } from "@/components/spa/before-after"
import { Testimonials } from "@/components/spa/testimonials"
import { MeetJessy } from "@/components/spa/meet-jessy"
import { PricingSection } from "@/components/spa/pricing-section"
import { FinalCTA } from "@/components/spa/final-cta"
import { Footer } from "@/components/spa/footer"
import { StickyBooking } from "@/components/spa/sticky-booking"

export default function HomePage() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <WhySection />
      <HowItWorks />
      <ServicesOverview />
      <BeforeAfter />
      <Testimonials />
      <MeetJessy />
      <PricingSection />
      <FinalCTA />
      <Footer />
      <StickyBooking />
    </main>
  )
}
