import Header from '@/components/Header'
import SectorCarousel from '@/components/SectorCarousel'
import HASCOSnapshot from '@/components/HASCOSnapshot'
import SectorsOverview from '@/components/SectorsOverview'
import OurClientsSection from '@/components/OurClientsSection'
import StatsSection from '@/components/StatsSection'
import FeaturedProjects from '@/components/FeaturedProjects'
import ClosingCTA from '@/components/ClosingCTA'
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
      
      {/* Section 1: Hero Section */}
      <SectionTransition 
        transitionType="reveal" 
        addGradientOverlay={true}
      >
        <div id="home">
          <SectorCarousel />
        </div>
      </SectionTransition>
      
      {/* Section 2: HASCO Snapshot */}
      <SectionTransition 
        transitionType="slide-up" 
        delay={200}
        addDivider={false}
      >
        <div id="hasco-snapshot">
          <HASCOSnapshot />
        </div>
      </SectionTransition>
      
      {/* Section 3: Sectors Overview */}
      <SectionTransition 
        transitionType="fade-in" 
        delay={300}
        addDivider={true}
      >
        <div id="sectors-overview">
          <SectorsOverview />
        </div>
      </SectionTransition>
      
      {/* Section 4: Clients & Partners Showcase */}
      <SectionTransition 
        transitionType="reveal" 
        delay={400}
        addDivider={false}
      >
        <div id="clients">
          <OurClientsSection />
        </div>
      </SectionTransition>
      
      {/* Section 5: Stats Section */}
      <SectionTransition 
        transitionType="fade-in" 
        delay={450}
        addDivider={false}
      >
        <div id="stats-section">
          <StatsSection />
        </div>
      </SectionTransition>
      
      {/* Section 6: Featured Projects */}
      <SectionTransition 
        transitionType="slide-up" 
        delay={500}
        addDivider={true}
      >
        <div id="featured-projects">
          <FeaturedProjects />
        </div>
      </SectionTransition>
      
      {/* Section 7: Closing CTA */}
      <SectionTransition 
        transitionType="fade-in" 
        delay={600}
        addDivider={false}
      >
        <div id="closing-cta">
          <ClosingCTA />
        </div>
      </SectionTransition>
      
      {/* Footer */}
      <ConditionalFooter />
    </main>
  )
}
