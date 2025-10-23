'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import ConditionalFooter from '@/components/ConditionalFooter'
import AdvancedParticleSystem from '@/components/AdvancedParticleSystem'
import CustomCursor from '@/components/CustomCursor'
import SectionTransition from '@/components/SectionTransition'
import AnimatedCounter from '@/components/AnimatedCounter'
import Image from 'next/image'

// Fallback client data when database is unavailable
const fallbackClientSectors = [
  {
    id: 1,
    division: "Marine Operations",
    icon: "M",
    color: "from-blue-500 to-cyan-500",
    clients: [
      { name: "Saudi Ports Authority", type: "Government" },
      { name: "Red Sea Gateway", type: "Private" },
      { name: "DP World", type: "International" },
      { name: "Maersk Line", type: "International" },
      { name: "CMA CGM", type: "International" },
      { name: "Hapag-Lloyd", type: "International" }
    ]
  },
  {
    id: 2,
    division: "Logistics & Supply Chain",
    icon: "L",
    color: "from-green-500 to-emerald-500",
    clients: [
      { name: "SABIC", type: "Corporation" },
      { name: "Ma'aden", type: "Corporation" },
      { name: "Global Freight", type: "Private" },
      { name: "Almarai", type: "Corporation" },
      { name: "STC", type: "Corporation" },
      { name: "ACWA Power", type: "Corporation" }
    ]
  },
  {
    id: 3,
    division: "Construction",
    icon: "C",
    color: "from-orange-500 to-red-500",
    clients: [
      { name: "Saudi Binladin Group", type: "Corporation" },
      { name: "Nesma & Partners", type: "Private" },
      { name: "Urban Development", type: "Private" },
      { name: "Al-Rashid Construction", type: "Private" },
      { name: "Saudi Oger", type: "Corporation" },
      { name: "Al Habtoor Group", type: "Corporation" }
    ]
  },
  {
    id: 4,
    division: "Hospitality & Events",
    icon: "H",
    color: "from-purple-500 to-pink-500",
    clients: [
      { name: "Saudi Aramco", type: "Corporation" },
      { name: "Royal Commission", type: "Government" },
      { name: "Ministry of Transport", type: "Government" },
      { name: "Saudi Customs", type: "Government" },
      { name: "STC", type: "Corporation" },
      { name: "ACWA Power", type: "Corporation" }
    ]
  },
  {
    id: 5,
    division: "Technology Solutions",
    icon: "T",
    color: "from-indigo-500 to-purple-500",
    clients: [
      { name: "STC", type: "Corporation" },
      { name: "Saudi Aramco", type: "Corporation" },
      { name: "SABIC", type: "Corporation" },
      { name: "Ma'aden", type: "Corporation" },
      { name: "ACWA Power", type: "Corporation" },
      { name: "Saudi Electricity", type: "Government" }
    ]
  },
  {
    id: 6,
    division: "Environmental Services",
    icon: "E",
    color: "from-green-600 to-teal-600",
    clients: [
      { name: "Saudi Aramco", type: "Corporation" },
      { name: "SABIC", type: "Corporation" },
      { name: "Ma'aden", type: "Corporation" },
      { name: "ACWA Power", type: "Corporation" },
      { name: "Petro Rabigh", type: "Corporation" },
      { name: "Saudi Electricity", type: "Government" }
    ]
  }
]

const testimonials = [
  {
    id: 1,
    name: "Ahmed Al-Rashid",
    position: "CEO",
    company: "Red Sea Gateway",
    quote: "HASCO Group has been instrumental in our marine operations. Their expertise and professionalism are unmatched. The quality of service and attention to detail sets them apart from the competition.",
    avatar: "A",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Al-Mansouri",
    position: "Operations Director",
    company: "Global Freight",
    quote: "The logistics solutions provided by HASCO Group have significantly improved our supply chain efficiency. Their integrated approach and technology solutions have helped us reduce costs by 25%.",
    avatar: "S",
    rating: 5
  },
  {
    id: 3,
    name: "Mohammed Al-Zahrani",
    position: "Project Manager",
    company: "Urban Development",
    quote: "Their construction projects are delivered on time, within budget, and exceed our quality expectations. HASCO Group's commitment to excellence is evident in every project they undertake.",
    avatar: "M",
    rating: 5
  }
]

