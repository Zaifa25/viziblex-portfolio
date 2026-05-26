import React, { useState } from 'react';
import '../styles/Extras.css';

// =============================================
// WHY US
// =============================================
const whyUsItems = [
  {
    icon: 'fa-trophy',
    title: 'US-Proven Expertise',
    desc: 'We don\'t learn on the job. We bring 4–5 years of live experience from the highly competitive US real estate market — the same standards, systems, and strategies now available globally.',
  },
  {
    icon: 'fa-layer-group',
    title: 'Full-Service Under One Roof',
    desc: 'From your website to your CRM, social media to email campaigns — we handle everything so you don\'t have to juggle multiple freelancers or agencies.',
  },
  {
    icon: 'fa-chart-bar',
    title: 'Results-First Mindset',
    desc: 'We measure everything. Leads generated, posts published, emails sent, responses tracked. You always know what we\'re doing and what it\'s delivering.',
  },
  {
    icon: 'fa-handshake',
    title: 'We Work Like Your Team',
    desc: 'We don\'t disappear after onboarding. We\'re responsive, proactive, and invested in your growth. Our clients keep us because we show up — every single day.',
  },
];

export const WhyUs = () => (
  <section className="whyus-section" id="why-us">
    <div className="container">
      <div className="row mb-5">
        <div className="col-12 text-center" data-aos="fade-up">
          <span className="section-label">WHY VIZIBLEX</span>
          <h2 className="section-title">Why Businesses <span>Choose Us</span></h2>
          <div className="accent-line center"></div>
        </div>
      </div>
      <div className="whyus-grid">
        {whyUsItems.map((item, i) => (
          <div key={i} className="whyus-card" data-aos="fade-up" data-aos-delay={i * 100}>
            <div className="whyus-icon">
              <i className={`fas ${item.icon}`}></i>
            </div>
            <div>
              <h3 className="whyus-title">{item.title}</h3>
              <p className="whyus-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// =============================================
// VIDEO
// =============================================
export const VideoSection = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="video-section" id="video">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="fade-up">
            <span className="section-label">SEE US IN ACTION</span>
            <h2 className="section-title">How We Make Clients <span>Fall in Love</span></h2>
            <div className="accent-line center"></div>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', maxWidth: 600, margin: '0 auto', fontSize: '0.95rem' }}>
              Watch how Hamza personally walks a brand-new client through exactly what Viziblex will do for them — step by step, service by service. No fluff. No hard sell. Just a clear, confident conversation.
            </p>
          </div>
        </div>

        <div className="video-wrapper" data-aos="zoom-in" data-aos-delay="100">
          {!playing ? (
            <div className="video-thumbnail">
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 20 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--beige)', textTransform: 'uppercase', opacity: 0.6 }}>Finn Archer (M Hamza Ali)</span>
                <button className="video-play-btn" onClick={() => setPlaying(true)}>
                  <i className="fas fa-play ms-1"></i>
                </button>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--beige)', opacity: 0.7 }}>Live Client Onboarding Call</span>
              </div>
              <div className="video-label">
                <span className="video-badge">● ZOOM RECORDING</span>
                <span className="video-title">Finn Archer (M Hamza Ali) · Live Client Onboarding Call</span>
              </div>
            </div>
          ) : (
            <iframe
              src="https://drive.google.com/file/d/10EGC8EJqkT6XnBC2lm1fOqsLomHrLWFm/preview"
              title="Viziblex Onboarding"
              allowFullScreen
              style={{ width: '100%', aspectRatio: '16/9', border: 'none', borderRadius: 20 }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

// =============================================
// CONTACT
// =============================================
export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: 'fa-globe', label: 'Website', value: 'viziblex.online.com', href: 'https://viziblex.online.com' },
    { icon: 'fa-envelope', label: 'Email', value: 'muhammadhamzaali54688@gmail.com', href: 'mailto:mhamzaawan@gmail.com' },
    { icon: 'fa-whatsapp fab', label: 'WhatsApp', value: '+92 318 5811479', href: 'https://wa.me/3265415612' },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="fade-up">
            <span className="section-label">GET IN TOUCH</span>
            <h2 className="section-title">Let's Work <span>Together</span></h2>
            <div className="accent-line center"></div>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', maxWidth: 520, margin: '0 auto', fontSize: '0.95rem' }}>
              Ready to streamline your business? We offer a free consultation call to understand your needs and show you exactly how we can help.
            </p>
          </div>
        </div>

        <div className="row g-5">
          {/* Form */}
          <div className="col-lg-7" data-aos="fade-right" data-aos-delay="100">
            <div className="contact-form-wrapper">
              {submitted ? (
                <div className="text-center py-5">
                  <div style={{ fontSize: '3rem', marginBottom: 20 }}>✅</div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)', marginBottom: 12 }}>Message Sent!</h3>
                  <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}>
                    Thank you for reaching out. Hamza will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-group-custom">
                        <label className="form-label-custom">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control-custom"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group-custom">
                        <label className="form-label-custom">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control-custom"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group-custom">
                        <label className="form-label-custom">Service Interested In</label>
                        <select
                          name="service"
                          className="form-control-custom"
                          value={form.service}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select a service...</option>
                          <option>Lead Generation</option>
                          <option>Social Media Management</option>
                          <option>CRM Management</option>
                          <option>Cold Calling & Outreach</option>
                          <option>Transaction Coordination</option>
                          <option>Website Creation</option>
                          <option>Email Campaigns</option>
                          <option>Brand Identity & Design</option>
                          <option>Full-Service Package</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group-custom">
                        <label className="form-label-custom">Your Message</label>
                        <textarea
                          name="message"
                          className="form-control-custom"
                          placeholder="Tell us about your business and what you need..."
                          value={form.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn-gold w-100" style={{ textAlign: 'center' }}>
                        <i className="fas fa-paper-plane me-2"></i> Send Message
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-5" data-aos="fade-left" data-aos-delay="150">
            <div style={{ marginBottom: 32 }}>
              {contactInfo.map((info, i) => (
                <a key={i} href={info.href} className="contact-info-item" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                  <div className="contact-info-icon">
                    <i className={`${info.icon.includes('fab') ? 'fab' : 'fas'} ${info.icon.replace('fab', '').trim()}`}></i>
                  </div>
                  <div>
                    <div className="contact-info-label">{info.label}</div>
                    <div className="contact-info-value">{info.value}</div>
                  </div>
                  <i className="fas fa-arrow-right ms-auto" style={{ color: 'var(--gold)', opacity: 0.5, fontSize: '0.8rem' }}></i>
                </a>
              ))}
            </div>

            <div className="consultation-cta">
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12 }}>
                <i className="fas fa-calendar-check me-2"></i>
                Free Consultation
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--warm-white)', marginBottom: 12 }}>
                Book Your FREE 30-Minute Strategy Call
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.87rem', color: 'var(--text-muted)', marginBottom: 20, lineHeight: 1.6 }}>
                No commitment. No pressure. Just a real conversation about how we can grow your business — talk directly to Hamza, Founder of Viziblex.
              </p>
              <a
                href="https://wa.me/923185811479"
                className="btn-gold"
                target="_blank"
                rel="noreferrer"
                style={{ width: '100%', textAlign: 'center' }}
              >
                <i className="fab fa-whatsapp me-2"></i> Book on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// =============================================
// FOOTER
// =============================================
export const Footer = () => {
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-5">
          {/* Brand */}
          <div className="col-lg-4">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">V</div>
                <div className="footer-logo-name">VIZIBLEX</div>
              </div>
              <p className="footer-tagline">
                All-in-One Digital Solutions. Streamline your business with a virtual touch. Serving US · Canada · Pakistan.
              </p>
              <div className="social-icons mt-4">
                <a href="https://wa.me/923185811479" className="social-icon" target="_blank" rel="noreferrer">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="mailto:muhammadhamzaali54688@gmail.com" className="social-icon">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="https://www.linkedin.com/in/hamza-awan-428a60265" className="social-icon" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61590250200797" className="social-icon" target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="col-lg-2 col-md-4">
            <div className="footer-heading">Company</div>
            <ul className="footer-links">
              {[['#about', 'About Us'], ['#services', 'Services'], ['#clients', 'Clients'], ['#case-studies', 'Case Studies'], ['#contact', 'Contact']].map(([href, label]) => (
                <li key={href}><a href={href} onClick={(e) => { e.preventDefault(); handleNav(href); }}>{label}</a></li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="footer-heading">Services</div>
            <ul className="footer-links">
              {['Lead Generation', 'Social Media Marketing', 'CRM Management', 'Cold Calling', 'Website Development', 'Email Campaigns'].map((s) => (
                <li key={s}><a href="#services" onClick={(e) => { e.preventDefault(); handleNav('#services'); }}>{s}</a></li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="footer-heading">Contact</div>
            <ul className="footer-links">
              <li><a href="https://viziblex.online.com" target="_blank" rel="noreferrer">viziblex.online.com</a></li>
              <li><a href="mailto:muhammadhamzaali54688@gmail.com">muhammadhamzaali54688@gmail.com</a></li>
              <li><a href="https://wa.me/923185811479" target="_blank" rel="noreferrer">+92 318 5811479</a></li>
            </ul>
            <a href="#contact" className="btn-gold mt-4 d-inline-block" style={{ fontSize: '0.7rem' }} onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}>
              <i className="fas fa-calendar me-2"></i> Free Call
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Viziblex. All rights reserved. Founded by M Hamza Ali (Finn Archer).
          </p>
          <div className="footer-markets">US · CANADA · PAKISTAN</div>
        </div>
      </div>
    </footer>
  );
};
