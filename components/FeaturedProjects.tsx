'use client'

import { useState, useEffect } from 'react'

const projects = [
  {
    title: "NEOM Marine Infrastructure",
    description: "Marine construction support for NEOM development",
    image: "https://eu-images.contentstack.com/v3/assets/bltdcfe6aab5515629e/blt912afb408dabb887/668e954f01ef8505e0e12169/Port_20of_20NEOM_20development_20area_20in_20focus_20at_20Oxagon34.jpg?disable=upscale&width=1200&height=630&fit=crop",
    sector: "Marine Operations",
    impact: "Supporting the world's most ambitious smart city project"
  },
  {
    title: "AMAALA Logistics Hub",
    description: "Comprehensive logistics solutions for luxury tourism development",
    image: "https://www.hoteliermiddleeast.com/cloud/2022/05/24/AMAALA-Reveals-Iconic-Designs-for-New-Yacht-Club-6-Copy-scaled.jpg",
    sector: "Logistics",
    impact: "Enabling seamless operations for premium tourism destination"
  },
  {
    title: "Red Sea Development Support",
    description: "Marine operations and facility management services",
    image: "https://d3q0fpse3wbo5h.cloudfront.net/production/uploads/innovations/_1200x480_crop_center-center_80_none/Um-Rumah-Island-The-Red-Sea-Project.jpg",
    sector: "Marine Operations",
    impact: "Supporting sustainable tourism development initiatives"
  },
  {
    title: "Saudi Cruise Terminal",
    description: "Port operations and hospitality services for cruise tourism",
    image: "https://i0.wp.com/cruise-arabia.com/wp-content/uploads/2022/07/JeddahMarina_2aac1bc0ca.png?resize=639%2C317&ssl=1",
    sector: "Hospitality",
    impact: "Establishing Saudi Arabia as a premier cruise destination"
  }
]

export default function FeaturedProjects() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentProject, setCurrentProject] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('featured-projects')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="featured-projects" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-24 h-24 border border-gray-300 rotate-45 animate-pulse" style={{ animationDuration: '6s' }}></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 border border-gray-300 rotate-12 animate-pulse" style={{ animationDuration: '4s', animationDelay: '2s' }}></div>
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/20 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-title-lg md:text-title-xl font-light text-gray-900 leading-tight font-heading mb-6">
            <span className="font-extralight">Featured </span>
            <span className="font-extralight text-gray-900">Projects</span>
          </h2>
          <p className="text-subtitle-md md:text-subtitle-lg text-gray-600 max-w-3xl mx-auto font-body">
            Discover how HASCO is contributing to Saudi Arabia's most ambitious development projects, delivering world-class solutions across multiple sectors.
          </p>
        </div>

        {/* Project Carousel */}
        <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentProject * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[500px]">
                    {/* Project Image */}
                    <div className="relative group">
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500 img-gentle-hover">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      </div>
                      
                      {/* Enhanced Sector Badge */}
                      <div className="absolute top-6 left-6">
                        <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full text-body-sm font-medium font-heading shadow-lg">
                          {project.sector}
                        </span>
                      </div>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Project Content */}
                    <div className="space-y-8">
                      <div className="space-y-6">
                        <h3 className="text-title-md md:text-title-lg font-semibold text-gray-900 leading-tight font-heading">
                          {project.title}
                        </h3>
                        
                        <p className="text-body-md text-gray-700 leading-relaxed font-body">
                          {project.description}
                        </p>
                        
                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 shadow-lg">
                          <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-white text-sm font-bold">💡</span>
                            </div>
                            <div>
                              <p className="text-gray-800 font-medium font-body text-body-md leading-relaxed">
                                <span className="font-semibold">Impact:</span> {project.impact}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4">
                        <button className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 text-button-lg font-medium font-heading hover:from-blue-700 hover:to-blue-800 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                          <span className="relative z-10 tracking-wide">Learn More</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
