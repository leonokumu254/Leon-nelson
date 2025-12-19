import React, { useState } from 'react' // Import useState
import './services.css'
import theme_pattern from '../../../assets/theme_pattern.svg'
import Services_Data from '../../../assets/services_data.js'
import arrow_icon from '../../../assets/arrow_icon.svg'

const Services = () => {
  // State to track which service is currently expanded
  // We store the index of the open card. If null, nothing is open.
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to handle the click
  const toggleReadMore = (index) => {
    // If the clicked index is already open, close it (set to null)
    // Otherwise, open the clicked index
    setExpandedIndex(expandedIndex === index ? null : index);
  }

  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1 data-aos="fade-up">My Services</h1>
        <img src={theme_pattern} alt=""  data-aos="fade-up"/>
      </div>
      <div   className="services-container">
        {Services_Data.map((service, index) => {
        
          const isExpanded = expandedIndex === index;

          return (
            <div  data-aos="zoom-in"key={index} className='services-format'>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              
    
              <p>
                {isExpanded 
                  ? service.s_desc 
                  : `${service.s_desc.slice(0, 60)}...`} 
                  
              </p>

              <div 
                className='services-readmore' 
                onClick={() => toggleReadMore(index)} 
                style={{cursor: 'pointer'}} 
              >
            
                <p>{isExpanded ? "Read Less" : "Read More"}</p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services