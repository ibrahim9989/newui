'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import ConditionalFooter from '@/components/ConditionalFooter'
import AdvancedParticleSystem from '@/components/AdvancedParticleSystem'
import CustomCursor from '@/components/CustomCursor'
import SectionTransition from '@/components/SectionTransition'

export default function CareersPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)
  const [activeTab, setActiveTab] = useState('openings')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    education: '',
    coverLetter: '',
    resume: null as File | null,
    portfolio: null as File | null
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isClient])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('careers-hero')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target
    if (files && files[0]) {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        education: '',
        coverLetter: '',
        resume: null,
        portfolio: null
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const jobOpenings = [
    {
      id: 1,
      title: "Marine Operations Manager",
      department: "Marine Operations",
      location: "Dammam, Saudi Arabia",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead marine operations team and oversee port activities, vessel handling, and marine consultancy services.",
      requirements: [
        "Bachelor's degree in Marine Engineering or related field",
        "5+ years experience in marine operations",
        "Strong leadership and communication skills",
        "Knowledge of maritime regulations and safety standards"
      ]
    },
    {
      id: 2,
      title: "Logistics Coordinator",
      department: "Logistics & Supply Chain",
      location: "Dammam, Saudi Arabia",
      type: "Full-time",
      experience: "3+ years",
      description: "Coordinate logistics operations, manage freight forwarding, and ensure efficient supply chain management.",
      requirements: [
        "Bachelor's degree in Logistics or Supply Chain Management",
        "3+ years experience in logistics coordination",
        "Proficiency in logistics software and systems",
        "Strong organizational and problem-solving skills"
      ]
    },
    {
      id: 3,
      title: "Construction Project Manager",
      department: "Construction",
      location: "Riyadh, Saudi Arabia",
      type: "Full-time",
      experience: "7+ years",
      description: "Manage construction projects from planning to completion, ensuring quality, safety, and timely delivery.",
      requirements: [
        "Bachelor's degree in Civil Engineering or Construction Management",
        "7+ years experience in construction project management",
        "PMP certification preferred",
        "Strong project management and team leadership skills"
      ]
    },
    {
      id: 4,
      title: "IT Solutions Architect",
      department: "Technology Solutions",
      location: "Dammam, Saudi Arabia",
      type: "Full-time",
      experience: "6+ years",
      description: "Design and implement technology solutions for digital transformation and system integration projects.",
      requirements: [
        "Bachelor's degree in Computer Science or Information Technology",
        "6+ years experience in IT architecture and system design",
        "Certification in cloud platforms (AWS, Azure, GCP)",
        "Strong technical and analytical skills"
      ]
    },
    {
      id: 5,
      title: "Environmental Consultant",
      department: "Environmental Services",
      location: "Jeddah, Saudi Arabia",
      type: "Full-time",
      experience: "4+ years",
      description: "Provide environmental consulting services and develop sustainable solutions for business operations.",
      requirements: [
        "Bachelor's degree in Environmental Science or Engineering",
        "4+ years experience in environmental consulting",
        "Knowledge of environmental regulations and standards",
        "Strong analytical and reporting skills"
      ]
    },
    {
      id: 6,
      title: "Business Development Manager",
      department: "Business Development",
      location: "Dammam, Saudi Arabia",
      type: "Full-time",
      experience: "5+ years",
      description: "Develop new business opportunities, build client relationships, and drive company growth.",
      requirements: [
        "Bachelor's degree in Business Administration or related field",
        "5+ years experience in business development",
        "Strong networking and negotiation skills",
        "Experience in B2B sales and client relationship management"
      ]
    }
  ]

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Competitive Salary",
      description: "Attractive compensation packages with performance bonuses"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and your family"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Professional Development",
      description: "Training programs and career advancement opportunities"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Work-Life Balance",
      description: "Flexible working hours and generous vacation time"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <AdvancedParticleSystem />
      <CustomCursor />
      <Header />
      
      {/* Hero Section */}
      <SectionTransition 
        transitionType="reveal" 
        addGradientOverlay={true}
      >
        <div id="careers-hero" className="pt-48 pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Premium background effects - matching homepage */}
          <div className="absolute inset-0">
            {/* Subtle overlay for depth without color */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            
            {/* Animated geometric patterns */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rotate-12 animate-pulse" style={{ animationDuration: '3s' }}></div>
              <div className="absolute top-1/2 left-10 w-16 h-16 border border-white/20 rounded-full animate-bounce" style={{ animationDuration: '4s' }}></div>
            </div>
            
            {/* Advanced floating particles with mouse interaction */}
            <div className="absolute inset-0">
              {Array.from({ length: 30 }).map((_, i) => {
                if (!isClient) return null
                return (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${2 + Math.random() * 2}s`,
                      transform: `translate(${(mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) * (i % 3) * 0.01}px, ${(mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) * (i % 3) * 0.01}px)`,
                      transition: 'transform 0.1s ease-out'
                    }}
                  />
                )
              })}
            </div>
            
            {/* Mouse-following glow effect */}
            <div className="absolute w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none transition-all duration-300"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-light text-white mb-6 font-heading apple-fade-in">
                  <span className="font-extralight">Join Our </span><span className="font-extralight text-white">Team</span>
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mb-8 apple-scale-in apple-stagger-1"></div>
                <p className="text-subtitle-md md:text-subtitle-lg text-white max-w-4xl mx-auto font-body leading-relaxed apple-slide-up apple-stagger-2">
                  Be part of a dynamic team that's shaping the future of integrated solutions. 
                  <span className="text-brand-secondary font-extralight"> Explore exciting career opportunities with HASCO Group</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionTransition>

      {/* Tabs Section */}
      <SectionTransition 
        transitionType="slide-up" 
        delay={200}
        addDivider={false}
        addGradientOverlay={true}
      >
        <div className="py-24 bg-white relative overflow-hidden">
          {/* Enhanced Background Effects - matching homepage */}
          <div className="absolute inset-0">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-20 left-20 w-24 h-24 border border-gray-300 rotate-45 animate-pulse" style={{ animationDuration: '6s' }}></div>
              <div className="absolute bottom-20 right-20 w-20 h-20 border border-gray-300 rotate-12 animate-pulse" style={{ animationDuration: '4s', animationDelay: '2s' }}></div>
            </div>
            
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/20 to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-200 rounded-xl p-1">
                <button
                  onClick={() => setActiveTab('openings')}
                  className={`apple-btn px-8 py-3 rounded-xl text-button-md font-medium font-heading transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                    activeTab === 'openings'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 hover:shadow-blue-500/25'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Job Openings
                </button>
                <button
                  onClick={() => setActiveTab('apply')}
                  className={`apple-btn px-8 py-3 rounded-xl text-button-md font-medium font-heading transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                    activeTab === 'apply'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 hover:shadow-blue-500/25'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Apply Now
                </button>
                <button
                  onClick={() => setActiveTab('benefits')}
                  className={`apple-btn px-8 py-3 rounded-xl text-button-md font-medium font-heading transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                    activeTab === 'benefits'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 hover:shadow-blue-500/25'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Benefits
                </button>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'openings' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-title-sm font-light text-gray-900 mb-4 font-heading apple-fade-in"><span className="font-extralight">Current </span><span className="font-extralight text-gray-900">Openings</span></h2>
                  <p className="text-subtitle-md md:text-subtitle-lg text-gray-600 max-w-3xl mx-auto font-body apple-slide-up apple-stagger-1">
                    Discover exciting career opportunities across our various departments
                  </p>
                </div>

                <div className="grid gap-8">
                  {jobOpenings.map((job) => (
                    <div key={job.id} className="apple-card bg-white rounded-2xl p-8 hover:bg-gray-50 transition-colors duration-300 border border-gray-200 shadow-lg apple-hover-lift apple-scale-in" style={{ animationDelay: `${job.id * 0.1}s` }}>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div>
                          <h3 className="text-subtitle-sm font-bold text-gray-900 mb-2 font-heading">{job.title}</h3>
                          <div className="flex flex-wrap gap-4 text-body-sm text-gray-600">
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                              {job.department}
                            </span>
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              </svg>
                              {job.location}
                            </span>
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {job.type}
                            </span>
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                              </svg>
                              {job.experience}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => setActiveTab('apply')}
                          className="apple-btn mt-4 lg:mt-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl text-button-md font-medium font-heading hover:from-blue-700 hover:to-blue-800 hover:shadow-blue-500/25 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          Apply Now
                        </button>
                      </div>
                      <p className="text-body-sm text-gray-600 mb-4 font-body">{job.description}</p>
                      <div>
                        <h4 className="text-subtitle-sm font-semibold text-gray-900 mb-3 font-heading">Requirements:</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start text-body-sm text-gray-600">
                              <span className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'apply' && (
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-title-sm font-light text-gray-900 mb-4 font-heading apple-fade-in"><span className="font-extralight">Apply for a </span><span className="font-extralight text-gray-900">Position</span></h2>
                  <p className="text-subtitle-md md:text-subtitle-lg text-gray-600 font-body apple-slide-up apple-stagger-1">
                    Fill out the form below and we'll get back to you soon
                  </p>
                </div>

                <div className="apple-card bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200 apple-hover-lift apple-scale-in">
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                      <p className="text-green-400 font-semibold">Thank you! Your application has been submitted successfully. We'll review it and get back to you soon.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                      <p className="text-red-400 font-semibold">Sorry, there was an error submitting your application. Please try again.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-body-sm font-semibold text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors duration-300"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-body-sm font-semibold text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors duration-300"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-body-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors duration-300"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-body-sm font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors duration-300"
                          placeholder="+966 XX XXX XXXX"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="position" className="block text-body-sm font-semibold text-gray-700 mb-2">
                          Position Applied For *
                        </label>
                        <select
                          id="position"
                          name="position"
                          value={formData.position}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors duration-300"
                        >
                          <option value="">Select a position</option>
                          {jobOpenings.map((job) => (
                            <option key={job.id} value={job.title}>{job.title}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="experience" className="block text-body-sm font-semibold text-gray-700 mb-2">
                          Years of Experience *
                        </label>
                        <select
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors duration-300"
                        >
                          <option value="">Select experience level</option>
                          <option value="0-1">0-1 years</option>
                          <option value="2-3">2-3 years</option>
                          <option value="4-5">4-5 years</option>
                          <option value="6-10">6-10 years</option>
                          <option value="10+">10+ years</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="education" className="block text-body-sm font-semibold text-gray-700 mb-2">
                        Education *
                      </label>
                      <input
                        type="text"
                        id="education"
                        name="education"
                        value={formData.education}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors duration-300"
                        placeholder="e.g., Bachelor's in Engineering, Master's in Business Administration"
                      />
                    </div>

                    <div>
                      <label htmlFor="coverLetter" className="block text-body-sm font-semibold text-gray-700 mb-2">
                        Cover Letter *
                      </label>
                      <textarea
                        id="coverLetter"
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors duration-300 resize-none"
                        placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="resume" className="block text-body-sm font-semibold text-gray-700 mb-2">
                          Resume/CV *
                        </label>
                        <input
                          type="file"
                          id="resume"
                          name="resume"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx"
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-brand-primary file:text-white hover:file:bg-brand-secondary"
                        />
                        <p className="text-body-xs text-gray-400 mt-1">PDF, DOC, or DOCX files only (Max 5MB)</p>
                      </div>
                      <div>
                        <label htmlFor="portfolio" className="block text-body-sm font-semibold text-gray-700 mb-2">
                          Portfolio (Optional)
                        </label>
                        <input
                          type="file"
                          id="portfolio"
                          name="portfolio"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx,.zip"
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-brand-primary file:text-white hover:file:bg-brand-secondary"
                        />
                        <p className="text-body-xs text-gray-400 mt-1">PDF, DOC, DOCX, or ZIP files only (Max 10MB)</p>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="apple-btn w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-xl text-button-md font-medium font-heading hover:from-blue-700 hover:to-blue-800 hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Submitting Application...
                        </div>
                      ) : (
                        'Submit Application'
                      )}
                    </button>
                  </form>
                </div>
              </div>
            )}

            {activeTab === 'benefits' && (
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-title-sm font-light text-gray-900 mb-4 font-heading apple-fade-in"><span className="font-extralight">Why Work With </span><span className="font-extralight text-gray-900">Us?</span></h2>
                  <p className="text-subtitle-md md:text-subtitle-lg text-gray-600 font-body apple-slide-up apple-stagger-1">
                    We offer comprehensive benefits and a supportive work environment
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="apple-card bg-white rounded-2xl p-6 text-center hover:bg-gray-50 transition-colors duration-300 border border-gray-200 shadow-lg apple-hover-lift apple-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                        {benefit.icon}
                      </div>
                      <h3 className="text-subtitle-sm font-semibold text-gray-900 mb-3 font-heading">{benefit.title}</h3>
                      <p className="text-body-sm text-gray-600 font-body">{benefit.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-16 bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <h3 className="text-subtitle-sm font-bold text-gray-900 mb-6 font-heading">Additional Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-3">
                      <li className="flex items-center text-body-sm text-gray-600">
                        <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                        Annual performance bonuses
                      </li>
                      <li className="flex items-center text-body-sm text-gray-600">
                        <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                        Transportation allowance
                      </li>
                      <li className="flex items-center text-body-sm text-gray-600">
                        <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                        Meal vouchers
                      </li>
                      <li className="flex items-center text-body-sm text-gray-600">
                        <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                        Employee recognition programs
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-center text-body-sm text-gray-600">
                        <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                        Flexible working arrangements
                      </li>
                      <li className="flex items-center text-body-sm text-gray-600">
                        <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                        Team building activities
                      </li>
                      <li className="flex items-center text-body-sm text-gray-600">
                        <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                        Modern office facilities
                      </li>
                      <li className="flex items-center text-body-sm text-gray-600">
                        <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                        Career advancement opportunities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </SectionTransition>

      <ConditionalFooter />
    </main>
  )
}
