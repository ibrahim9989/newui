'use client'

import { useState } from 'react'

export default function FeaturedServicesSection() {
  const [activeTab, setActiveTab] = useState('NETWORKING')

  const tabs = ['NETWORKING', 'DEVELOPMENT', 'HARDWARE', 'ALL SERVICES']

  const services = [
    {
      id: 1,
      title: "BUSINESS STRATEGY",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
      description: "Professional business consulting and strategy development"
    },
    {
      id: 2,
      title: "MOBILE SOLUTIONS",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
      description: "Advanced mobile technology and smartphone solutions"
    },
    {
      id: 3,
      title: "DIGITAL WORKSPACE",
      image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=400&h=300&fit=crop",
      description: "Modern digital workspace setup and optimization"
    },
    {
      id: 4,
      title: "CLOUD COMPUTING",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      description: "Scalable cloud computing and storage solutions"
    },
    {
      id: 5,
      title: "PRODUCTIVITY",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      description: "Enterprise productivity tools and solutions"
    },
    {
      id: 6,
      title: "REMOTE CLIENTS",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      description: "Remote client management and support systems"
    }
  ]

  return (
    <section className="bg-gradient-to-br from-brand-dark to-brand-secondary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured services
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        {/* Premium Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`group relative px-6 py-3 text-sm font-semibold transition-all duration-300 overflow-hidden rounded-lg animate-fade-in-up ${
                activeTab === tab
                  ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/25'
                  : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-dark hover:shadow-lg hover:shadow-white/25'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        {/* Premium Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={service.id} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Premium overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-brand-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </div>
              <div className="p-6 relative">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-brand-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                {/* Premium border effect */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-primary group-hover:w-full transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Pagination Dots */}
        <div className="flex justify-center space-x-2">
          {[1, 2, 3].map((dot, index) => (
            <div 
              key={dot} 
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer animate-fade-in-up ${
                index === 0 
                  ? 'bg-white shadow-lg shadow-white/50' 
                  : 'bg-white/50 hover:bg-white hover:shadow-lg hover:shadow-white/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  )
}
