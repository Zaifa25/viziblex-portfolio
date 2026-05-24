import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.css';
import './styles/Navbar.css';
import './styles/Hero.css';
import './styles/About.css';
import './styles/Sections.css';
import './styles/Extras.css';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import { TechStack, Markets, Clients } from './components/TechMarketClients';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CaseStudies from './components/CaseStudies';
import ContentCreation from './components/ContentCreation';
import { WhyUs, VideoSection, Contact, Footer } from './components/ContactFooter';

function App() {
  useEffect(() => {
    // Initialize AOS
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 80,
      });
    } else {
      // Dynamically load AOS if not available via CDN
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js';
      script.onload = () => {
        window.AOS.init({
          duration: 800,
          easing: 'ease-out-cubic',
          once: true,
          offset: 80,
        });
      };
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="App">
      {/* Noise overlay */}
      <div className="noise-overlay"></div>

      {/* Preloader */}
      <Preloader />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <main>
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Markets />
        <Clients />
        <Portfolio />
        <Testimonials />
        <CaseStudies />
        <ContentCreation />
        <WhyUs />
        <VideoSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
