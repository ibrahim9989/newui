'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import ConditionalFooter from '@/components/ConditionalFooter'
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
    background: "from-brand-primary to-brand-secondary"
  },
  {
    title: "Ship Agency",
    description: "Comprehensive port operations, vessel handling, and maritime logistics services across multiple ports",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
    category: "Marine",
    stats: "15+ Ports",
    background: "from-brand-primary to-brand-secondary"
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
    background: "from-brand-primary to-brand-secondary"
  }
]

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])


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
      <Header />
      
      {/* Hero Section */}
      <SectionTransition 
        transitionType="reveal" 
        addGradientOverlay={true}
      >
        <div id="about-hero" className="pt-48 pb-20 bg-gradient-to-br from-gray-900 via-brand-primary to-gray-900 relative overflow-hidden">
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
                  <span className="font-extralight">About </span><span className="font-extralight text-white">HASCO Group</span>
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mb-8 apple-scale-in apple-stagger-1"></div>
                <p className="text-subtitle-md md:text-subtitle-lg text-white max-w-4xl mx-auto font-body leading-relaxed apple-slide-up apple-stagger-2">
                  Excellence in integrated solutions across marine, logistics, and development sectors with 
                  <span className="text-brand-secondary font-extralight"> 19+ years of proven expertise</span>
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
        addDivider={false}
        addGradientOverlay={true}
      >
        <div className="py-24 bg-gray-50 relative overflow-hidden">
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
              <div className="absolute top-20 left-20 w-32 h-32 border border-brand-primary/30 rotate-45 bg-element-float" style={{ animationDuration: '4s' }}></div>
              <div className="absolute bottom-20 right-20 w-24 h-24 border border-brand-primary/30 rotate-12 bg-element-rotate" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
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
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Our Story */}
              <div className="apple-card rounded-2xl p-8 shadow-xl apple-hover-lift">
                <h2 className="text-title-md md:text-title-lg font-light text-gray-900 mb-6 font-heading"><span className="font-extralight">Our </span><span className="font-extralight text-gray-900">Story</span></h2>
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
                      className="text-title-md md:text-title-lg font-bold text-brand-primary mb-2"
                      duration={2000}
                    />
                    <div className="text-gray-600 text-body-sm font-body">Years of Excellence</div>
                  </div>
                  <div className="text-center">
                    <AnimatedCounter 
                      end={500} 
                      suffix="+" 
                      className="text-title-md md:text-title-lg font-bold text-brand-primary mb-2"
                      duration={2500}
                    />
                    <div className="text-gray-600 text-body-sm font-body">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <AnimatedCounter 
                      end={50} 
                      suffix="+" 
                      className="text-title-md md:text-title-lg font-bold text-brand-primary mb-2"
                      duration={1800}
                    />
                    <div className="text-gray-600 text-body-sm font-body">Team Members</div>
                  </div>
                  <div className="text-center">
                    <AnimatedCounter 
                      end={15} 
                      suffix="+" 
                      className="text-title-md md:text-title-lg font-bold text-brand-primary mb-2"
                      duration={1500}
                    />
                    <div className="text-gray-600 text-body-sm font-body">Countries Served</div>
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
                    <h3 className="text-title-sm font-semibold mb-2 font-heading">HASCO Group Headquarters</h3>
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
        addDivider={false}
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
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-title-lg md:text-title-xl font-light text-gray-900 mb-6 font-heading apple-fade-in">
                <span className="font-extralight">Our </span><span className="font-extralight text-gray-900">Core Services</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mb-8 apple-scale-in apple-stagger-1"></div>
              <p className="text-subtitle-md md:text-subtitle-lg text-gray-600 max-w-3xl mx-auto font-body apple-slide-up apple-stagger-2">
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
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-body-sm font-semibold font-heading">
                        {service.stats}
                      </div>
                    </div>
                    
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-subtitle-sm font-semibold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors duration-500 font-heading">
                      {service.title}
                    </h3>
                    <p className="text-body-sm text-gray-600 leading-relaxed font-body group-hover:text-gray-800 transition-colors duration-300">
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
        addDivider={false}
        addGradientOverlay={true}
      >
        <div className="py-24 bg-gray-50 relative overflow-hidden">
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
              <div className="absolute top-20 left-20 w-32 h-32 border border-brand-primary/30 rotate-45 bg-element-float" style={{ animationDuration: '4s' }}></div>
              <div className="absolute bottom-20 right-20 w-24 h-24 border border-brand-primary/30 rotate-12 bg-element-rotate" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
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
              <h2 className="text-title-lg md:text-title-xl font-light text-gray-900 mb-6 font-heading apple-fade-in">
                <span className="font-extralight">Mission & </span><span className="font-extralight text-gray-900">Vision</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mb-8 apple-scale-in apple-stagger-1"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="apple-card rounded-xl p-8 shadow-lg apple-hover-lift apple-fade-in">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mb-6 apple-float">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                    <h3 className="text-subtitle-sm font-semibold text-gray-900 mb-4 apple-text-shimmer font-heading">Our Mission</h3>
                <p className="text-body-sm text-gray-600 leading-relaxed font-body">
                  To deliver exceptional integrated solutions across marine, logistics, and development sectors, fostering sustainable growth and innovation. We are committed to maintaining the highest standards of quality, safety, and environmental responsibility while creating lasting value for our clients and communities.
                </p>
              </div>
              
              <div className="apple-card rounded-xl p-8 shadow-lg apple-hover-lift apple-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mb-6 apple-float" style={{ animationDelay: '0.5s' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-subtitle-sm font-semibold text-gray-900 mb-4 apple-text-shimmer font-heading">Our Vision</h3>
                <p className="text-body-sm text-gray-600 leading-relaxed font-body">
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
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-title-lg md:text-title-xl font-light text-gray-900 mb-6 font-heading apple-fade-in">
                <span className="font-extralight">Our </span><span className="font-extralight text-gray-900">Divisions</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mb-8 apple-scale-in apple-stagger-1"></div>
              <p className="text-subtitle-md md:text-subtitle-lg text-gray-600 max-w-3xl mx-auto font-body apple-slide-up apple-stagger-2">
                Dynamic display of our active divisions, each specializing in delivering excellence within their respective sectors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {divisions.slice(0, 9).map((division, index) => (
                <div
                  key={index}
                  className="group apple-card rounded-2xl overflow-hidden shadow-lg apple-hover-lift apple-scale-in"
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
                      <div className="text-white font-semibold text-subtitle-sm font-heading">
                        {division.title}
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-body-sm font-semibold font-heading">
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
                      <p className="text-body-sm text-gray-600 leading-relaxed font-body">
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
                    <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-xl text-button-md font-semibold hover:bg-brand-primary hover:text-white transition-colors duration-300">
                      Learn More
                    </button>
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

      {/* Call-to-Action Section */}
      <SectionTransition 
        transitionType="slide-up" 
        delay={600}
        addDivider={false}
      >
        <div id="ready-to-work-about" className="py-24 bg-gradient-to-r from-brand-primary to-brand-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-title-lg md:text-title-xl font-light text-white mb-6 font-heading apple-fade-in">
              <span className="font-extralight">Ready to Work With </span><span className="font-extralight text-white">Us?</span>
            </h2>
            <p className="text-subtitle-md md:text-subtitle-lg text-white/90 max-w-3xl mx-auto mb-8 font-body apple-slide-up apple-stagger-1">
              Let's discuss your project and discover how our integrated solutions can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#contact"
                className="apple-btn bg-white text-brand-primary px-8 py-4 rounded-xl text-button-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="relative z-10 tracking-wide">Get In Touch</span>
              </a>
              <a 
                href="/#services"
                className="apple-btn border-2 border-white text-white px-8 py-4 rounded-xl text-button-lg font-semibold hover:bg-white hover:text-brand-primary transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="relative z-10 tracking-wide">View Our Services</span>
              </a>
            </div>
          </div>
        </div>
      </SectionTransition>

      <ConditionalFooter />
    </main>
  )
}
