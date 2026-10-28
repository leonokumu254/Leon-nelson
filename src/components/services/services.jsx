import React, { useState, useEffect } from 'react'
import './services.css'
import Services_Data from '../../../assets/services_data.js'
import { FiArrowUpRight, FiX } from 'react-icons/fi'
import AOS from 'aos'

const Services = () => {
  // First service expanded by default matching the reference design
  const [expandedIndex, setExpandedIndex] = useState(0)

  const toggleService = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  // Refresh AOS when accordion row is toggled so the image animation triggers
  useEffect(() => {
    AOS.refresh()
  }, [expandedIndex])

  return (
    <section id="services" className="services-section">
      {/* Header with ghost watermark and bold /SERVICE title */}
      <div className="services-header" data-aos="fade-up">
        <span className="services-watermark" aria-hidden="true">
          SERVICE
        </span>
        <h2 className="services-main-title">/SERVICE</h2>
      </div>

      {/* Services List / Accordion */}
      <div className="services-list" data-aos="fade-up" data-aos-delay="200">
        {Services_Data.map((service, index) => {
          const isExpanded = expandedIndex === index

          return (
            <div
              key={index}
              className={`service-item-row ${isExpanded ? 'active-card' : ''}`}
            >
              {isExpanded ? (
                /* Active Dark Card State with Floating Mockup */
                <div className="service-card-expanded">
                  <div className="service-card-content">
                    <div className="service-card-header">
                      <span className="service-card-num">{service.s_no}</span>
                      <h3 className="service-card-title">{service.s_name}</h3>
                    </div>

                    <p className="service-card-desc">{service.s_desc}</p>
                  </div>

                  {service.s_image && (
                    <div
                      className="service-card-mockup-wrapper"
                      data-aos="fade-left"
                      data-aos-duration="600"
                      data-aos-delay="100"
                    >
                      <img
                        src={service.s_image}
                        alt={`${service.s_name} preview mockup`}
                        className="service-card-mockup-img"
                      />
                    </div>
                  )}

                  <button
                    className="service-card-close-btn"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleService(index)
                    }}
                    aria-label={`Close ${service.s_name}`}
                  >
                    <FiX className="service-close-icon" />
                  </button>
                </div>
              ) : (
                /* Inactive Collapsed Row State */
                <div
                  className="service-row-collapsed"
                  onClick={() => toggleService(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      toggleService(index)
                    }
                  }}
                >
                  <div className="service-row-left">
                    <span className="service-row-num">{service.s_no}</span>
                    <h3 className="service-row-title">{service.s_name}</h3>
                  </div>
                  <div className="service-row-arrow-wrap">
                    <FiArrowUpRight className="service-row-arrow" />
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services