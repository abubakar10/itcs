import React, { useEffect } from 'react';
import '../_shared/service-common.scss';
import './ITServicesNew.scss';

const ITHero = () => (
  <section className="service-hero it-hero">
    <div className="hero-background">
      <div className="it-pattern"></div>
    </div>
    <div className="hero-container">
      <div className="hero-badge">
        <span>⚙️</span>
        <span>MANAGED IT SERVICES</span>
      </div>
      <h1 className="hero-title">
        Focus on Your Business, We Handle
        <span className="gradient-text"> Your IT</span>
      </h1>
      <p className="hero-description">
        Comprehensive managed IT services that keep your technology running smoothly. From 24/7 
        support to infrastructure management, we've got you covered.
      </p>
      <div className="hero-actions">
        <button className="btn-primary">
          Get Support Now
          <span>→</span>
        </button>
        <button className="btn-secondary">
          View Services
        </button>
      </div>
      <div className="hero-badges-row">
        <div className="badge-item">
          <span>⏰</span>
          <span>24/7 Support</span>
        </div>
        <div className="badge-item">
          <span>🔧</span>
          <span>Proactive Monitoring</span>
        </div>
        <div className="badge-item">
          <span>✅</span>
          <span>99.9% Uptime</span>
        </div>
      </div>
    </div>
  </section>
);

const ITFeatures = () => {
  const features = [
    { icon: '🖥️', title: 'Help Desk Support', description: '24/7 technical support for all your IT needs with fast response times.' },
    { icon: '📡', title: 'Infrastructure Management', description: 'Complete management of your IT infrastructure for optimal performance.' },
    { icon: '🔄', title: 'System Maintenance', description: 'Regular updates, patches, and maintenance to keep systems running smoothly.' },
    { icon: '💾', title: 'Backup & Recovery', description: 'Automated backup solutions with rapid disaster recovery capabilities.' },
    { icon: '👁️', title: 'Network Monitoring', description: 'Proactive monitoring to identify and resolve issues before they impact your business.' },
    { icon: '📞', title: 'Remote Support', description: 'Quick resolution of IT issues with secure remote assistance.' }
  ];

  return (
    <section className="service-features">
      <div className="features-container">
        <div className="features-header">
          <span className="section-badge">COMPREHENSIVE COVERAGE</span>
          <h2 className="section-title">Complete IT Management</h2>
          <p className="section-description">
            End-to-end IT services to keep your business running at peak performance.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, idx) => (
            <div className="feature-card" key={idx}>
              <div style={{fontSize: '48px', marginBottom: '20px'}}>{feature.icon}</div>
              <h3 style={{fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px'}}>{feature.title}</h3>
              <p style={{fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6}}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ITCTA = () => (
  <section className="service-cta">
    <div className="cta-container">
      <h2 style={{fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '20px'}}>
        Let Us <span className="gradient-text">Manage</span> Your IT
      </h2>
      <p style={{fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 40px'}}>
        Experience worry-free IT with our managed services. Get started today.
      </p>
      <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '50px'}}>
        <button className="btn-primary" style={{padding: '16px 32px', fontSize: '16px', fontWeight: 600, borderRadius: '12px', border: 'none', cursor: 'pointer', background: 'var(--accent-gradient)', color: 'white'}}>
          Start Free Trial
        </button>
        <button className="btn-secondary" style={{padding: '16px 32px', fontSize: '16px', fontWeight: 600, borderRadius: '12px', border: '1px solid var(--border-color)', cursor: 'pointer', background: 'var(--bg-card)', color: 'var(--text-primary)'}}>
          Talk to Expert
        </button>
      </div>
      <div className="cta-stats">
        <div className="stat-item">
          <div className="stat-number">400+</div>
          <div className="stat-label">Managed Systems</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-number">&lt;5min</div>
          <div className="stat-label">Avg Response Time</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-number">99.9%</div>
          <div className="stat-label">System Uptime</div>
        </div>
      </div>
    </div>
  </section>
);

const ITServicesNew = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ITHero />
      <ITFeatures />
      <ITCTA />
    </>
  );
};

export default ITServicesNew;

