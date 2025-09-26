import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import FeaturedServicesSection from '@/components/FeaturedServicesSection'
import OurClientsSection from '@/components/OurClientsSection'
import FeaturesIconSection from '@/components/FeaturesIconSection'
import ContactUsSection from '@/components/ContactUsSection'
import AboutUsSection from '@/components/AboutUsSection'
import AdvancedParticleSystem from '@/components/AdvancedParticleSystem'
import CustomCursor from '@/components/CustomCursor'

export default function Home() {
  return (
    <main className="min-h-screen">
      <AdvancedParticleSystem />
      <CustomCursor />
      <Header />
      <section id="home" className="pt-24">
        <HeroSection />
      </section>
      <section id="services">
        <FeaturedServicesSection />
      </section>
      <section id="gallery">
        <OurClientsSection />
      </section>
      <section id="blog">
        <FeaturesIconSection />
      </section>
      <section id="contacts">
        <ContactUsSection />
      </section>
      <section id="about">
        <AboutUsSection />
      </section>
    </main>
  )
}
