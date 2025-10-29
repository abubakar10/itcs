import React from 'react';
import './CyberHero.scss';

const CyberHero = () => {
  return (
    <section className="cyber-hero">
      <div className="hero-background">
        <div className="cyber-grid"></div>
        <div className="shield-icon shield-1">🛡️</div>
        <div className="shield-icon shield-2">🔒</div>
        <div className="shield-icon shield-3">🔐</div>
      </div>

      <div className="hero-container">
        <div className="hero-badge">
          <span className="badge-icon">🛡️</span>
          <span>ENTERPRISE SECURITY SOLUTIONS</span>
        </div>

        <h1 className="hero-title">
          Protect Your Business with
          <span className="gradient-text"> Advanced Cybersecurity</span>
        </h1>

        <p className="hero-description">
          Comprehensive cybersecurity solutions to safeguard your business from evolving 
          threats. Stay protected with our proactive security measures and expert monitoring.
        </p>

        <div className="hero-actions">
          <button className="btn-primary">
            Get Protected Now
            <span className="btn-arrow">→</span>
          </button>
          <button className="btn-secondary">
            Security Assessment
            <span className="btn-icon">▶</span>
          </button>
        </div>

        <div className="hero-badges-row">
          <div className="badge-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Advanced Protection</span>
          </div>
          <div className="badge-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>24/7 Monitoring</span>
          </div>
          <div className="badge-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Compliance Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberHero;

