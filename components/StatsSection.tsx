'use client'

import { useState, useEffect } from 'react'
import AnimatedCounter from './AnimatedCounter'

export default function StatsSection() {
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

    const element = document.getElementById('stats-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: 20, suffix: '+', label: 'Years of Excellence' },
    { number: 7, suffix: '+', label: 'Core Sectors' },
    { number: 100, suffix: '+', label: 'Projects Delivered' }
  ]

  return (
    <section 
      id="stats-section" 
      className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-600/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-blue-400 rotate-12 animate-pulse" style={{ animationDuration: '4s' }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group text-center space-y-6 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105"
            >
              <div className="text-6xl md:text-7xl font-bold text-blue-400 font-heading group-hover:text-blue-300 transition-colors duration-300 flex items-center justify-center">
                {isVisible && (
                  <AnimatedCounter 
                    end={stat.number} 
                    duration={2500} 
                    delay={index * 300}
                    suffix={stat.suffix}
                    className="text-6xl md:text-7xl"
                  />
                )}
                {!isVisible && (
                  <span className="text-6xl md:text-7xl">0{stat.suffix}</span>
                )}
              </div>
              <p className="text-body-lg text-gray-300 font-body group-hover:text-white transition-colors duration-300">
                {stat.label}
              </p>
              
              {/* Decorative line */}
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
