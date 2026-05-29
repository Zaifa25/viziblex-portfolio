import React from 'react';
import '../styles/Extras.css';
import p1 from '../assets/images/1.jpeg';

const portfolioItems = [
  {
    label: 'Just Sold Campaign',
    img: p1,
    desc: 'Multiple Properties · South FL',
    icon: '🏡',
    bg: 'linear-gradient(135deg, #1a2f4a, #2d4a6e)',
  },
  {
    label: 'Holiday / Thanksgiving Post',
    desc: 'Brand Engagement Campaign',
    icon: '🍁',
    bg: 'linear-gradient(135deg, #3a2010, #6b3a1f)',
  },
  {
    label: 'Just Listed — $530,000',
    desc: 'Poinciana, Florida',
    icon: '🏘️',
    bg: 'linear-gradient(135deg, #1f3a5f, #264873)',
  },
  {
    label: 'Property Feature Post',
    desc: '4 Bed · 3 Bath · 2,790 sqft',
    icon: '✨',
    bg: 'linear-gradient(135deg, #2a1a0a, #4a3020)',
  },
  {
    label: 'Social Media Creative',
    desc: 'Real Estate Marketing',
    icon: '📱',
    bg: 'linear-gradient(135deg, #152b47, #1f3a5f)',
  },
  {
    label: 'Brand Content',
    desc: 'Engagement Campaign',
    icon: '🎯',
    bg: 'linear-gradient(135deg, #0d1b2e, #1a2f4a)',
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="fade-up">
            <span className="section-label">REAL WORK, REAL RESULTS</span>
            <h2 className="section-title">Social Media <span>Portfolio</span></h2>
            <div className="accent-line center"></div>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', maxWidth: 580, margin: '0 auto', fontSize: '0.95rem' }}>
              Graphics designed and posted for Brice Mentor — Home Master Realty, South Florida. From property listings to holiday campaigns — every post crafted to drive engagement and conversions.
            </p>
          </div>
        </div>

        <div className="portfolio-grid" data-aos="fade-up" data-aos-delay="100">
          {portfolioItems.map((item, i) => (
            <div key={i} className="portfolio-item">
              <img
                src={item.img}
                alt={item.label}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div className="portfolio-overlay">
                <div className="portfolio-label">{item.label}</div>
                <div className="portfolio-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Portfolio;
