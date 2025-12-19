import React ,{useEffect} from 'react'
import Navbar from './components/navbar.jsx'
import Hero from  './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Services from './components/services/services.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      offset: 100,    
      easing: 'ease-in-out', 
      once: true,     
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
       <Contact/>
      <Footer/>
    </>
  )
}

export default App
