import React, { useState, useEffect, useRef } from 'react';
import '../styles/Hero.css';
import profileImg from '../assets/images/profile.jpeg';

const stats = [
  { number: 5, suffix: '+', label: 'Years Experience' },
  { number: 50, suffix: '+', label: 'Clients Served' },
  { number: 3, suffix: '', label: 'Markets Covered' },
  { number: 100, suffix: '%', label: 'Commitment' },
];

const AnimatedCounter = ({ target, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref} className="stat-number">{count}{suffix}</span>;
};

const Hero = () => {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" id="hero">
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="container hero-content">
        <div className="row align-items-center g-5">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="hero-eyebrow">
              <span className="eyebrow-dot"></span>
              Founder & Digital Strategist
            </div>

            <h1 className="hero-name">M HAMZA ALI</h1>
            <p className="hero-alias">"Finn Archer"</p>
            <p className="hero-role">Founder of Viziblex &nbsp;·&nbsp; US · Canada · Pakistan</p>

            <h2 className="hero-headline">
              All-in-One<br />
              <span className="gold-italic">Digital Solutions</span>
            </h2>
            <p className="hero-tagline">
              Streamline your business with a virtual touch. From CRM management to social media, lead generation to website development — we handle the backend so you can focus on growth.
            </p>

            <div className="hero-ctas">
              <a
                href="#contact"
                className="btn-gold"
                onClick={(e) => { e.preventDefault(); handleScroll('#contact'); }}
              >
                <i className="fas fa-calendar me-2"></i> Book Free Consultation
              </a>
              <a
                href="#services"
                className="btn-outline-gold"
                onClick={(e) => { e.preventDefault(); handleScroll('#services'); }}
              >
                View Services
              </a>
            </div>
          </div>

          {/* Right: Stats + Visual */}
          <div className="col-lg-6">
            <div className="hero-visual">
              <div className="hero-visual-frame">
                <div className="corner-ornament"></div>
                <div className="corner-ornament br"></div>
                <div className="hero-image-wrapper">
                  <img
                    src={profileImg}
                    alt="M Hamza Ali"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 20 }}
                  />
                </div>
                <div className="floating-badge badge-top-right">
                  <i className="fas fa-star me-1"></i> 50+ Clients
                </div>
                <div className="floating-badge badge-bottom-left">
                  🇺🇸 · 🇨🇦 · 🇵🇰<br />
                  <span style={{ fontSize: '0.6rem', opacity: 0.8 }}>3 Markets</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="hero-stats">
              {stats.map((stat, i) => (
                <div key={i} className="stat-card">
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Markets strip */}
        <div className="markets-strip mt-4">
          <div className="markets-strip-inner">
            <div className="market-item">
              <span className="market-flag">🇺🇸</span> United States
            </div>
            <span style={{ color: 'var(--gold)', opacity: 0.3 }}>·</span>
            <div className="market-item">
              <span className="market-flag">🇨🇦</span> Canada
            </div>
            <span style={{ color: 'var(--gold)', opacity: 0.3 }}>·</span>
            <div className="market-item">
              <span className="market-flag">🇵🇰</span> Pakistan
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
