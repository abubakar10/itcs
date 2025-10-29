import React, { useEffect } from 'react';
import '../_shared/service-common.scss';
import './EnterpriseNew.scss';

const EnterpriseHero = () => (
  <section className="service-hero enterprise-hero">
    <div className="hero-background">
      <div className="enterprise-pattern"></div>
    </div>
    <div className="hero-container">
      <div className="hero-badge">
        <span>🏢</span>
        <span>ENTERPRISE SOLUTIONS</span>
      </div>
      <h1 className="hero-title">
        Empower Your Enterprise with
        <span className="gradient-text"> Intelligent Solutions</span>
      </h1>
      <p className="hero-description">
        Transform your business operations with comprehensive enterprise solutions. From ERP to CRM, 
        we provide integrated systems that drive efficiency and growth.
      </p>
      <div className="hero-actions">
        <button className="btn-primary">
          Explore Solutions
          <span>→</span>
        </button>
        <button className="btn-secondary">
          Request Demo
        </button>
      </div>
      <div className="hero-badges-row">
        <div className="badge-item">
          <span>📊</span>
          <span>Integrated Systems</span>
        </div>
        <div className="badge-item">
          <span>🔄</span>
          <span>Process Automation</span>
        </div>
        <div className="badge-item">
          <span>📈</span>
          <span>Business Intelligence</span>
        </div>
      </div>
    </div>
  </section>
);

const EnterpriseFeatures = () => {
  const features = [
    { icon: '🏗️', title: 'ERP Systems', description: 'Comprehensive enterprise resource planning solutions for streamlined operations.' },
    { icon: '👥', title: 'CRM Solutions', description: 'Customer relationship management platforms to enhance customer engagement.' },
    { icon: '📊', title: 'Business Intelligence', description: 'Data analytics and reporting tools for informed decision-making.' },
    { icon: '🔄', title: 'Workflow Automation', description: 'Automate business processes for increased efficiency and reduced errors.' },
    { icon: '📱', title: 'Mobile Solutions', description: 'Enterprise mobile applications for on-the-go business management.' },
    { icon: '🔗', title: 'System Integration', description: 'Seamlessly integrate existing systems for unified business operations.' }
  ];

  return (
    <section className="service-features">
      <div className="features-container">
        <div className="features-header">
          <span className="section-badge">COMPLETE SOLUTIONS</span>
          <h2 className="section-title">Enterprise-Grade Applications</h2>
          <p className="section-description">
            Powerful solutions designed to meet the complex needs of modern enterprises.
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

const EnterpriseCTA = () => (
  <section className="service-cta">
    <div className="cta-container">
      <h2 style={{fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '20px'}}>
        Ready to <span className="gradient-text">Scale</span> Your Business?
      </h2>
      <p style={{fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 40px'}}>
        Let's discuss how our enterprise solutions can transform your operations.
      </p>
      <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '50px'}}>
        <button className="btn-primary" style={{padding: '16px 32px', fontSize: '16px', fontWeight: 600, borderRadius: '12px', border: 'none', cursor: 'pointer', background: 'var(--accent-gradient)', color: 'white'}}>
          Get Started
        </button>
        <button className="btn-secondary" style={{padding: '16px 32px', fontSize: '16px', fontWeight: 600, borderRadius: '12px', border: '1px solid var(--border-color)', cursor: 'pointer', background: 'var(--bg-card)', color: 'var(--text-primary)'}}>
          Contact Sales
        </button>
      </div>
      <div className="cta-stats">
        <div className="stat-item">
          <div className="stat-number">150+</div>
          <div className="stat-label">Enterprise Clients</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-number">99.5%</div>
          <div className="stat-label">System Uptime</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-number">50M+</div>
          <div className="stat-label">Transactions Processed</div>
        </div>
      </div>
    </div>
  </section>
);

const EnterpriseNew = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <EnterpriseHero />
      <EnterpriseFeatures />
      <EnterpriseCTA />
    </>
  );
};

export default EnterpriseNew;

