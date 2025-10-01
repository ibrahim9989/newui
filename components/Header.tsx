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
          </div>
        </div>
      </div>
    </header>
  )
}