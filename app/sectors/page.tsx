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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isClient])

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
        <div id="sectors-hero" className="pt-48 pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Premium background effects - matching homepage */}
          <div className="absolute inset-0">
            {/* Subtle overlay for depth without color */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            
            {/* Animated geometric patterns */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rotate-12 animate-pulse" style={{ animationDuration: '3s' }}></div>
              <div className="absolute top-1/2 left-10 w-16 h-16 border border-white/20 rounded-full animate-bounce" style={{ animationDuration: '4s' }}></div>
            </div>
            
            {/* Advanced floating particles with mouse interaction */}
            <div className="absolute inset-0">
              {Array.from({ length: 30 }).map((_, i) => {
                if (!isClient) return null
                return (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${2 + Math.random() * 2}s`,
                      transform: `translate(${(mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) * (i % 3) * 0.01}px, ${(mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) * (i % 3) * 0.01}px)`,
                      transition: 'transform 0.1s ease-out'
                    }}
                  />
                )
              })}
            </div>
            
            {/* Mouse-following glow effect */}
            <div className="absolute w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none transition-all duration-300"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center">
                <h1 className="text-title-lg md:text-title-xl font-light text-white mb-6 font-heading apple-fade-in">
                  <span className="font-extralight">Our </span><span className="font-extralight text-white">Sectors</span>
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mb-8 apple-scale-in apple-stagger-1"></div>
                <p className="text-subtitle-md md:text-subtitle-lg text-white max-w-4xl mx-auto font-body leading-relaxed apple-slide-up apple-stagger-2">
                  Comprehensive solutions across multiple industries with 
                  <span className="text-brand-secondary font-extralight"> expertise, innovation, and excellence</span>
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
        addDivider={false}
        addGradientOverlay={true}
      >
        <div className="py-24 bg-white relative overflow-hidden">
          {/* Enhanced Background Effects - matching homepage */}
          <div className="absolute inset-0">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-20 left-20 w-24 h-24 border border-gray-300 rotate-45 animate-pulse" style={{ animationDuration: '6s' }}></div>
              <div className="absolute bottom-20 right-20 w-20 h-20 border border-gray-300 rotate-12 animate-pulse" style={{ animationDuration: '4s', animationDelay: '2s' }}></div>
            </div>
            
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/20 to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 font-heading apple-fade-in">
                <span className="font-extralight">Our </span><span className="font-extralight text-gray-900">Business Sectors</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mb-8 apple-scale-in apple-stagger-1"></div>
              <p className="text-subtitle-md md:text-subtitle-lg text-gray-600 max-w-3xl mx-auto font-body apple-slide-up apple-stagger-2">
                Our active sectors, each specializing in delivering excellence within their respective industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fallbackSectors.map((sector, index) => (
                <div
                  key={sector.id}
                  className="group apple-card rounded-2xl overflow-hidden shadow-lg apple-hover-lift apple-scale-in"
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
                      <h3 className="text-subtitle-sm font-bold text-white mb-2 font-heading">
                        {sector.title}
                      </h3>
                    </div>
                  </div>

                  {/* Sector Content */}
                  <div className="p-6">
                    <p className="text-body-sm text-gray-600 leading-relaxed mb-6 font-body">
                      {sector.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3 mb-6">
                      {sector.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-body-xs text-gray-500">
                          <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-3"></span>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Learn More Button */}
                    <a 
                      href={`/sectors/${sector.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="apple-btn group/btn w-full bg-brand-primary text-white py-3 px-4 rounded-xl text-button-md font-semibold hover:bg-brand-secondary transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
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
        addDivider={false}
        addGradientOverlay={true}
      >
        <div id="impact-section" className="py-24 bg-gradient-to-r from-gray-50 to-blue-50 relative overflow-hidden">
          {/* Enhanced Background Effects - matching homepage */}
          <div className="absolute inset-0">
            {/* Background Image */}
            <div 
              className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center bg-no-repeat opacity-20 animate-gentle-pulse"
              style={{
                backgroundImage: 'url(/images/Slide5.jpeg)'
              }}
            ></div>
            
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            
            {/* Floating geometric elements */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-20 left-20 w-32 h-32 border border-blue-200 rotate-45 bg-element-float" style={{ animationDuration: '4s' }}></div>
              <div className="absolute bottom-20 right-20 w-24 h-24 border border-blue-200 rotate-12 bg-element-rotate" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
            </div>
            
            {/* Floating tech elements */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 font-heading apple-fade-in">
                <span className="font-extralight">Our </span><span className="font-extralight text-gray-900">Impact</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mb-8 apple-scale-in apple-stagger-1"></div>
              <p className="text-subtitle-md md:text-subtitle-lg text-gray-600 max-w-3xl mx-auto font-body apple-slide-up apple-stagger-2">
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
                  <div className="text-body-sm text-gray-600">Years of Excellence</div>
                </div>
                
                <div className="text-center">
                  <AnimatedCounter 
                    end={6} 
                    className="text-4xl md:text-5xl font-bold text-brand-primary mb-2"
                    duration={1500}
                  />
                  <div className="text-body-sm text-gray-600">Core Sectors</div>
                </div>
                
                <div className="text-center">
                  <AnimatedCounter 
                    end={500} 
                    suffix="+" 
                    className="text-4xl md:text-5xl font-bold text-brand-primary mb-2"
                    duration={2500}
                  />
                  <div className="text-body-sm text-gray-600">Projects Completed</div>
                </div>
                
                <div className="text-center">
                  <AnimatedCounter 
                    end={100} 
                    suffix="%" 
                    className="text-4xl md:text-5xl font-bold text-brand-primary mb-2"
                    duration={1800}
                  />
                  <div className="text-body-sm text-gray-600">Client Satisfaction</div>
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
        addDivider={false}
      >
        <div id="ready-to-work" className="py-24 bg-gradient-to-r from-brand-primary to-brand-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 font-heading apple-fade-in">
              <span className="font-extralight">Ready to Work </span><span className="font-extralight text-white">Together?</span>
            </h2>
            <p className="text-subtitle-md md:text-subtitle-lg text-white/90 max-w-3xl mx-auto mb-8 font-body apple-slide-up apple-stagger-1">
              Let's discuss how HASCO Group can support your business needs across any of our sectors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="apple-btn bg-white text-brand-primary px-8 py-4 rounded-xl text-button-md font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="relative z-10 tracking-wide">Start a Project</span>
              </a>
              <a 
                href="/about"
                className="apple-btn border-2 border-white text-white px-8 py-4 rounded-xl text-button-md font-semibold hover:bg-white hover:text-brand-primary transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="relative z-10 tracking-wide">Learn More About Us</span>
              </a>
            </div>
          </div>
        </div>
      </SectionTransition>

      <ConditionalFooter />
    </main>
  )
}
