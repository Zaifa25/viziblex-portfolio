import React from 'react';
import '../styles/Sections.css';

const services = [
  {
    icon: 'fa-bullseye',
    title: 'Lead Generation',
    desc: 'We build targeted prospect lists and deliver qualified leads directly to your pipeline. Using advanced tools and proven outreach strategies, we fill your CRM with real, convertible opportunities.',
  },
  {
    icon: 'fa-share-nodes',
    title: 'Social Media Marketing & Management',
    desc: 'From content creation to daily posting and engagement — we manage your brand across Facebook, Instagram, and LinkedIn. Proven results for US real estate brokers.',
  },
  {
    icon: 'fa-database',
    title: 'CRM Management',
    desc: 'We organize, maintain, and optimize your CRM (GoHighLevel, HubSpot, and others). Pipeline management, data hygiene, and automation — your contacts are always actionable.',
  },
  {
    icon: 'fa-phone',
    title: 'Cold Calling & Outreach',
    desc: 'Professional cold calling campaigns with scripted, results-focused pitches. Hundreds of outreach calls to US real estate professionals — converting conversations into clients.',
  },
  {
    icon: 'fa-file-contract',
    title: 'Transaction Coordination',
    desc: 'Seamless coordination of real estate transactions from contract to close. Documentation, deadlines, vendor communication, and status updates — nothing slips through the cracks.',
  },
  {
    icon: 'fa-globe',
    title: 'Website Creation & Management',
    desc: 'We design, build, and maintain professional websites — landing pages, full business sites, or e-commerce stores. Clean, mobile-ready, SEO-friendly websites that convert.',
  },
  {
    icon: 'fa-map-marker-alt',
    title: 'Google Business Profile Optimization',
    desc: 'We set up, optimize, and manage your Google Business Profile — driving local visibility, managing reviews, and ensuring prominent placement in local search results.',
  },
  {
    icon: 'fa-envelope-open-text',
    title: 'Email & Newsletter Campaigns',
    desc: 'Full drip email campaigns to nurture your database — from first-time homebuyers to past clients. Professional newsletters that keep your audience engaged and your brand top of mind.',
  },
  {
    icon: 'fa-calendar-check',
    title: 'Administrative Support',
    desc: 'Calendar management, document preparation, data entry, and reporting. Our virtual admin services give you back your time so you can focus on high-value work.',
  },
  {
    icon: 'fa-people-group',
    title: 'Project Management & Team Leadership',
    desc: 'With experience leading multi-person virtual teams, we oversee entire projects, coordinate deliverables, and ensure your operations run smoothly and on schedule.',
  },
  {
    icon: 'fa-palette',
    title: 'Brand Identity & Graphic Design',
    desc: 'Professional logos, brand kits, social media templates, and visual content that make your business look polished and credible — startup or established brand.',
  },
  {
    icon: 'fa-magnifying-glass',
    title: 'Local SEO & Directory Listings',
    desc: 'From Google Maps optimization to listing your brand across top directories — we make sure customers find you before they find your competitors.',
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        {/* Header */}
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="fade-up">
            <span className="section-label">WHAT WE DO</span>
            <h2 className="section-title">Our <span>Services</span></h2>
            <div className="accent-line center"></div>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', maxWidth: 560, margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.7 }}>
              A complete digital solutions suite — everything your business needs, handled by one dedicated team with US-proven expertise.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={((i % 3) * 100)}
            >
              <div className="service-icon">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
