'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import ConditionalFooter from '@/components/ConditionalFooter'
import AdvancedParticleSystem from '@/components/AdvancedParticleSystem'
import CustomCursor from '@/components/CustomCursor'
import SectionTransition from '@/components/SectionTransition'
import AnimatedCounter from '@/components/AnimatedCounter'
import Image from 'next/image'

// Fallback sectors data when database is unavailable
const fallbackSectors = [
  {
    id: 1,
    title: "Marine Operations",
    description: "Comprehensive marine services including consultancy, operations, construction, and professional diving services.",
    features: ["Marine Consultancy", "Marine Operations", "Marine Construction", "Professional Diving"],
    icon: "M",
    color: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop&crop=center"
  },
  {
    id: 2,
    title: "Logistics & Supply Chain",
    description: "Integrated logistics solutions with freight forwarding, transportation, and supply chain management.",
    features: ["Freight Forwarding", "Transportation", "Supply Chain", "Warehousing"],
    icon: "L",
    color: "from-green-500 to-emerald-500",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center"
  },
  {
    id: 3,
    title: "Construction",
    description: "General construction projects with focus on safety, quality, and sustainability.",
    features: ["General Construction", "Safety Management", "Quality Control", "Sustainability"],
    icon: "C",
    color: "from-orange-500 to-red-500",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&crop=center"
  },
  {
    id: 4,
    title: "Hospitality & Events",
    description: "Tourism, events & entertainment, hospitality & catering services.",
    features: ["Tourism", "Events & Entertainment", "Hospitality", "Catering Services"],
    icon: "H",
    color: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1519167758481-83f1426e6b1c?w=800&h=600&fit=crop&crop=center"
  },
  {
    id: 5,
    title: "Technology Solutions",
    description: "Digital transformation and technology consulting services for modern businesses.",
    features: ["Digital Transformation", "IT Consulting", "Software Development", "System Integration"],
    icon: "T",
    color: "from-indigo-500 to-purple-500",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center"
  },
  {
    id: 6,
    title: "Environmental Services",
    description: "Environmental consulting and sustainable solutions for responsible business operations.",
    features: ["Environmental Consulting", "Sustainability", "Waste Management", "Green Solutions"],
    icon: "E",
    color: "from-green-600 to-teal-600",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop&crop=center"
  }
]

export default function SectorsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isImpactVisible, setIsImpactVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('sectors-hero')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImpactVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('impact-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <AdvancedParticleSystem />
      <CustomCursor />
      <Header />
      
      {/* Hero Section */}
      <SectionTransition 
        transitionType="reveal" 
        addGradientOverlay={true}
      >
        <div id="sectors-hero" className="pt-24 pb-20 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/80"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-heading">
                  Our <span className="text-brand-primary font-bold">Sectors</span>
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mb-8"></div>
                <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-body leading-relaxed">
                  Comprehensive solutions across multiple industries with 
                  <span className="text-brand-primary font-semibold"> expertise, innovation, and excellence</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionTransition>

      {/* Sectors Grid Section */}
      <SectionTransition 
        transitionType="slide-up" 
        delay={200}
        addDivider={true}
        addGradientOverlay={true}
      >
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">
                Our <span className="text-brand-primary">Business Sectors</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
                Our active sectors, each specializing in delivering excellence within their respective industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fallbackSectors.map((sector, index) => (
                <div
                  key={sector.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-lift-3d hover-glow animate-bounce-in border border-gray-200"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Sector Header with Background */}
                  <div className={`h-48 bg-gradient-to-br ${sector.color} relative overflow-hidden`}>
                    <div className="absolute inset-0">
                      <Image
                        src={sector.image}
                        alt={sector.title}
                        fill
                        className="object-cover opacity-30"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/50"></div>
                    
                    {/* Icon */}
                    <div className="absolute top-6 left-6">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-white font-heading">{sector.icon}</span>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                        {sector.title}
                      </h3>
                    </div>
                  </div>

                  {/* Sector Content */}
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-body">
                      {sector.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3 mb-6">
                      {sector.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                          <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-3"></span>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Learn More Button */}
                    <a 
                      href={`/sectors/${sector.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="group/btn w-full bg-brand-primary text-white py-3 px-4 rounded-lg text-sm font-semibold hover:bg-brand-secondary transition-all duration-300 flex items-center justify-center"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionTransition>

      {/* Our Impact Section */}
      <SectionTransition 
        transitionType="fade-in" 
        delay={400}
        addDivider={true}
        addGradientOverlay={true}
      >
        <div id="impact-section" className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">
                Our <span className="text-brand-primary">Impact</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
                Statistics showcasing HASCO Group's achievements across all sectors
              </p>
            </div>

            <div className={`transition-all duration-1000 ${isImpactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="relative">
                    <AnimatedCounter 
                      end={19} 
                      suffix="+" 
                      className="text-4xl md:text-5xl font-bold text-brand-primary mb-2"
                      duration={2000}
                    />
                    <div className="absolute -top-2 -left-2 w-2 h-2 bg-cyan-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-gray-600 text-sm md:text-base">Years of Excellence</div>
                </div>
                
                <div className="text-center">
                  <AnimatedCounter 
                    end={6} 
                    className="text-4xl md:text-5xl font-bold text-brand-primary mb-2"
                    duration={1500}
                  />
                  <div className="text-gray-600 text-sm md:text-base">Core Sectors</div>
                </div>
                
                <div className="text-center">
                  <AnimatedCounter 
                    end={500} 
                    suffix="+" 
                    className="text-4xl md:text-5xl font-bold text-brand-primary mb-2"
                    duration={2500}
                  />
                  <div className="text-gray-600 text-sm md:text-base">Projects Completed</div>
                </div>
                
                <div className="text-center">
                  <AnimatedCounter 
                    end={100} 
                    suffix="%" 
                    className="text-4xl md:text-5xl font-bold text-brand-primary mb-2"
                    duration={1800}
                  />
                  <div className="text-gray-600 text-sm md:text-base">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionTransition>

      {/* Call-to-Action Section */}
      <SectionTransition 
        transitionType="slide-up" 
        delay={600}
        addDivider={true}
      >
        <div className="py-20 bg-gradient-to-r from-brand-primary to-brand-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 font-body">
              Let's discuss how HASCO Group can support your business needs across any of our sectors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-white text-brand-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 apple-btn"
              >
                Start a Project
              </a>
              <a 
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-primary transition-colors duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </SectionTransition>

      <ConditionalFooter />
    </main>
  )
}
