import React from 'react';
import './CyberCTA.scss';

const CyberCTA = () => {
  return (
    <section className="cyber-cta">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">
            Don't Wait for a <span className="gradient-text">Breach</span>
          </h2>
          <p className="cta-description">
            Protect your business now with our comprehensive cybersecurity solutions. 
            Get a free security assessment today.
          </p>
          <div className="cta-actions">
            <button className="btn-primary">
              Get Free Assessment
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-secondary">
              Contact Security Team
            </button>
          </div>
        </div>

        <div className="cta-stats">
          <div className="stat-item">
            <div className="stat-number">0</div>
            <div className="stat-label">Breaches (Our Track Record)</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Security Monitoring</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">300+</div>
            <div className="stat-label">Protected Businesses</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberCTA;

