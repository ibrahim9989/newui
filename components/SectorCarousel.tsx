'use client'

import { useState, useEffect } from 'react'
import AnimatedCounter from './AnimatedCounter'

const sectors = [
  {
    title: "Ship Agency",
    stats: "15+ Ports Served, 500+ Vessels Handled",
    description: "Comprehensive port operations and vessel handling services"
  },
  {
    title: "Shipping NVOCC",
    stats: "50+ Global Routes, 25+ Countries Served",
    description: "Global cargo solutions and international shipping"
  },
  {
    title: "Marine Operations",
    stats: "200+ Marine Projects, 50+ Certified Divers",
    description: "Professional diving and marine consultancy services"
  },
  {
    title: "Hospitality & Events",
    stats: "1000+ Events Managed, 5000+ Guest Capacity",
    description: "Premium hospitality and event management services"
  },
  {
    title: "Freight Forwarding",
    stats: "10K+ Shipments Handled, 5K+ Customs Clearances",
    description: "Efficient freight forwarding and customs clearance"
  },
  {
    title: "Logistics & Supply Chain",
    stats: "12 Warehouses, 8 Distribution Centers",
    description: "Comprehensive logistics and supply chain solutions"
  },
  {
    title: "Facility Management",
    stats: "50+ Facilities Managed, 200+ Maintenance Staff",
    description: "Professional facility management and maintenance"
  },
  {
    title: "Property & Development",
    stats: "$500M+ Investment Value, 25+ Projects Completed",
    description: "Strategic property development and investment"
  }
]

export default function SectorCarousel() {
  const [currentSector, setCurrentSector] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isClient])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSector((prev) => (prev + 1) % sectors.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 h-screen flex items-center overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        {/* Sophisticated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-slate-800/30 to-slate-900/50"></div>
        
        {/* Subtle geometric patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rotate-45"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rotate-12"></div>
          <div className="absolute bottom-32 left-40 w-40 h-40 border border-white/20 rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 border border-white/20 rotate-12"></div>
        </div>

        {/* Elegant floating elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => {
            if (!isClient) return null
            return (
              <div
                key={i}
                className="absolute w-0.5 h-0.5 bg-white/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                  animation: 'pulse 3s ease-in-out infinite'
                }}
              />
            )
          })}
        </div>

        {/* Subtle mouse-following effect */}
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-blue-600/5 to-slate-600/5 rounded-full blur-3xl pointer-events-none transition-all duration-500"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
            transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.02}px)`
          }}
        />
        
        {/* Professional compass element */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-5"
          style={{
            transform: `translate(-50%, -50%) translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`
          }}
        >
          <div className="w-full h-full border border-white/30 rounded-full relative">
            {/* Compass markings */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-px h-6 bg-white/40 origin-bottom"
                style={{
                  transform: `rotate(${i * 30}deg) translateY(-200px)`,
                  transformOrigin: '50% 200px'
                }}
              />
            ))}
            {/* Center point */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/60 rounded-full"></div>
          </div>
        </div>
        
        {/* Subtle marine elements */}
        <div 
          className="absolute bottom-0 right-0 w-64 h-80 opacity-10"
          style={{
            transform: `translateY(${scrollY * -0.05}px)`
          }}
        >
          {/* Elegant ship silhouette */}
          <div className="absolute bottom-0 right-16 w-24 h-12 bg-white/20 rounded-t-lg"></div>
          <div className="absolute bottom-12 right-20 w-px h-16 bg-white/20"></div>
          <div className="absolute bottom-20 right-16 w-12 h-12 bg-white/10 rounded"></div>
        </div>

        {/* Professional grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Premium Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-full flex items-center">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center h-full">
            {/* Left Column - Main Content */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Professional headline */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[0.85] tracking-tight font-heading">
                  <span className="block font-extralight animate-slide-in-left stagger-1">
                    YOUR TRUST,
                  </span>
                  <span className="block font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 animate-slide-in-right stagger-2">
                    OUR COMMITMENT
                  </span>
                </h1>
              </div>
              
              {/* Elegant description */}
              <div className="max-w-2xl">
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light font-body animate-slide-in-up stagger-3">
                  Excellence in integrated solutions across marine, logistics, and development sectors with 
                  <span className="text-blue-400 font-medium font-heading"> 19+ years of proven expertise</span>
                </p>
              </div>

              {/* Professional buttons */}
              <div className="flex flex-col sm:flex-row gap-6 animate-bounce-in stagger-4">
                <button className="apple-btn bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 text-base font-medium font-heading hover:from-blue-700 hover:to-blue-800 rounded-sm shadow-lg hover:shadow-xl hover:shadow-blue-500/25">
                  <span className="relative z-10 tracking-wide">GET STARTED</span>
                </button>
                <button className="apple-btn bg-transparent text-white border border-white/30 px-8 py-4 text-base font-medium font-heading hover:bg-white/10 hover:border-white/50 rounded-sm backdrop-blur-sm">
                  <span className="relative z-10 tracking-wide">LEARN MORE</span>
                </button>
              </div>

            </div>

            {/* Right Column - Elegant Sector Showcase */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                  <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-medium text-white tracking-wide">Featured Sector</h3>
                      <div className="flex space-x-2">
                        {sectors.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSector(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === currentSector ? 'bg-blue-400' : 'bg-white/20'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="transition-all duration-500 ease-in-out">
                      <h4 className="text-2xl font-light text-blue-400 mb-3 tracking-wide">
                        {sectors[currentSector].title}
                      </h4>
                      <p className="text-sm text-white/80 mb-4 font-light">
                        {sectors[currentSector].stats}
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed font-light">
                        {sectors[currentSector].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
