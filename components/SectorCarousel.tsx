'use client'

import { useState, useEffect } from 'react'


export default function SectorCarousel() {
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


  return (
    <section 
      className="relative h-screen flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/hero.jpeg)'
      }}
    >
      {/* Premium background effects */}
      <div className="absolute inset-0">
        {/* Dark overlay for content readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        

        {/* Subtle mouse-following effect */}
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-white/5 to-white/5 rounded-full blur-3xl pointer-events-none transition-all duration-500 animate-gentle-pulse"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
            transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.02}px)`
          }}
        />
        
      </div>

      {/* Premium Content */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="w-full">
          <div className="flex items-start justify-start h-full pt-32 pl-6 sm:pl-8 lg:pl-12">
            {/* Main Content - Extreme Left Aligned */}
            <div className="flex flex-col justify-start space-y-8 text-left max-w-4xl">
              {/* Professional headline */}
              <div className="space-y-4">
                <h1 className="text-title-lg md:text-title-xl lg:text-title-xl font-light text-white leading-tight tracking-tight font-heading">
                  <span className="block font-extralight animate-slide-in-left stagger-1">
                    Diversified Strength.
                  </span>
                  <span className="block font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 animate-slide-in-right stagger-2">
                    Unified Vision.
                  </span>
                </h1>
              </div>
              
              {/* Elegant description */}
              <div className="max-w-2xl">
                <p className="text-body-md md:text-body-lg text-slate-300 leading-relaxed font-light font-body animate-slide-in-up stagger-3">
                  From marine expertise to logistics, construction, tourism, and beyond — HASCO delivers world-class solutions that power the Kingdom's growth and global ambitions.
                </p>
              </div>

              {/* Professional buttons */}
              <div className="flex flex-col sm:flex-row gap-6 animate-bounce-in stagger-4 justify-start">
                <button className="apple-btn bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 text-button-md font-medium font-heading hover:from-blue-700 hover:to-blue-800 rounded-sm shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300">
                  <span className="relative z-10 tracking-wide">Explore Our Sectors</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
