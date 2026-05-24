import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Tech Stack', href: '#techstack' },
  { label: 'Clients', href: '#clients' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section detection
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`viziblex-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            {/* Brand */}
            <a className="navbar-brand-custom" href="#hero" onClick={() => handleNavClick('#hero')}>
              <div className="brand-logo">V</div>
              <div className="brand-text">
                <span className="brand-name">VIZIBLEX</span>
                <span className="brand-tagline">Digital Solutions</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <ul className="navbar-nav-custom">
              {navLinks.map((link) => (
                <li key={link.href} className="nav-item-custom">
                  <a
                    href={link.href}
                    className={activeSection === link.href.replace('#', '') ? 'active' : ''}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="nav-item-custom ms-2">
                <a
                  href="#contact"
                  className="navbar-cta"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                >
                  Book Call
                </a>
              </li>
            </ul>

            {/* Mobile Toggle */}
            <button className="navbar-toggler-custom" onClick={() => setMobileOpen(true)}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        <button className="mobile-nav-close" onClick={() => setMobileOpen(false)}>
          <i className="fas fa-times"></i>
        </button>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn-gold mt-3"
          onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
        >
          Book Free Call
        </a>
      </div>
    </>
  );
};

export default Navbar;
