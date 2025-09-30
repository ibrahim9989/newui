import Header from '@/components/Header'
import SectorCarousel from '@/components/SectorCarousel'
import AboutHASCOGroup from '@/components/AboutHASCOGroup'
import OurServices from '@/components/OurServices'
import StatisticsSection from '@/components/StatisticsSection'
import HASCOOperationOffices from '@/components/HASCOOperationOffices'
import ProjectsShowcase from '@/components/ProjectsShowcase'
import WhyHASCO from '@/components/WhyHASCO'
import OurClientsSection from '@/components/OurClientsSection'
import OurDivisions from '@/components/OurDivisions'
import ContactUsSection from '@/components/ContactUsSection'
import ConditionalFooter from '@/components/ConditionalFooter'
import AdvancedParticleSystem from '@/components/AdvancedParticleSystem'
import CustomCursor from '@/components/CustomCursor'
import SectionTransition from '@/components/SectionTransition'

export default function Home() {
  return (
    <main className="min-h-screen">
      <AdvancedParticleSystem />
      <CustomCursor />
      <Header />
      
      {/* Section 1: Hero Section (SectorCarousel) */}
      <SectionTransition 
        transitionType="reveal" 
        addGradientOverlay={true}
      >
        <div id="home">
          <SectorCarousel />
        </div>
      </SectionTransition>
      
      {/* Section 2: About HASCO Group */}
      <SectionTransition 
        transitionType="slide-up" 
        delay={200}
        addDivider={true}
        addGradientOverlay={true}
      >
        <div id="about">
          <AboutHASCOGroup />
        </div>
      </SectionTransition>
      
      {/* Section 3: Our Services */}
      <SectionTransition 
        transitionType="fade-in" 
        delay={300}
        addDivider={true}
      >
        <div id="services">
          <OurServices />
        </div>
      </SectionTransition>
      
      {/* Section 4: Statistics */}
      <SectionTransition 
        transitionType="slide-up" 
        delay={350}
        addDivider={true}
      >
        <div id="statistics">
          <StatisticsSection />
        </div>
      </SectionTransition>
      
      {/* Section 5: HASCO Operation Offices */}
      <SectionTransition 
        transitionType="scale-in" 
        delay={400}
        addDivider={true}
        addGradientOverlay={true}
      >
        <div id="offices">
          <HASCOOperationOffices />
        </div>
      </SectionTransition>
      
      {/* Section 6: Projects Showcase */}
      <SectionTransition 
        transitionType="slide-up" 
        delay={500}
        addDivider={true}
      >
        <div id="projects">
          <ProjectsShowcase />
        </div>
      </SectionTransition>
      
      {/* Section 7: Why HASCO */}
      <SectionTransition 
        transitionType="fade-in" 
        delay={600}
        addDivider={true}
        addGradientOverlay={true}
      >
        <div id="why-hasco">
          <WhyHASCO />
        </div>
      </SectionTransition>
      
      {/* Section 8: Our Clients */}
      <SectionTransition 
        transitionType="reveal" 
        delay={700}
        addDivider={true}
      >
        <div id="clients">
          <OurClientsSection />
        </div>
      </SectionTransition>
      
      {/* Section 9: Our Divisions */}
      <SectionTransition 
        transitionType="scale-in" 
        delay={800}
        addDivider={true}
        addGradientOverlay={true}
      >
        <div id="divisions">
          <OurDivisions />
        </div>
      </SectionTransition>
      
      {/* Contact Section */}
      <SectionTransition 
        transitionType="slide-up" 
        delay={900}
        addDivider={true}
      >
        <div id="contact">
          <ContactUsSection />
        </div>
      </SectionTransition>
      
      {/* Footer */}
      <ConditionalFooter />
    </main>
  )
}
