import React from 'react';
import '../styles/About.css';

const timeline = [
  {
    role: 'Virtual Assistant',
    desc: 'Started on the ground — mastering cold calling, CRM data entry, admin support, and client coordination. Every operational detail now informs how Viziblex trains its own team.',
  },
  {
    role: 'Team Lead',
    desc: 'Managed and mentored teams of virtual assistants serving US real estate clients. Built workflows, set performance standards, and ensured consistent, high-quality delivery.',
  },
  {
    role: 'Project Manager',
    desc: 'Led full virtual teams across multiple real estate companies. Oversaw task delegation, timelines, client communication, and delivery quality.',
  },
  {
    role: 'Lead Strategist',
    desc: 'Designed service strategies — from CRM architecture and email drip sequences to social media content calendars and lead generation funnels.',
  },
  {
    role: 'Freelancer & Agency Founder',
    desc: 'Took 4–5 years of expertise and built Viziblex — a full-service digital agency serving businesses in the US, Canada, and Pakistan with US-standard quality.',
  },
];

const achievements = [
  { icon: 'fa-users', text: '30+ US & Canadian Clients Managed' },
  { icon: 'fa-video', text: '100+ Zoom Sales Calls Personally Conducted' },
  { icon: 'fa-home', text: 'Expert in US Real Estate Workflows & Tools' },
  { icon: 'fa-envelope', text: 'Full Drip Email Campaigns Built & Deployed' },
  { icon: 'fa-share-alt', text: 'Social Media Content for Live US Clients' },
  { icon: 'fa-newspaper', text: 'Newsletters Crafted for Active US Brokers' },
];

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        {/* Header */}
        <div className="row mb-5">
          <div className="col-12" data-aos="fade-up">
            <span className="section-label">WHO WE ARE</span>
            <h2 className="section-title">
              About <span>Viziblex</span>
            </h2>
            <div className="accent-line"></div>
          </div>
        </div>

        <div className="row g-5">
          {/* Left: About text + timeline */}
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <div className="founder-badge">
              <i className="fas fa-award"></i>
              Finn Archer · M Hamza Ali · Founder
            </div>

            <p className="about-body mb-4">
              Viziblex is a results-driven virtual services agency founded by M Hamza Ali (known professionally as <strong style={{ color: 'var(--gold)' }}>Finn Archer</strong>) — a seasoned virtual assistant and digital growth specialist with 4–5 years of hands-on experience serving real estate professionals, mortgage brokers, and business owners across the United States and Canada.
            </p>

            <div className="about-quote">
              <p>"We don't just offer services — we become a dedicated part of your team. Our mission is to take the operational burden off your shoulders so you can focus on what you do best: growing your business."</p>
            </div>

            <p className="about-body">
              Hamza's journey in the virtual services world is defined by consistent growth — from frontline execution to strategic leadership. Every role has sharpened a different edge of his expertise.
            </p>
          </div>

          {/* Right: Timeline */}
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
            <div className="timeline">
              {timeline.map((item, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-card">
                    <div className="timeline-role">{item.role}</div>
                    <p className="timeline-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="row mt-5">
          <div className="col-12" data-aos="fade-up" data-aos-delay="100">
            <span className="section-label">Key Achievements</span>
            <div className="achievement-grid mt-3">
              {achievements.map((ach, i) => (
                <div key={i} className="achievement-card" data-aos="fade-up" data-aos-delay={i * 80}>
                  <div className="achievement-icon">
                    <i className={`fas ${ach.icon}`}></i>
                  </div>
                  <span className="achievement-text">{ach.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
