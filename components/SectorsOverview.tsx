'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const sectors = [
  {
    title: "Marine",
    description: "Advanced marine services and construction expertise",
    icon: "https://cdn-icons-png.flaticon.com/512/7075/7075834.png",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Logistics",
    description: "Integrated supply chain, freight, and transportation solutions",
    icon: "https://cdn-icons-png.flaticon.com/512/819/819438.png",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Construction",
    description: "General contracting for landmark projects",
    icon: "https://cdn-icons-png.flaticon.com/512/3752/3752632.png",
    color: "from-orange-500 to-orange-600"
  },
  {
    title: "Shipping",
    description: "Reliable shipping services across industries",
    icon: "https://static.thenounproject.com/png/165134-200.png",
    color: "from-blue-600 to-blue-700"
  },
  {
    title: "Tourism & Events",
    description: "Experiences that inspire and entertain",
    icon: "https://cdn-icons-png.freepik.com/512/2560/2560124.png",
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Hospitality",
    description: "Catering, diving, and guest services with excellence",
    icon: "https://cdn-icons-png.freepik.com/256/423/423890.png?semt=ais_white_label",
    color: "from-pink-500 to-pink-600"
  },
  {
    title: "Consultancy",
    description: "Training and advisory that elevate organizations",
    icon: "https://cdn-icons-png.flaticon.com/512/1478/1478254.png",
    color: "from-gray-500 to-gray-600"
  }
]

export default function SectorsOverview() {
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

    const element = document.getElementById('sectors-overview')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="sectors-overview" className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 border border-gray-300 rotate-45 animate-pulse" style={{ animationDuration: '6s' }}></div>
          <div className="absolute top-32 right-20 w-16 h-16 border border-gray-300 rotate-12 animate-pulse" style={{ animationDuration: '4s', animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-32 w-24 h-24 border border-gray-300 rotate-45 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50/50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-title-md md:text-title-lg font-light text-gray-900 leading-tight font-heading mb-6">
            <span className="font-extralight">Sectors at a </span>
            <span className="font-medium text-blue-600">Glance</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Enhanced hover overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Icon background */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gentle-pulse"></div>
              
              <div className="relative z-10">
                {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500 img-gentle-hover">
                {sector.icon.startsWith('http') ? (
                  <Image
                    src={sector.icon}
                    alt={sector.title}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain"
                  />
                ) : (
                  sector.icon
                )}
              </div>
                
                {/* Title */}
                <h3 className="text-title-sm font-semibold text-gray-900 mb-4 font-heading group-hover:text-blue-600 transition-colors duration-300">
                  {sector.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-body-sm leading-relaxed font-body mb-6">
                  {sector.description}
                </p>
                
                {/* Enhanced CTA */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex items-center text-blue-600 text-body-sm font-medium font-heading">
                    <span>Discover More</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="apple-btn bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 text-button-md font-medium font-heading hover:from-blue-700 hover:to-blue-800 rounded-sm shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300">
            <span className="relative z-10 tracking-wide">Discover Our Expertise</span>
          </button>
        </div>
      </div>
    </section>
  )
}
