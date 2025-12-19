import React, { useState, useEffect } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Navbar = () => {
  const [menu, setMenu] = useState("home");
  
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }


  useEffect(() => {
    const onScroll = () => {
      const sections = ["home", "about", "services", "work", "contact"];
      const scrollPos = window.scrollY + 200;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPos >= offsetTop &&
            scrollPos < offsetTop + offsetHeight
          ) {
            setMenu(section);
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className='navbar'>
      <img className="nelson-logo" src={logo} alt=""/>

      
      <div 
        className={`nav-toggle ${isMenuOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      

      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <AnchorLink className='anchor-link' href='#home'>
            
            <p onClick={() => { setMenu("home"); setIsMenuOpen(false); }}>Home</p>
          </AnchorLink>
          {menu==="home"?<img src={underline} alt=''/>:<></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'> 
            <p onClick={() => { setMenu("about"); setIsMenuOpen(false); }}> About Me</p>
          </AnchorLink>
          {menu==="about"?<img src={underline} alt=''/>:<></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p onClick={() => { setMenu("services"); setIsMenuOpen(false); }}> Services</p>
          </AnchorLink>
          {menu==="services"?<img src={underline} alt=''/>:<></>}
        </li>
        
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => { setMenu("contact"); setIsMenuOpen(false); }}> Contact</p>
          </AnchorLink>
          {menu==="contact"?<img src={underline} alt=''/>:<></>}
        </li>
        
      </ul>
      
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
        Connect with Me</AnchorLink>
      </div>
    </div>
  )
}

export default Navbar