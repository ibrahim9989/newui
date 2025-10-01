'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import ConditionalFooter from '@/components/ConditionalFooter'
import AdvancedParticleSystem from '@/components/AdvancedParticleSystem'
import CustomCursor from '@/components/CustomCursor'
import SectionTransition from '@/components/SectionTransition'
import AnimatedCounter from '@/components/AnimatedCounter'
import Image from 'next/image'

const coreServices = [
  {
    title: "SHIP AGENCY",
    description: "Professional ship agency services with comprehensive port operations",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
    stats: "15+ Ports Served"
  },
  {
    title: "SHIPPING (NVOCC)",
    description: "Global shipping solutions and cargo management",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
    stats: "50+ Global Routes"
  },
  {
    title: "MARINE OPERATIONS",
    description: "Comprehensive marine services including consultancy and diving",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop&crop=center",
    stats: "200+ Marine Projects"
  },
  {
    title: "HOSPITALITY",
    description: "High-quality hospitality, catering, and event management",
    image: "https://images.unsplash.com/photo-1519167758481-83f1426e6b1c?w=800&h=600&fit=crop&crop=center",
    stats: "1000+ Events Managed"
  }
]

const divisions = [
  {
    title: "Marine Operations",
    description: "Professional diving services, marine consultancy, and underwater operations with certified divers and advanced equipment",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop&crop=center",
    category: "Marine",
    stats: "200+ Projects",
    background: "from-blue-500 to-cyan-500"
  },
  {
    title: "Ship Agency",
    description: "Comprehensive port operations, vessel handling, and maritime logistics services across multiple ports",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
    category: "Marine",
    stats: "15+ Ports",
    background: "from-blue-600 to-indigo-600"
  },
  {
    title: "Freight Forwarding",
    description: "International cargo transportation, customs clearance, and global logistics solutions",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
    category: "Logistics",
    stats: "10K+ Shipments",
    background: "from-green-500 to-emerald-500"
  },
  {
    title: "Logistics & Supply Chain",
    description: "End-to-end supply chain management, warehousing, and distribution services",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&crop=center",
    category: "Logistics",
    stats: "12 Warehouses",
    background: "from-green-600 to-teal-600"
  },
  {
    title: "Hospitality & Events",
    description: "Premium event management, catering services, and hospitality solutions",
    image: "https://images.unsplash.com/photo-1519167758481-83f1426e6b1c?w=800&h=600&fit=crop&crop=center",
    category: "Hospitality",
    stats: "1000+ Events",
    background: "from-purple-500 to-pink-500"
  },
  {
    title: "Facility Management",
    description: "Professional facility maintenance, management, and operational services",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center",
    category: "Management",
    stats: "50+ Facilities",
    background: "from-orange-500 to-red-500"
  },
  {
    title: "Property Development",
    description: "Strategic property investment, development, and construction project management",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&crop=center",
    category: "Development",
    stats: "$500M+ Value",
    background: "from-yellow-500 to-orange-500"
  },
  {
    title: "Construction",
    description: "Infrastructure development, construction management, and project delivery services",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&crop=center",
    category: "Construction",
    stats: "25+ Projects",
    background: "from-gray-600 to-gray-800"
  },
  {
    title: "Technology Solutions",
    description: "Digital transformation, IT consulting, and technology integration services",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center",
    category: "Technology",
    stats: "100+ Solutions",
    background: "from-indigo-500 to-purple-500"
  }
]

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('about-hero')
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
    <main className="min-h-screen">
      <AdvancedParticleSystem />
      <CustomCursor />
      <Header />
      
      {/* Hero Section */}
      <SectionTransition 
        transitionType="reveal" 
        addGradientOverlay={true}
      >
        <div id="about-hero" className="pt-24 pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-heading">
                  About <span className="text-white font-bold">HASCO Group</span>
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mb-8"></div>
                <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto font-body leading-relaxed">
                  Excellence in integrated solutions across marine, logistics, and development sectors with 
                  <span className="text-brand-secondary font-semibold"> 19+ years of proven expertise</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionTransition>

      {/* Company Overview Section */}
      <SectionTransition 
        transitionType="slide-up" 
        delay={200}
        addDivider={true}
        addGradientOverlay={true}
      >
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Our Story */}
              <div className="apple-card rounded-2xl p-8 shadow-xl apple-hover-lift">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">Our Story</h2>
                <div className="space-y-6 text-gray-600 leading-relaxed font-body">
                  <p>
                    Established in 2005, HASCO Group was founded with a vision to practice integrated supply chain & logistics solutions. Over the past 19+ years, we have created an active ecosystem of maritime and logistics services that has become a leading force in the Middle East.
                  </p>
                  <p>
                    Our journey began with a simple yet powerful mission: to deliver exceptional integrated solutions across marine, logistics, and development sectors. Today, we stand as a testament to excellence, innovation, and sustainable growth in Saudi Arabia's economic landscape.
                  </p>
                  <p>
                    From ship agency and marine operations to freight forwarding and hospitality, we have built a comprehensive portfolio that serves clients across multiple sectors, creating value through integrated solutions that drive sustainable growth.
                  </p>
                </div>
                
                {/* Key Statistics */}
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <AnimatedCounter 
                      end={19} 
                      suffix="+" 
                      className="text-3xl font-bold text-brand-primary mb-2"
                      duration={2000}
                    />
                    <div className="text-gray-600 text-sm">Years of Excellence</div>
                  </div>
                  <div className="text-center">
                    <AnimatedCounter 
                      end={500} 
                      suffix="+" 
                      className="text-3xl font-bold text-brand-primary mb-2"
                      duration={2500}
                    />
                    <div className="text-gray-600 text-sm">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <AnimatedCounter 
                      end={50} 
                      suffix="+" 
                      className="text-3xl font-bold text-brand-primary mb-2"
                      duration={1800}
                    />
                    <div className="text-gray-600 text-sm">Team Members</div>
                  </div>
                  <div className="text-center">
                    <AnimatedCounter 
                      end={15} 
                      suffix="+" 
                      className="text-3xl font-bold text-brand-primary mb-2"
                      duration={1500}
                    />
                    <div className="text-gray-600 text-sm">Countries Served</div>
                  </div>
                </div>
              </div>

              {/* Company Image */}
              <div className="relative">
                <div className="apple-card rounded-2xl overflow-hidden shadow-xl apple-hover-lift">
                  <Image
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center"
                    alt="HASCO Group Office"
                    width={800}
                    height={600}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">HASCO Group Headquarters</h3>
                    <p className="text-gray-200">Dammam, Saudi Arabia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionTransition>

      {/* Core Services Section */}
      <SectionTransition 
        transitionType="fade-in" 
        delay={300}
        addDivider={true}
      >
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">
                Our <span className="text-brand-primary">Core Services</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
                Four main service areas that form the foundation of our integrated solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreServices.map((service, index) => (
                <div
                  key={index}
                  className="group apple-card rounded-xl overflow-hidden shadow-lg apple-hover-lift apple-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover apple-img-hover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-semibold">
                        {service.stats}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors duration-500 font-heading">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-body group-hover:text-gray-800 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionTransition>

      {/* Mission & Vision Section */}
      <SectionTransition 
        transitionType="slide-up" 
        delay={400}
        addDivider={true}
        addGradientOverlay={true}
      >
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">
                Mission & <span className="text-brand-primary">Vision</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="apple-card rounded-xl p-8 shadow-lg apple-hover-lift apple-fade-in">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 apple-float">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 apple-text-shimmer">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed font-body">
                  To deliver exceptional integrated solutions across marine, logistics, and development sectors, fostering sustainable growth and innovation. We are committed to maintaining the highest standards of quality, safety, and environmental responsibility while creating lasting value for our clients and communities.
                </p>
              </div>
              
              <div className="apple-card rounded-xl p-8 shadow-lg apple-hover-lift apple-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 apple-float" style={{ animationDelay: '0.5s' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 apple-text-shimmer">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed font-body">
                  To be the leading integrated solutions provider in the Middle East, recognized for excellence, innovation, and sustainable development. We aim to be the preferred partner for organizations seeking comprehensive solutions that drive growth and success in an ever-evolving business landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionTransition>

      {/* Our Divisions Section */}
      <SectionTransition 
        transitionType="scale-in" 
        delay={500}
        addDivider={true}
        addGradientOverlay={true}
      >
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">
                Our <span className="text-brand-primary">Divisions</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
                Dynamic display of our active divisions, each specializing in delivering excellence within their respective sectors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {divisions.slice(0, 9).map((division, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-lift-3d hover-glow animate-bounce-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Division Header with Background */}
                  <div className={`h-32 bg-gradient-to-br ${division.background} relative overflow-hidden`}>
                    <div className="absolute inset-0">
                      <Image
                        src={division.image}
                        alt={division.title}
                        fill
                        className="object-cover opacity-30"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute top-4 left-4">
                      <div className="text-white font-bold text-lg font-heading">
                        {division.title}
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-semibold">
                        {division.stats}
                      </div>
                    </div>
                  </div>

                  {/* Division Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <div className="text-xs text-brand-primary font-semibold mb-2 uppercase tracking-wide font-heading">
                        {division.category}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed font-body">
                        {division.description}
                      </p>
                    </div>

                    {/* Division Features */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-xs text-gray-500">
                        <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-2"></span>
                        Specialized expertise
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-2"></span>
                        Certified professionals
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-2"></span>
                        Advanced technology
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm font-semibold hover:bg-brand-primary hover:text-white transition-colors duration-300">
                      Learn More
                    </button>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))}
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 font-body">
              Let's discuss your project and discover how our integrated solutions can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#contact"
                className="bg-white text-brand-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 apple-btn"
              >
                Get In Touch
              </a>
              <a 
                href="/#services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-primary transition-colors duration-300"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </SectionTransition>

      <ConditionalFooter />
    </main>
  )
}
