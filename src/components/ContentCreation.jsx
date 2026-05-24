import React from 'react';
import '../styles/Extras.css';

const contentItems = [
  {
    type: 'Blog Article',
    icon: 'fa-pen-nib',
    title: '"Beware of Hidden Costs When Selling Your Home"',
    client: 'Brice Mentor · Home Master Realty',
    desc: 'A comprehensive seller\'s guide covering property preparation costs, professional photography, closing costs, and mortgage settlement. Written in Brice\'s voice to position him as a trusted authority.',
  },
  {
    type: 'Blog Article',
    icon: 'fa-pen-nib',
    title: '"Determining When to Sell Your Home"',
    client: 'Brice Mentor · Home Master Realty',
    desc: 'An in-depth guide covering equity position evaluation, financial readiness, market assessment, and decision-making frameworks. Designed to drive seller consultations.',
  },
  {
    type: 'Blog Article',
    icon: 'fa-pen-nib',
    title: '"Things To Do Before Selling a Home"',
    client: 'Brice Mentor · Home Master Realty',
    desc: 'A 7-step seller preparation guide covering agent selection, timing, curb appeal, decluttering, staging, and more. Built to attract serious sellers.',
  },
  {
    type: 'Monthly Newsletter',
    icon: 'fa-newspaper',
    title: 'October 2025 — "A Smart Month for Real Estate Decisions"',
    client: 'Brice Mentor · Home Master Realty',
    desc: 'Covered Florida market trends, mortgage rate updates, lifestyle spotlight, homeowner maintenance tips, and a market watch section. Sent to Brice\'s full CRM database.',
  },
  {
    type: 'Monthly Newsletter',
    icon: 'fa-newspaper',
    title: 'November 2025 — Thanksgiving Edition',
    client: 'Brice Mentor · Home Master Realty',
    desc: 'Thanksgiving-themed newsletter with market update, mortgage rate outlook, Florida fall living spotlight, and seller tips. Professionally formatted and delivered on time.',
  },
  {
    type: '12-Month Email Campaign',
    icon: 'fa-envelope-open-text',
    title: 'Post-Closing Drip Campaign',
    client: 'Brice Mentor · Home Master Realty',
    desc: 'A fully written 12-month post-closing nurture campaign. Each month contains 4 weekly emails covering thank you & check-in, market updates, homeowner tips, and referral asks. Designed for GoHighLevel.',
  },
  {
    type: '12-Month Email Campaign',
    icon: 'fa-envelope-open-text',
    title: 'First-Time Homebuyer Credit Education Series',
    client: 'Brice Mentor · Home Master Realty',
    desc: 'A 12-month educational email series nurturing first-time homebuyers from credit basics to mortgage readiness. Topics include credit score breakdown, utilization, credit mix, and mortgage pre-qualification.',
  },
];

const ContentCreation = () => {
  return (
    <section className="content-section" id="content">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="fade-up">
            <span className="section-label">CONTENT WE CREATE</span>
            <h2 className="section-title">Blogs · Newsletters · <span>Email Campaigns</span></h2>
            <div className="accent-line center"></div>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', maxWidth: 560, margin: '0 auto', fontSize: '0.95rem' }}>
              Writing that converts, educates, and builds trust. Below is a sample of content created by Viziblex for active US real estate clients — all delivered, published, and praised.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {contentItems.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={(i % 3) * 100}>
              <div className="content-card">
                <div className="content-type">
                  <i className={`fas ${item.icon}`}></i>
                  {item.type}
                </div>
                <h3 className="content-title">{item.title}</h3>
                <div className="content-client">
                  <i className="fas fa-user me-1"></i> {item.client}
                </div>
                <p className="content-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentCreation;
