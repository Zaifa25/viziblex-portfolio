import React from 'react';
import '../styles/Sections.css';

const techStack = [
  { icon: '⚡', name: 'GoHighLevel' },
  { icon: '🎯', name: 'HubSpot' },
  { icon: '🏠', name: 'Zillow / MLS' },
  { icon: '🎨', name: 'Canva' },
  { icon: '📊', name: 'Meta Ads Manager' },
  { icon: '📧', name: 'Google Workspace' },
  { icon: '✅', name: 'Trello / Asana' },
  { icon: '🎬', name: 'CapCut / Video' },
  { icon: '💬', name: 'Zoom' },
  { icon: '📱', name: 'WhatsApp Business' },
  { icon: '🗺️', name: 'Google Business Profile' },
  { icon: '🌐', name: 'WordPress' },
];

const markets = [
  {
    flag: '🇺🇸',
    country: 'United States',
    regions: 'South Florida · New York · Texas · Ohio',
    desc: 'Real estate agents, mortgage brokers & investors — the most competitive market we call home.',
  },
  {
    flag: '🇨🇦',
    country: 'Canada',
    regions: 'British Columbia · Ontario',
    desc: "Real estate professionals & business owners across Canada's most dynamic provinces.",
  },
  {
    flag: '🇵🇰',
    country: 'Pakistan',
    regions: 'Nationwide',
    desc: 'Local businesses, brands & entrepreneurs — powered by US-standard strategies and quality.',
  },
];

const clients = [
  {
    name: 'Brice Mentor',
    initials: 'BM',
    role: 'Real Estate Broker & Mortgage Broker',
    company: 'Home Master Realty LLC',
    location: '🇺🇸 South Florida, USA',
    badge: 'Ongoing',
    services: ['Social Media', 'Newsletters', 'CRM', 'Email Campaigns', 'Listing Posts'],
  },
  {
    name: 'Ximena Ibarra',
    initials: 'XI',
    role: 'Real Estate Broker',
    company: 'Real Estate Classics',
    location: '🇺🇸 New York City, USA',
    badge: 'NYC Luxury',
    services: ['Virtual Assistant', 'Transaction Coordination', 'Social Media', 'Lead Gen'],
  },
  {
    name: 'Gabriel Hausauer',
    initials: 'GH',
    role: 'Real Estate Agent',
    company: 'Independent',
    location: '🇺🇸 San Antonio, Texas',
    badge: 'Texas',
    services: ['Cold Calling', 'Outreach', 'CRM', 'Admin Support'],
  },
  {
    name: 'Colin Cochrane',
    initials: 'CC',
    role: 'Real Estate Agent & Mortgage Broker',
    company: 'Independent',
    location: '🇺🇸 South Florida, USA',
    badge: 'Multi-Year',
    services: ['Lead Generation', 'Cold Calling', 'Admin Support', 'CRM Pipeline'],
  },
  {
    name: 'John Daniel Right',
    initials: 'JD',
    role: 'Real Estate Agent & Investor',
    company: 'Independent',
    location: '🇺🇸 Cincinnati, Ohio',
    badge: 'Investor',
    services: ['Lead Generation', 'Investor Outreach', 'CRM', 'Project Management'],
  },
  {
    name: 'Tariq Mehmood',
    initials: 'TM',
    role: 'Business Owner & Entrepreneur',
    company: 'TM Foods & Confectionery',
    location: '🇵🇰 Lahore, Pakistan',
    badge: 'Full Setup',
    services: ['Website', 'Social Media', 'Google Business', 'Brand Identity', 'Local SEO'],
  },
];

export const TechStack = () => (
  <section className="techstack-section" id="techstack">
    <div className="container">
      <div className="row mb-5">
        <div className="col-12 text-center" data-aos="fade-up">
          <span className="section-label">TOOLS & PLATFORMS</span>
          <h2 className="section-title">Tech Stack We <span>Master</span></h2>
          <div className="accent-line center"></div>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', maxWidth: 520, margin: '0 auto', fontSize: '0.95rem' }}>
            Proficient in the tools that power modern real estate and digital businesses. We hit the ground running on Day 1.
          </p>
        </div>
      </div>
      <div className="tech-grid">
        {techStack.map((tech, i) => (
          <div key={i} className="tech-card" data-aos="zoom-in" data-aos-delay={i * 60}>
            <div className="tech-icon-wrapper">{tech.icon}</div>
            <div className="tech-name">{tech.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Markets = () => (
  <section className="markets-section" id="markets">
    <div className="container">
      <div className="row mb-5">
        <div className="col-12 text-center" data-aos="fade-up">
          <span className="section-label">OUR REACH</span>
          <h2 className="section-title">Markets We <span>Serve</span></h2>
          <div className="accent-line center"></div>
        </div>
      </div>
      <div className="markets-grid">
        {markets.map((market, i) => (
          <div key={i} className="market-card" data-aos="fade-up" data-aos-delay={i * 150}>
            <span className="market-emoji">{market.flag}</span>
            <div className="market-country">{market.country}</div>
            <div className="market-regions">{market.regions}</div>
            <p className="market-desc">{market.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Clients = () => (
  <section className="clients-section" id="clients">
    <div className="container">
      <div className="row mb-5">
        <div className="col-12 text-center" data-aos="fade-up">
          <span className="section-label">WHO WE'VE WORKED WITH</span>
          <h2 className="section-title">Our <span>Clients</span></h2>
          <div className="accent-line center"></div>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', maxWidth: 580, margin: '0 auto', fontSize: '0.95rem' }}>
            Over 4–5 years, Viziblex has served 50+ clients across the US, Canada, and Pakistan. Below are some of the professionals we've had the privilege to work with.
          </p>
        </div>
      </div>
      <div className="clients-grid">
        {clients.map((client, i) => (
          <div key={i} className="client-card" data-aos="fade-up" data-aos-delay={i * 80}>
            <span className="client-badge">{client.badge}</span>
            <div className="client-avatar">{client.initials}</div>
            <div className="client-name">{client.name}</div>
            <div className="client-role">{client.role}</div>
            <div className="client-location">
              <i className="fas fa-building" style={{ fontSize: '0.7rem', color: 'var(--gold)' }}></i>
              {client.company} &nbsp;·&nbsp; {client.location}
            </div>
            <div className="client-services">
              {client.services.map((s, j) => (
                <span key={j} className="service-tag">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footnote */}
      <div className="row mt-4">
        <div className="col-12 text-center" data-aos="fade-up">
          <p style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '1rem' }}>
            ...and 50+ more clients across the US, Canada & Pakistan. Every single one trusted us with their operations and growth. We delivered.
          </p>
        </div>
      </div>
    </div>
  </section>
);
