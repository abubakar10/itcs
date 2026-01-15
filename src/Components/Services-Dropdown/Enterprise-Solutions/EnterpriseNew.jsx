import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../_shared/service-common.scss';
import './EnterpriseNew.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faChartBar, faSync, faMobileAlt, faLink, faUsers } from '@fortawesome/free-solid-svg-icons';

const EnterpriseHero = () => (
  <section className="service-hero enterprise-hero">
    <div className="hero-background">
      <div className="enterprise-pattern"></div>
    </div>
    <div className="hero-container">
      <div className="hero-badge">
        <FontAwesomeIcon icon={faBuilding} />
        <span>ENTERPRISE SOLUTIONS</span>
      </div>
      <h1 className="hero-title">
        Enterprise-Ready
        <span className="gradient-text"> Microsoft & SAP Solutions</span>
      </h1>
      <p className="hero-description">
        Unlock your business potential with world-class ERP and CRM systems from Microsoft Dynamics 365 and SAP, integrated seamlessly for maximum performance.
      </p>
      <div className="hero-actions">
        <a href="#enterprise-solutions" className="btn-primary">
          Explore Solutions
          <span>→</span>
        </a>
        <Link to="/contact" className="btn-secondary">
          Request Demo
        </Link>
      </div>
      <div className="hero-badges-row">
        <div className="badge-item">
          <FontAwesomeIcon icon={faChartBar} />
          <span>Dynamics 365</span>
        </div>
        <div className="badge-item">
          <FontAwesomeIcon icon={faSync} />
          <span>SAP Integration</span>
        </div>
        <div className="badge-item">
          <FontAwesomeIcon icon={faChartBar} />
          <span>Business Intelligence</span>
        </div>
      </div>
    </div>
  </section>
);

const EnterpriseFeatures = () => {
  const features = [
    { icon: faBuilding, title: 'ERP Systems', description: 'Comprehensive ERP implementations focusing on Microsoft Dynamics 365 and SAP architectures.' },
    { icon: faUsers, title: 'CRM Solutions', description: 'Customer relationship management platforms to enhance engagement using Dynamics 365 CRM.' },
    { icon: faChartBar, title: 'Web Hosting Controls', description: 'Enterprise-grade hosting management with licensed CPanel and Plesk solutions.' },
    { icon: faSync, title: 'Workflow Automation', description: 'Streamline your enterprise processes with automated data flows and system integrations.' },
    { icon: faMobileAlt, title: 'Mobile Business Apps', description: 'Custom mobile extensions for your enterprise systems to manage business on-the-go.' },
    { icon: faLink, title: 'API & Legacy Integration', description: 'Connecting your modern enterprise apps with legacy databases and third-party APIs.' }
  ];

  return (
    <section className="service-features" id="enterprise-solutions">
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
              <div className="feature-icon">
                <FontAwesomeIcon icon={feature.icon} size="2x" />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>{feature.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EnterpriseCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="service-cta">
      <div className="cta-container">
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '20px' }}>
          Ready to <span className="gradient-text">Scale</span> Your Business?
        </h2>
        <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 40px' }}>
          Let's discuss how our enterprise solutions can transform your operations.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '50px' }}>
          <button className="btn-primary" onClick={() => navigate('/contact')} style={{ padding: '16px 32px', fontSize: '16px', fontWeight: 600, borderRadius: '12px', border: 'none', cursor: 'pointer', background: 'var(--accent-gradient)', color: 'white' }}>
            Get Started
          </button>
          <button className="btn-secondary" onClick={() => navigate('/contact')} style={{ padding: '16px 32px', fontSize: '16px', fontWeight: 600, borderRadius: '12px', border: '1px solid var(--border-color)', cursor: 'pointer', background: 'var(--bg-card)', color: 'var(--text-primary)' }}>
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
};

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