export default function ClientsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isStatsVisible, setIsStatsVisible] = useState(false)
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

    const element = document.getElementById('clients-hero')
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
          setIsStatsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('stats-section')
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
        <div id="clients-hero" className="pt-48 pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
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
                  <span className="font-extralight">Our </span><span className="font-extralight text-white">Clients</span>
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mb-8 apple-scale-in apple-stagger-1"></div>
                <p className="text-subtitle-md md:text-subtitle-lg text-white max-w-4xl mx-auto font-body leading-relaxed apple-slide-up apple-stagger-2">
                  We are proud to serve a diverse range of clients across various sectors, from 
                  <span className="text-brand-secondary font-extralight"> government entities to private businesses</span>, delivering excellence in every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionTransition>

      {/* Client Sectors Section */}
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
                <span className="font-extralight">Our </span><span className="font-extralight text-gray-900">Client Sectors</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mb-8 apple-scale-in apple-stagger-1"></div>
              <p className="text-subtitle-md md:text-subtitle-lg text-gray-600 max-w-3xl mx-auto font-body apple-slide-up apple-stagger-2">
                Our clients organized by business divisions and sectors
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {fallbackClientSectors.map((sector, index) => (
                <div
                  key={sector.id}
                  className="group apple-card rounded-2xl overflow-hidden shadow-lg apple-hover-lift apple-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Sector Header */}
                  <div className={`h-24 bg-gradient-to-br ${sector.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute bottom-4 left-6 right-6">
                      <h3 className="text-subtitle-sm font-bold text-white font-heading">
                        {sector.division}
                      </h3>
                    </div>
                  </div>

                  {/* Clients Grid */}
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-3">
                      {sector.clients.map((client, clientIndex) => (
                        <div
                          key={clientIndex}
                          className="group/client bg-gray-100 rounded-lg p-3 hover:bg-gray-200 transition-all duration-300 cursor-pointer"
                        >
                          <div className="flex items-center">
                            <div className="min-w-0 flex-1">
                              <p className="text-body-sm font-semibold text-gray-900 truncate font-heading">
                                {client.name}
                              </p>
                              <p className="text-body-xs text-gray-600 truncate">
                                {client.type}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
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

      {/* Client Testimonials Section */}
      <SectionTransition 
        transitionType="fade-in" 
        delay={400}
        addDivider={false}
        addGradientOverlay={true}
      >
        <div className="py-24 bg-gradient-to-r from-gray-50 to-blue-50 relative overflow-hidden">
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
                <span className="font-extralight">Client </span><span className="font-extralight text-gray-900">Testimonials</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mb-8 apple-scale-in apple-stagger-1"></div>
              <p className="text-subtitle-md md:text-subtitle-lg text-gray-600 max-w-3xl mx-auto font-body apple-slide-up apple-stagger-2">
                Hear what our satisfied clients have to say about their experience with HASCO Group
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="group apple-card rounded-2xl p-8 shadow-lg apple-hover-lift apple-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Rating Stars */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-body-sm text-gray-600 leading-relaxed mb-6 font-body italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mr-4">
                      <span className="text-lg font-bold text-white font-heading">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <p className="text-body-sm font-semibold text-gray-900 font-heading">{testimonial.name}</p>
                      <p className="text-body-xs text-gray-600">{testimonial.position}</p>
                      <p className="text-body-xs text-brand-primary font-semibold">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionTransition>

      {/* Client Satisfaction Statistics */}
      <SectionTransition 
        transitionType="scale-in" 
        delay={500}
        addDivider={false}
        addGradientOverlay={true}
      >
        <div id="stats-section" className="py-24 bg-white relative overflow-hidden">
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
                <span className="font-extralight">Client </span><span className="font-extralight text-gray-900">Satisfaction</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mb-8 apple-scale-in apple-stagger-1"></div>
              <p className="text-subtitle-md md:text-subtitle-lg text-gray-600 max-w-3xl mx-auto font-body apple-slide-up apple-stagger-2">
                Key metrics showcasing HASCO Group's performance and client satisfaction
              </p>
            </div>

            <div className={`transition-all duration-1000 ${isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="relative">
                    <AnimatedCounter 
                      end={100} 
                      suffix="%" 
                      className="text-4xl md:text-5xl font-bold text-brand-primary mb-2"
                      duration={2000}
                    />
                    <div className="absolute -top-2 -left-2 w-2 h-2 bg-cyan-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-body-sm text-gray-600">Client Retention Rate</div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <AnimatedCounter 
                      end={4.9} 
                      className="text-4xl md:text-5xl font-bold text-brand-primary mr-1"
                      duration={1800}
                    />
                    <span className="text-2xl text-gray-500">/5</span>
                  </div>
                  <div className="text-body-sm text-gray-600">Average Rating</div>
                </div>
                
                <div className="text-center">
                  <AnimatedCounter 
                    end={95} 
                    suffix="%" 
                    className="text-4xl md:text-5xl font-bold text-brand-primary mb-2"
                    duration={2200}
                  />
                  <div className="text-body-sm text-gray-600">On-Time Delivery</div>
                </div>
                
                <div className="text-center">
                  <AnimatedCounter 
                    end={200} 
                    suffix="+" 
                    className="text-4xl md:text-5xl font-bold text-brand-primary mb-2"
                    duration={2500}
                  />
                  <div className="text-body-sm text-gray-600">Happy Clients</div>
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
        <div id="become-partner" className="py-24 bg-gradient-to-r from-brand-primary to-brand-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 font-heading apple-fade-in">
              <span className="font-extralight">Become Our </span><span className="font-extralight text-white">Partner</span>
            </h2>
            <p className="text-subtitle-md md:text-subtitle-lg text-white/90 max-w-3xl mx-auto mb-8 font-body apple-slide-up apple-stagger-1">
              Join our network of satisfied clients and experience the HASCO Group difference. Let's work together to achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="apple-btn bg-white text-brand-primary px-8 py-4 rounded-xl text-button-md font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="relative z-10 tracking-wide">Get in Touch</span>
              </a>
              <a 
                href="/sectors"
                className="apple-btn border-2 border-white text-white px-8 py-4 rounded-xl text-button-md font-semibold hover:bg-white hover:text-brand-primary transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="relative z-10 tracking-wide">Explore Our Services</span>
              </a>
            </div>
          </div>
        </div>
      </SectionTransition>

      <ConditionalFooter />
    </main>
  )
}
