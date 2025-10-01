'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-2xl border-b border-gray-200' 
        : 'bg-white/90 backdrop-blur-md border-b border-gray-100'
    }`}>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="HASCO Group Logo"
                  width={96}
                  height={96}
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
                className="group relative text-gray-700 hover:text-brand-primary transition-all duration-500 font-medium font-heading hover-lift-3d"
              >
                <span className="relative z-10 group-hover:animate-bounce-in">{item.label}</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary group-hover:w-full transition-all duration-500"></div>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-brand-primary/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2 text-gray-600 hover:text-brand-primary transition-colors duration-300 group">
                <svg className="w-4 h-4 fill-current group-hover:text-brand-primary transition-colors duration-300" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>Dammam, Saudi Arabia</span>
              </div>
              <div className="flex items-center space-x-2 text-brand-primary hover:text-gray-700 transition-colors duration-300 group">
                <svg className="w-4 h-4 fill-current group-hover:text-gray-700 transition-colors duration-300" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>+966 13 123 4567</span>
              </div>
            </div>
            
            <button className="apple-btn bg-brand-primary text-white px-6 py-2.5 rounded-full font-medium font-heading hover:bg-brand-secondary transition-colors duration-300">
              <span className="relative z-10">Get Quote</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-gray-700 hover:text-brand-primary transition-colors duration-300"
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
          <div className="pt-4 pb-6 border-t border-gray-200 mt-4">
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
                  className="text-gray-700 hover:text-brand-primary transition-colors duration-300 font-medium font-heading py-2 border-l-2 border-transparent hover:border-brand-primary pl-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2 text-gray-600">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>Dammam, Saudi Arabia</span>
                </div>
                <div className="flex items-center space-x-2 text-brand-primary">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span>+966 13 123 4567</span>
                </div>
              </div>
              
              <button className="w-full mt-4 bg-brand-primary text-white px-6 py-3 rounded-full font-medium font-heading hover:bg-brand-secondary transition-colors duration-300">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}