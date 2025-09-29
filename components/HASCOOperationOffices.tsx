'use client'

import { useState, useEffect } from 'react'

const offices = [
  {
    city: "Dammam",
    type: "Head Office",
    description: "Main headquarters and operations center",
    coordinates: { x: 45, y: 60 }
  },
  {
    city: "Jeddah",
    type: "Regional Office",
    description: "Western region operations and marine services",
    coordinates: { x: 20, y: 40 }
  },
  {
    city: "Riyadh",
    type: "Business Office",
    description: "Corporate services and client relations",
    coordinates: { x: 35, y: 35 }
  },
  {
    city: "Al Khobar",
    type: "Marine Office",
    description: "Marine operations and diving services",
    coordinates: { x: 50, y: 65 }
  },
  {
    city: "Yanbu",
    type: "Industrial Office",
    description: "Industrial logistics and supply chain",
    coordinates: { x: 15, y: 25 }
  },
  {
    city: "Jubail",
    type: "Port Office",
    description: "Port operations and shipping services",
    coordinates: { x: 48, y: 58 }
  }
]

export default function HASCOOperationOffices() {
  const [activeOffice, setActiveOffice] = useState(0)
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

    const element = document.getElementById('operation-offices')
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
    <section id="operation-offices" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            HASCO <span className="text-brand-primary">Operation Offices</span>
          </h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic presence across Saudi Arabia, ensuring comprehensive coverage and local expertise in every region
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Interactive Map */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Geographic Presence</h3>
              
              {/* Map Container */}
              <div className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 h-96 border-2 border-gray-200">
                {/* Saudi Arabia Outline (Simplified) */}
                <div className="absolute inset-4 border-2 border-gray-400 rounded-lg bg-gradient-to-br from-sand-100 to-sand-200 relative overflow-hidden">
                  {/* Office Markers */}
                  {offices.map((office, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveOffice(index)}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                        activeOffice === index 
                          ? 'scale-125 z-10' 
                          : 'hover:scale-110'
                      }`}
                      style={{
                        left: `${office.coordinates.x}%`,
                        top: `${office.coordinates.y}%`
                      }}
                    >
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        activeOffice === index
                          ? 'bg-brand-primary border-white shadow-lg'
                          : 'bg-white border-brand-primary hover:bg-brand-primary/20'
                      } transition-all duration-300`}></div>
                      
                      {/* Office Label */}
                      <div className={`absolute top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-semibold px-2 py-1 rounded ${
                        activeOffice === index
                          ? 'bg-brand-primary text-white'
                          : 'bg-white text-gray-700 shadow-sm'
                      } transition-all duration-300`}>
                        {office.city}
                      </div>
                    </button>
                  ))}

                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
                  <div className="absolute top-8 right-8 w-1 h-1 bg-green-400 rounded-full opacity-60"></div>
                  <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-60"></div>
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-red-400 rounded-full opacity-60"></div>
                </div>

                {/* Map Legend */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-xs">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-3 h-3 bg-brand-primary rounded-full"></div>
                    <span>Active Office</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-white border border-brand-primary rounded-full"></div>
                    <span>Regional Office</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Office Details */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Information</h3>
              
              {/* Active Office Details */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {offices[activeOffice].city.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">
                      {offices[activeOffice].city}
                    </h4>
                    <p className="text-brand-primary font-semibold">
                      {offices[activeOffice].type}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {offices[activeOffice].description}
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Services Available:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Local operations support</li>
                    <li>• Client relationship management</li>
                    <li>• Regional logistics coordination</li>
                    <li>• Emergency response services</li>
                  </ul>
                </div>
              </div>

              {/* Office Navigation */}
              <div className="flex flex-wrap gap-2">
                {offices.map((office, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveOffice(index)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                      activeOffice === index
                        ? 'bg-brand-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {office.city}
                  </button>
                ))}
              </div>
            </div>

            {/* Statistics */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-2xl font-bold text-brand-primary mb-1">6</div>
                <div className="text-sm text-gray-600">Office Locations</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-2xl font-bold text-brand-primary mb-1">100%</div>
                <div className="text-sm text-gray-600">Saudi Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

