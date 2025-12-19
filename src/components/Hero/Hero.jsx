import React from 'react'
import './hero.css'
import profile_pic from '../../../assets/profile_pic.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero' data-aos="fade-in" >
      <h1 data-aos="fade-up" data-aos-delay="200">  Hi! <span> <br /> I'm Leon Nelson </span></h1>
      <p data-aos="fade-up" data-aos-delay="400"> I turn complex ideas into clean, responsive code. With a strong foundation in modern web technologies and a keen interest in AI-driven automation, I build digital products that are not just user-centric, but future-ready.My goal is to engineer solutions that are as smart as they are seamless.
      
        </p>
      <div className="hero-action" data-aos="fade-up" data-aos-delay="600">
        
            <div className="hero-connect">  <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me </AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
