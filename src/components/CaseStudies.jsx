import React from 'react';
import '../styles/Extras.css';

const caseStudies = [
  {
    number: '01',
    title: 'Brice Mentor — Home Master Realty, South Florida',
    challenge: 'A highly active real estate broker and mortgage professional needed a full-stack virtual support system. He had no social media presence, an unmanaged CRM, and no content pipeline to nurture his growing client database.',
    solution: 'Viziblex stepped in as a complete virtual team: built and managed his social media presence, created property listing posts and sold campaigns, wrote monthly newsletters, and built a 12-month post-closing drip email campaign plus a full 12-month first-time homebuyer credit-building email series.',
    result: 'Active social media with regular listing posts and holiday campaigns. A fully nurtured email list. Multiple Just Sold properties marketed. Client praised our work repeatedly within minutes of delivery.',
  },
  {
    number: '02',
    title: 'Ximena Ibarra — Real Estate Classics, New York City',
    challenge: 'A NYC-based broker needed reliable virtual assistant support to manage her growing client base and administrative workload while maintaining a professional brand presence in the luxury market.',
    solution: 'Provided dedicated virtual assistance including transaction coordination, lead management, CRM maintenance, and social media support — tailored for the fast-paced NYC luxury real estate market.',
    result: 'Streamlined operations, reduced admin burden, and improved response time to leads. Client able to focus entirely on closings while Viziblex handled the backend.',
  },
  {
    number: '03',
    title: 'John Daniel Right — Real Estate Agent & Investor, Cincinnati Ohio',
    challenge: 'An investor-agent combo needed a pipeline of motivated seller and buyer leads plus ongoing CRM management across multiple investment properties.',
    solution: 'Built targeted lead lists, conducted outreach campaigns, maintained CRM with full pipeline visibility, and provided project management support to track deal progress across multiple active transactions.',
    result: 'A clean, organized CRM with active leads. Ongoing deal flow supported through consistent outreach and follow-up. Client retained Viziblex for extended multi-month engagement.',
  },
];

const CaseStudies = () => {
  return (
    <section className="case-studies-section" id="case-studies">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12" data-aos="fade-up">
            <span className="section-label">PROVEN TRACK RECORD</span>
            <h2 className="section-title">Case <span>Studies</span></h2>
            <div className="accent-line"></div>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', maxWidth: 540, fontSize: '0.95rem' }}>
              Real scenarios from real clients. Each case study represents the strategy, execution, and outcome delivered by the Viziblex team.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {caseStudies.map((cs, i) => (
            <div key={i} className="col-lg-4" data-aos="fade-up" data-aos-delay={i * 120}>
              <div className="case-study-card">
                <div className="case-number">Case Study [{cs.number}]</div>
                <h3 className="case-title">{cs.title}</h3>

                <div className="case-block">
                  <div className="case-block-label label-challenge">
                    <i className="fas fa-exclamation-circle"></i> Challenge
                  </div>
                  <p className="case-block-text">{cs.challenge}</p>
                </div>

                <div className="case-block">
                  <div className="case-block-label label-solution">
                    <i className="fas fa-lightbulb"></i> Solution
                  </div>
                  <p className="case-block-text">{cs.solution}</p>
                </div>

                <div className="case-block">
                  <div className="case-block-label label-result">
                    <i className="fas fa-chart-line"></i> Result
                  </div>
                  <p className="case-block-text">{cs.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
