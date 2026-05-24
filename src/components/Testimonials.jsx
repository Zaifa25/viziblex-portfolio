import React, { useState } from 'react';
import '../styles/Extras.css';

const testimonials = [
  {
    text: 'Excellent work on the email campaign — delivered exactly what I asked for, and on time. Good job.. thank you!',
    name: 'Brice Mentor',
    initials: 'BM',
    role: 'Real Estate Broker · Home Master Realty · South Florida',
    stars: 5,
  },
  {
    text: 'I appreciate very much your help and support during this difficult time. You handled everything professionally. Thank you so much for always going above and beyond.',
    name: 'US Real Estate Professional',
    initials: 'US',
    role: 'Licensed Agent · South Florida',
    stars: 5,
  },
  {
    text: 'Hamza and his team completely transformed how my business operates online. From our social media to CRM, everything is now running like clockwork. I have more time to focus on closings. Highly recommend Viziblex to any agent looking to scale.',
    name: 'Gabriel Hausauer',
    initials: 'GH',
    role: 'Real Estate Agent · San Antonio, Texas',
    stars: 5,
  },
  {
    text: 'Working with Viziblex has been one of the best decisions I made for my business. The level of professionalism, attention to detail, and consistency is something I have not seen from other VAs. They don\'t just do the work — they think ahead for you. I have referred them to two other agents already.',
    name: 'Ximena Ibarra',
    initials: 'XI',
    role: 'Real Estate Broker · Real Estate Classics · New York City',
    stars: 5,
  },
  {
    text: 'Within the first week of working with Hamza, I could already feel the difference. My calendar was organized, my leads were being followed up, and my social media was finally active. He works fast, communicates clearly, and always delivers. This team is the real deal.',
    name: 'Colin Cochrane',
    initials: 'CC',
    role: 'Real Estate Agent & Mortgage Broker · South Florida',
    stars: 5,
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  const t = testimonials[active];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="fade-up">
            <span className="section-label">WHAT OUR CLIENTS SAY</span>
            <h2 className="section-title">Real Feedback · <span>Real Results</span></h2>
            <div className="accent-line center"></div>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', maxWidth: 540, margin: '0 auto', fontSize: '0.95rem' }}>
              Genuine messages from US clients — no scripts, no edits. Just honest feedback from real professionals we've worked with.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
            <div className="testimonial-card">
              {/* Stars */}
              <div className="testimonial-stars">
                {'★'.repeat(t.stars)}
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '0.1em', color: 'var(--gold)', marginLeft: '10px' }}>VERIFIED CLIENT</span>
              </div>

              {/* Text */}
              <p className="testimonial-text">"{t.text}"</p>

              {/* Author */}
              <div className="testimonial-author">
                <div className="author-avatar">{t.initials}</div>
                <div>
                  <div className="author-name">— {t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
                <div className="author-verified">
                  <i className="fas fa-check-circle"></i> Verified
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
              <button
                onClick={prev}
                style={{ background: 'rgba(31,58,95,0.3)', border: '1px solid rgba(198,166,100,0.2)', borderRadius: '8px', width: '40px', height: '40px', color: 'var(--gold)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <i className="fas fa-chevron-left"></i>
              </button>

              <div className="testimonial-nav">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`testimonial-dot ${i === active ? 'active' : ''}`}
                    onClick={() => setActive(i)}
                  />
                ))}
              </div>

              <button
                onClick={next}
                style={{ background: 'rgba(31,58,95,0.3)', border: '1px solid rgba(198,166,100,0.2)', borderRadius: '8px', width: '40px', height: '40px', color: 'var(--gold)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
