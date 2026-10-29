import React ,{useEffect} from 'react'
import Navbar from './components/navbar.jsx'
import Hero from  './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Work from './components/Work/Work.jsx'
import Services from './components/services/services.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 30,    
      easing: 'ease-in-out', 
      once: true,     
    });

    const refreshTimer = setTimeout(() => {
      AOS.refresh();
    }, 400);

    return () => clearTimeout(refreshTimer);
  }, []);
  return (
    <>
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <About />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
