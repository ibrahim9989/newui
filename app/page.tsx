import Header from '@/components/Header'
import SectorCarousel from '@/components/SectorCarousel'
import HASCOSnapshot from '@/components/HASCOSnapshot'
import SectorsOverview from '@/components/SectorsOverview'
import OurClientsSection from '@/components/OurClientsSection'
import StatsSection from '@/components/StatsSection'
import FeaturedProjects from '@/components/FeaturedProjects'
import LatestNews from '@/components/LatestNews'
import ClosingCTA from '@/components/ClosingCTA'
import ConditionalFooter from '@/components/ConditionalFooter'
import SectionTransition from '@/components/SectionTransition'

export default function Home() {
  return (
    <main className="min-h-screen helvetica-scope">
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
        addDivider={false}
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
      
      {/* Section 5: Featured Projects (moved before stats) */}
      <SectionTransition 
        transitionType="slide-up" 
        delay={450}
        addDivider={false}
      >
        <div id="featured-projects">
          <FeaturedProjects />
        </div>
      </SectionTransition>
      
      {/* Section 6: Stats Section */}
      <SectionTransition 
        transitionType="fade-in" 
        delay={500}
        addDivider={false}
      >
        <div id="stats-section">
          <StatsSection />
        </div>
      </SectionTransition>

      {/* Section 7: Latest News (after stats) */}
      <SectionTransition 
        transitionType="slide-up" 
        delay={550}
        addDivider={false}
      >
        <div id="latest-news">
          <LatestNews />
        </div>
      </SectionTransition>

      {/* Section 8: Closing CTA */}
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
