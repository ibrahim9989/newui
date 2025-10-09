'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOnDarkBackground, setIsOnDarkBackground] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      
      // Determine if we're on a dark or light background based on scroll position
      const heroHeight = window.innerHeight
      const isInHeroSection = window.scrollY < heroHeight * 0.8
      
      // Check if we're in dark or light blue background sections
      const darkSections = ['closing-cta', 'become-partner', 'ready-to-work', 'ready-to-work-about']
      const lightBlueSections = ['impact-section'] // Add more light blue section IDs as needed
      let isInDarkOrLightBlueSection = false
      
      // Check dark sections
      for (const sectionId of darkSections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const rect = section.getBoundingClientRect()
          const sectionTop = rect.top + window.scrollY
          const sectionBottom = sectionTop + rect.height
          const currentScroll = window.scrollY + window.innerHeight / 2 // Check middle of viewport
          
          if (currentScroll >= sectionTop && currentScroll <= sectionBottom) {
            isInDarkOrLightBlueSection = true
            break
          }
        }
      }
      
      // Check light blue sections
      if (!isInDarkOrLightBlueSection) {
        for (const sectionId of lightBlueSections) {
          const section = document.getElementById(sectionId)
          if (section) {
            const rect = section.getBoundingClientRect()
            const sectionTop = rect.top + window.scrollY
            const sectionBottom = sectionTop + rect.height
            const currentScroll = window.scrollY + window.innerHeight / 2 // Check middle of viewport
            
            if (currentScroll >= sectionTop && currentScroll <= sectionBottom) {
              isInDarkOrLightBlueSection = true
              break
            }
          }
        }
      }
      
      setIsOnDarkBackground(isInHeroSection || isInDarkOrLightBlueSection)
    }
    
    // Initial check
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-full ${
      isScrolled 
        ? isOnDarkBackground 
          ? 'bg-black/15 backdrop-blur-lg shadow-2xl border border-white/20' 
          : 'bg-white/10 backdrop-blur-lg shadow-lg border border-gray-200/30'
        : 'bg-white/3 backdrop-blur-md border border-white/10'
    }`}>

      {/* Main navigation */}
      <div className="w-full pl-0 pr-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center pl-8">
            <a href="/" className="flex items-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex items-center justify-center">
                <Image
                  src={isOnDarkBackground ? "/images/hasco-white-logo.png" : "/logo.png"}
                  alt="HASCO Group Logo"
                  width={160}
                  height={160}
                  className="object-contain"
                  priority
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/sectors', label: 'Sectors' },
            { href: '/clients', label: 'Clients' },
            { href: '/contact', label: 'Contact' },
            { href: '/careers', label: 'Careers' }
          ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`group relative transition-all duration-300 font-medium font-heading text-subtitle-md ${
                  isOnDarkBackground 
                    ? 'text-white hover:text-blue-300 drop-shadow-lg' 
                    : 'text-blue-600 hover:text-blue-800'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                <div className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                  isOnDarkBackground 
                    ? 'bg-blue-300' 
                    : 'bg-blue-600'
                }`}></div>
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden relative w-10 h-10 flex items-center justify-center transition-colors duration-300 ${
              isOnDarkBackground 
                ? 'text-white hover:text-blue-300 drop-shadow-lg' 
                : 'text-blue-600 hover:text-blue-800'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}></span>
              <span className={`absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`pt-4 pb-6 border-t mt-4 backdrop-blur-md rounded-b-full ${
            isOnDarkBackground 
              ? 'border-white/20 bg-black/15' 
              : 'border-gray-200/30 bg-white/10'
          }`}>
            <nav className="flex flex-col space-y-4">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/sectors', label: 'Sectors' },
                { href: '/clients', label: 'Clients' },
                { href: '/contact', label: 'Contact' },
                { href: '/careers', label: 'Careers' }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`transition-colors duration-300 font-medium font-heading text-subtitle-md py-2 border-l-2 border-transparent pl-4 ${
                    isOnDarkBackground 
                      ? 'text-white hover:text-blue-300 hover:border-blue-300 drop-shadow-lg' 
                      : 'text-blue-600 hover:text-blue-800 hover:border-blue-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              </nav>
          </div>
        </div>
      </div>
    </header>
  )
}