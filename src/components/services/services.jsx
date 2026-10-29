import React, { useState, useEffect } from 'react'
import './services.css'
import Services_Data from '../../../assets/services_data.js'
import { FiArrowUpRight, FiX } from 'react-icons/fi'
import AOS from 'aos'

const Services = () => {
  // All services start fully opened by default so users see all cards immediately without any glitch
  const [openIndices, setOpenIndices] = useState(
    () => new Set(Services_Data.map((_, index) => index))
  )

  const toggleService = (index) => {
    setOpenIndices((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
    // Recalculate AOS trigger offsets after card expand/collapse
    setTimeout(() => {
      AOS.refresh()
    }, 150)
  }

  const allOpen = openIndices.size === Services_Data.length

  const toggleAll = () => {
    setOpenIndices((prev) => {
      if (prev.size === Services_Data.length) {
        return new Set() // Collapse all
      } else {
        return new Set(Services_Data.map((_, index) => index)) // Expand all
      }
    })
    setTimeout(() => {
      AOS.refresh()
    }, 150)
  }

  // Preload all service images on component mount so they appear instantaneously
  useEffect(() => {
    Services_Data.forEach((service) => {
      if (service.s_image) {
        const preloadImg = new Image()
        preloadImg.src = service.s_image
      }
    })
  }, [])

  return (
    <section id="services" className="services-section">
      {/* Header with ghost watermark, bold /SERVICE title, and toggle all control */}
      <div className="services-header" data-aos="fade-up">
        <span className="services-watermark" aria-hidden="true">
          SERVICE
        </span>
        <h2 className="services-main-title">/SERVICE</h2>
        <button
          type="button"
          onClick={toggleAll}
          className="services-toggle-all-btn"
          aria-label={allOpen ? 'Collapse all services' : 'Expand all services'}
        >
          {allOpen ? 'Collapse All' : 'Expand All'}
        </button>
      </div>

      {/* Services List / Accordion */}
      <div className="services-list">
        {Services_Data.map((service, index) => {
          const isExpanded = openIndices.has(index)

          return (
            <div
              key={index}
              data-service-index={index}
              className={`service-item-row ${isExpanded ? 'active-card' : ''}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="650"
              data-aos-offset="40"
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
                    <div className="service-card-mockup-wrapper">
                      <img
                        src={service.s_image}
                        alt={`${service.s_name} preview mockup`}
                        width="736"
                        height="534"
                        className="service-card-mockup-img"
                        loading="eager"
                        decoding="sync"
                        fetchPriority="high"
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
                  aria-expanded="false"
                  aria-label={`Expand details for ${service.s_name}`}
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

      {/* Offscreen Pre-warmed Image Cache for 0ms Instant Photo Paint */}
      <div
        style={{
          position: 'absolute',
          width: 0,
          height: 0,
          overflow: 'hidden',
          opacity: 0,
          pointerEvents: 'none'
        }}
        aria-hidden="true"
      >
        {Services_Data.map((s, idx) => (
          <img
            key={idx}
            src={s.s_image}
            alt=""
            width="736"
            height="534"
            decoding="sync"
            loading="eager"
          />
        ))}
      </div>
    </section>
  )
}

export default Services