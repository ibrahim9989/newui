'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function OurClientsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const clients = [
    { name: "neom", logo: "NEOM", logoImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop&crop=center", description: "Future city development" },
    { name: "red-sea-global", logo: "Red Sea Global", logoImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=100&fit=crop&crop=center", description: "Tourism development" },
    { name: "amaala", logo: "AMAALA", logoImage: "https://images.unsplash.com/photo-1519167758481-83f1426e6b1c?w=200&h=100&fit=crop&crop=center", description: "Luxury tourism" },
    { name: "saudi-aramco", logo: "Saudi Aramco", logoImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=100&fit=crop&crop=center", description: "Energy sector" },
    { name: "tronox", logo: "TRONOX", logoImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200&h=100&fit=crop&crop=center", description: "Chemical industry" },
    { name: "additional-partners", logo: "Additional Partners", logoImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&h=100&fit=crop&crop=center", description: "Various sectors" }
  ]

  const clientInfo = [
    {
      title: "NEOM Partnership",
      description: "Supporting the development of the world's most ambitious smart city project with comprehensive logistics and marine services."
    },
    {
      title: "Red Sea Global",
      description: "Providing integrated solutions for the world's most ambitious regenerative tourism destination project."
    },
    {
      title: "Saudi Aramco",
      description: "Delivering specialized marine operations and logistics services to support the world's largest oil company."
    },
    {
      title: "TRONOX Collaboration",
      description: "Supporting chemical industry operations with specialized logistics and supply chain management solutions."
    }
  ]

  return (
    <div ref={sectionRef} className="bg-gray-100 py-20 relative overflow-hidden section-bg-transition">
      {/* Enhanced background pattern with animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-gray-400 rotate-45 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 border border-gray-400 rotate-45 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-gray-400 rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 border border-gray-400 rotate-45 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Floating geometric shapes */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-brand-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4 font-heading animate-slide-in-down">
            Our <span>clients</span>
          </h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto"></div>
        </div>

        {/* Premium Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className={`group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl text-center transition-all duration-500 transform hover:-translate-y-2 hover-lift-3d hover-glow animate-bounce-in ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-4 h-16 flex items-center justify-center">
                <Image
                  src={client.logoImage}
                  alt={client.logo}
                  width={120}
                  height={60}
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </div>
              <div className="text-sm font-bold text-brand-dark group-hover:text-brand-primary transition-colors duration-300 mb-2">
                {client.logo}
              </div>
              <div className="text-xs text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {client.description}
              </div>
              {/* Bottom border effect */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-primary group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Premium Client Information Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {clientInfo.map((info, index) => (
            <div 
              key={index} 
              className={`text-center group hover-lift ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 4) * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors duration-300 relative">
                {info.title}
                {/* Underline effect */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all duration-300"></div>
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                {info.description}
              </p>
            </div>
          ))}
        </div>

        {/* Premium Pagination Dots */}
        <div className="flex justify-center space-x-2">
          {[1, 2, 3].map((dot, index) => (
            <div 
              key={dot} 
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer hover:scale-125 ${
                index === 0 
                  ? 'bg-brand-primary shadow-lg shadow-brand-primary/50' 
                  : 'bg-brand-dark/50 hover:bg-brand-primary hover:shadow-lg hover:shadow-brand-primary/50'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}


