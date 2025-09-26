'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-md text-white border-b border-white/10">
      {/* Top bar with company boost info */}
      <div className="bg-black/80 backdrop-blur-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="text-gray-300 animate-fade-in-up">
              Communications Company Boost
            </div>
            <div className="flex space-x-4">
              <button className="group relative bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                <span className="relative z-10">Add to Cart</span>
              </button>
              <button className="group relative bg-white text-black px-3 py-1 rounded text-xs hover:bg-gray-100 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                <span className="relative z-10">Get Unlimited Downloads</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main header with glassmorphism */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          {/* Premium Logo */}
          <div className="flex items-center space-x-3 animate-fade-in-up">
            <div className="relative w-12 h-12 hover:scale-110 transition-all duration-300">
              <Image
                src="/logo.svg"
                alt="HASCO Logo"
                width={48}
                height={48}
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl font-semibold gradient-text font-primary">HASCO</span>
          </div>

          {/* Premium Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="group hover:text-brand-primary transition-all duration-300 relative">
              Home
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-brand-primary"></div>
              <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#about" className="group hover:text-brand-primary transition-all duration-300 relative">
              About
              <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#services" className="group hover:text-brand-primary transition-all duration-300 relative">
              Services
              <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#gallery" className="group hover:text-brand-primary transition-all duration-300 relative">
              Gallery
              <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#blog" className="group hover:text-brand-primary transition-all duration-300 relative">
              Blog
              <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#contacts" className="group hover:text-brand-primary transition-all duration-300 relative">
              Contacts
              <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all duration-300"></div>
            </a>
          </nav>

          {/* Premium Contact info and social icons */}
          <div className="hidden lg:flex flex-col items-end space-y-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-sm text-gray-300 flex items-center space-x-2 group">
              <svg className="w-4 h-4 fill-current group-hover:text-brand-primary transition-colors duration-300" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span className="group-hover:text-white transition-colors duration-300">28 Jackson Blvd Ste 1020 Chicago IL 60604-2343</span>
            </div>
            <div className="text-sm text-brand-primary flex items-center space-x-2 group">
              <svg className="w-4 h-4 fill-current group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span className="group-hover:text-white transition-colors duration-300">+1-888-555-0000</span>
            </div>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-6 h-6 bg-gray-600 rounded-full hover:bg-brand-primary transition-all duration-300 cursor-pointer transform hover:scale-110 hover:shadow-lg hover:shadow-brand-primary/25"></div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-brand-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" className="hover:text-brand-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#services" className="hover:text-brand-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#gallery" className="hover:text-brand-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Gallery</a>
              <a href="#blog" className="hover:text-brand-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Blog</a>
              <a href="#contacts" className="hover:text-brand-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contacts</a>
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-600">
              <div className="text-sm text-gray-300 mb-2">
                <div>28 Jurkisa Blvd, 182th Chicago, IL 60608-2349</div>
                <div>0000000000</div>
              </div>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-6 h-6 bg-gray-600 rounded-full hover:bg-brand-primary transition-colors cursor-pointer"></div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
