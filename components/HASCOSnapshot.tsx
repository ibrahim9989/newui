'use client'

import { useState, useEffect } from 'react'

export default function HASCOSnapshot() {
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

    const element = document.getElementById('hasco-snapshot')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="hasco-snapshot" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
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
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Heading */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-title-md md:text-title-lg font-light text-gray-900 leading-tight font-heading mb-4">
            <span className="font-extralight">About </span>
            <span className="font-medium text-blue-600">HASCO</span>
          </h2>
          <div className={`w-24 h-1 bg-blue-600 mx-auto rounded-full transition-all duration-1000 delay-300 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Company Introduction */}
          <div className="space-y-8 text-center">
            <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="space-y-4">
                <p className="text-body-md text-gray-700 leading-relaxed font-body">
                  HASCO has grown from a focused logistics provider into a diversified holding group. Based in the Kingdom of Saudi Arabia, we operate across Marine, Logistics, Construction, Shipping, Tourism, Hospitality, and Consultancy, supporting the nation's transformation under Vision 2030.
                </p>
              </div>
            </div>

            <div className={`pt-4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <button className="apple-btn bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 text-button-md font-medium font-heading hover:from-blue-700 hover:to-blue-800 rounded-sm shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300">
                <span className="relative z-10 tracking-wide">Learn More About Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
