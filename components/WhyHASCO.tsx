'use client'

import { useState, useEffect } from 'react'
import AnimatedCounter from './AnimatedCounter'

const differentiators = [
  {
    title: "19+ Years of Excellence",
    description: "Nearly two decades of proven expertise in integrated solutions",
    icon: "🏆",
    stat: "19+ Years"
  },
  {
    title: "Integrated Solutions",
    description: "Comprehensive services across multiple sectors under one roof",
    icon: "🔗",
    stat: "8 Divisions"
  },
  {
    title: "Vision 2030 Alignment",
    description: "Supporting Saudi Arabia's national transformation goals",
    icon: "🇸🇦",
    stat: "100% Aligned"
  },
  {
    title: "Qualified Experts",
    description: "Highly skilled professionals with industry certifications",
    icon: "👥",
    stat: "50+ Experts"
  },
  {
    title: "Sustainable Operations",
    description: "Commitment to environmental responsibility and sustainability",
    icon: "🌱",
    stat: "Eco-Friendly"
  },
  {
    title: "Innovation & Technology",
    description: "Cutting-edge technology and innovative solutions",
    icon: "💡",
    stat: "Tech-Forward"
  }
]

const servicePortfolio = [
  {
    title: "Marine & Shipping",
    description: "Comprehensive maritime services from port operations to vessel handling",
    services: ["Ship Agency", "Marine Operations", "Port Services"]
  },
  {
    title: "Logistics & Transportation",
    description: "End-to-end logistics solutions and supply chain management",
    services: ["Freight Forwarding", "Warehousing", "Distribution"]
  },
  {
    title: "Construction & Development",
    description: "Strategic property development and construction management",
    services: ["Property Development", "Construction", "Infrastructure"]
  },
  {
    title: "Hospitality & Entertainment",
    description: "Premium hospitality services and event management",
    services: ["Event Management", "Catering", "Hospitality"]
  }
]

export default function WhyHASCO() {
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

    const element = document.getElementById('why-hasco')
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
    <section id="why-hasco" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">
            Why <span className="text-brand-primary">HASCO?</span>
          </h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            With over 19 years of excellence in integrated supply chain and logistics solutions, we deliver unmatched value and expertise
          </p>
        </div>

        {/* Foundation of Excellence */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Foundation of Excellence</h3>
              <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Since 2005, HASCO Group has been at the forefront of integrated solutions in the Middle East. Our journey from a small marine services company to a comprehensive group of companies reflects our unwavering commitment to excellence, innovation, and client satisfaction. We have built our reputation on trust, reliability, and the ability to deliver complex projects that drive sustainable growth.
              </p>
            </div>
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Differentiators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="text-brand-primary font-semibold">
                  {item.stat}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Portfolio */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Service Portfolio</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicePortfolio.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.services.map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-6">Ready to Partner with HASCO?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who trust HASCO Group for their integrated solutions needs. Let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-brand-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-lg">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-primary transition-colors duration-300 text-lg">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <AnimatedCounter 
              end={19} 
              suffix="+" 
              className="text-3xl font-bold text-brand-primary mb-2"
              duration={2000}
            />
            <div className="text-gray-600">Years of Excellence</div>
          </div>
          <div className="text-center">
            <AnimatedCounter 
              end={500} 
              suffix="+" 
              className="text-3xl font-bold text-brand-primary mb-2"
              duration={2500}
            />
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <AnimatedCounter 
              end={100} 
              suffix="%" 
              className="text-3xl font-bold text-brand-primary mb-2"
              duration={1800}
            />
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-primary mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}

