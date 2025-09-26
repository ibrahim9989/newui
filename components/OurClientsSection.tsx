'use client'

import { useState, useEffect, useRef } from 'react'

export default function OurClientsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
    { name: "amanda", logo: "AMANDA" },
    { name: "starco", logo: "STARCO" },
    { name: "audio", logo: "AUDIO" },
    { name: "web2", logo: "WEB2" }
  ]

  const clientInfo = [
    {
      title: "Aenean nec estib ulum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    },
    {
      title: "Morbi isl",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    },
    {
      title: "Curabitur consequat",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    },
    {
      title: "Nunc eleifend",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    }
  ]

  return (
    <section ref={sectionRef} className="bg-gray-100 py-20 relative overflow-hidden">
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
            className="absolute w-2 h-2 bg-brand-red/20 rounded-full animate-float"
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
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            Our clients
          </h2>
          <div className="w-24 h-1 bg-brand-red mx-auto"></div>
        </div>

        {/* Premium Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className={`group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl text-center transition-all duration-500 transform hover:-translate-y-2 hover-lift ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl font-bold text-brand-dark group-hover:text-brand-red transition-colors duration-300 relative">
                {client.logo}
                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-red/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </div>
              {/* Bottom border effect */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-red group-hover:w-full transition-all duration-300"></div>
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
              <h3 className="text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-red transition-colors duration-300 relative">
                {info.title}
                {/* Underline effect */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300"></div>
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
                  ? 'bg-brand-red shadow-lg shadow-red-500/50' 
                  : 'bg-brand-dark/50 hover:bg-brand-red hover:shadow-lg hover:shadow-red-500/50'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  )
}


