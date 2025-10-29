import React from 'react';
import './CloudCTA.scss';

const CloudCTA = () => {
  return (
    <section className="cloud-cta">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to <span className="gradient-text">Transform</span> Your Business?
          </h2>
          <p className="cta-description">
            Let's discuss how our cloud solutions can accelerate your digital transformation 
            and drive business growth.
          </p>
          <div className="cta-actions">
            <button className="btn-primary">
              Schedule a Consultation
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-secondary">
              Contact Sales
            </button>
          </div>
        </div>

        <div className="cta-stats">
          <div className="stat-item">
            <div className="stat-number">99.9%</div>
            <div className="stat-label">Uptime Guarantee</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Expert Support</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Successful Migrations</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudCTA;

