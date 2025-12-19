import React from 'react'
import './about.css'
import theme_pattern from '../../../assets/theme_pattern.svg'
import profile_img from '../../../assets/profile_pic2.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title" data-aos="fade-up">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left" data-aos="fade-right">
                    <img  src={profile_img}  alt="" className='pic' />
                </div>
                <div className="about-right" data-aos="fade-left">
                    <div className="about-para">
                        <p>I'm currently  a student  growing my skill set while working on real world  projects, designing and building interfaces, handling backend logic and delivering clean products.</p>
                        <p> I work across multiple technologies,build components that hold up under real use,and keep my workflow grounded in curiosity and continous improvement. I aim to deliver work that feels polished and purposeful</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill" data-aos="fade-left"   data-aos-delay="1000"><p>HTML & CSS</p><hr id=' skill-1' style={{width:"90%"}}  /></div>
                        <div className="about-skill"  data-aos="fade-left"  data-aos-delay="1100" ><p>JavaScript</p><hr  id=' skill-2' style={{width:"70%"}}/></div>
                        <div className="about-skill"  data-aos="fade-left"  data-aos-delay="1200" ><p>React JS</p><hr  id=' skill-3' style={{width:"50%"}}/></div>
                    <div className="about-skill"  data-aos="fade-left"   data-aos-delay="1300"><p>Next JS</p><hr  id=' skill-4' style={{width:"40%"}}/></div>
                        <div className="about-skill"  data-aos="fade-left"  data-aos-delay="1400" ><p>Git & Github</p><hr  id=' skill-5'/></div>
                        <div className="about-skill"   data-aos="fade-left"  data-aos-delay="1500"><p>Mongo DB</p><hr id=' skill-6'/></div>
                        
                    
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default About
