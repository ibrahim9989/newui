'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

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

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const sectors = [
    {
      title: "Marine Operations",
      description: "Comprehensive marine services including consultancy, operations, construction, and professional diving services.",
      icon: "/images/cruise.png" // Marine operations icon
    },
    {
      title: "Logistics & Supply Chain",
      description: "Integrated logistics solutions with freight forwarding, transportation, and supply chain management.",
      icon: "/images/truck.png" // Placeholder for logistics icon
    },
    {
      title: "Construction",
      description: "General construction projects with focus on safety, quality, and sustainability.",
      icon: "/images/construction-site.png" // Placeholder for construction icon
    },
    {
      title: "Hospitality & Events",
      description: "High-quality hospitality, catering, and event management services.",
      icon: "/images/reception.png" // Placeholder for hospitality icon
    },
    {
      title: "Tourism",
      description: "Tourism development and management services for the Kingdom's growing tourism sector.",
      icon: "/images/flight.png" // Placeholder for tourism icon
    },
    {
      title: "Consultancy",
      description: "Professional consultancy services across various sectors and industries.",
      icon: "/images/talk.png" // Placeholder for consultancy icon
    }
  ]

  return (
    <section id="sectors-overview" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-title-md md:text-title-lg font-light text-gray-900 leading-tight font-heading mb-4">
            <span className="font-extralight">Sectors at a </span>
            <span className="font-extralight text-gray-900">Glance</span>
          </h2>
          <div className={`w-24 h-1 bg-blue-600 mx-auto rounded-full transition-all duration-1000 delay-300 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200 relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative z-10">
                {/* Icon - Image or Placeholder */}
                <div className="w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-500">
                  {sector.icon.startsWith('/images/') ? (
                    <Image
                      src={sector.icon}
                      alt={sector.title}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                      <span className="text-gray-400 text-sm font-medium">
                        {sector.icon}
                      </span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-title-sm font-semibold text-gray-900 mb-4 font-heading group-hover:text-blue-600 transition-colors duration-300">
                  {sector.title}
                </h3>
                
                <p className="text-gray-600 text-body-sm leading-relaxed font-body mb-6">
                  {sector.description}
                </p>
                
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

        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 text-button-lg font-medium font-heading hover:from-blue-700 hover:to-blue-800 rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300">
            Explore All Sectors
          </button>
        </div>
      </div>
    </section>
  )
}
