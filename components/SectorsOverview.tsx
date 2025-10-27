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
      icon: "/images/cruise.png",
      backgroundImage: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "Logistics & Supply Chain",
      description: "Integrated logistics solutions with freight forwarding, transportation, and supply chain management.",
      icon: "/images/truck.png",
      backgroundImage: "https://s44783.pcdn.co/in/wp-content/uploads/sites/3/2024/04/logistics-management-768x435.png.webp"
    },
    {
      title: "Construction",
      description: "General construction projects with focus on safety, quality, and sustainability.",
      icon: "/images/construction-site.png",
      backgroundImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "Hospitality & Events",
      description: "High-quality hospitality, catering, and event management services.",
      icon: "/images/reception.png",
      backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrnsHpy5UFIK3dAhpdqCNJ4SZ-njMterDo9A&s"
    },
    {
      title: "Tourism",
      description: "Tourism development and management services for the Kingdom's growing tourism sector.",
      icon: "/images/flight.png",
      backgroundImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "Consultancy",
      description: "Professional consultancy services across various sectors and industries.",
      icon: "/images/talk.png",
      backgroundImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop&crop=center"
    }
  ]

  return (
    <section id="sectors-overview" className="py-20 bg-white relative overflow-hidden">
      <div className="w-full">
        <div className={`text-center mb-16 px-6 sm:px-8 lg:px-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-title-lg md:text-title-xl font-light text-gray-900 leading-tight font-heading mb-4">
            <span className="font-extralight">Sectors at a </span>
            <span className="font-extralight text-gray-900">Glance</span>
          </h2>
          <div className={`w-24 h-1 bg-brand-primary mx-auto rounded-full transition-all duration-1000 delay-300 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 px-4 sm:px-6 lg:px-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className={`group relative bg-white p-6 lg:p-8 rounded-xl lg:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-[#66AADD] overflow-hidden min-h-[280px] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${
                sector.title === "Tourism" 
                  ? "opacity-55 group-hover:opacity-65" 
                  : "opacity-40 group-hover:opacity-50"
              }`}>
                <Image
                  src={sector.backgroundImage}
                  alt={sector.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 transition-all duration-500 ${
                sector.title === "Tourism"
                  ? "bg-gradient-to-br from-white/60 via-white/50 to-white/40 group-hover:from-white/65 group-hover:via-white/55 group-hover:to-white/45"
                  : "bg-gradient-to-br from-white/70 via-white/60 to-white/50 group-hover:from-white/75 group-hover:via-white/65 group-hover:to-white/55"
              }`}></div>
              
              <div className="relative z-10">
                {/* Icon - Image or Placeholder */}
                <div className="w-14 h-14 lg:w-16 lg:h-16 mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-500">
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
                
                <h3 className="text-lg lg:text-title-sm font-semibold text-gray-900 mb-3 lg:mb-4 font-heading group-hover:text-brand-primary transition-colors duration-300">
                  {sector.title}
                </h3>
                
                <p className="text-gray-600 text-sm lg:text-body-md leading-relaxed font-body mb-4 lg:mb-6">
                  {sector.description}
                </p>
                
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex items-center text-brand-primary text-sm lg:text-body-sm font-medium font-heading">
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

        <div className={`text-center mt-16 px-6 sm:px-8 lg:px-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="bg-brand-primary text-white px-8 py-4 text-button-lg font-medium font-heading hover:bg-brand-secondary rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Explore All Sectors
          </button>
        </div>
      </div>
    </section>
  )
}
