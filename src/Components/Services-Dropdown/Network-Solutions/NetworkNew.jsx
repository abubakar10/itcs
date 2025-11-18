import React, { useEffect } from 'react';
import '../_shared/service-common.scss';
import './NetworkNew.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLock, faBolt, faChartLine, faSearch, faTools, faProjectDiagram, faShieldAlt, faWifi } from '@fortawesome/free-solid-svg-icons';

const NetworkHero = () => (
  <section className="service-hero network-hero">
    <div className="hero-background">
      <div className="network-pattern"></div>
    </div>
    <div className="hero-container">
      <div className="hero-badge">
        <FontAwesomeIcon icon={faGlobe} />
        <span>NETWORK SOLUTIONS</span>
      </div>
      <h1 className="hero-title">
        Build Reliable and Secure
        <span className="gradient-text"> Network Infrastructure</span>
      </h1>
      <p className="hero-description">
        Design, implement, and manage robust network solutions that ensure seamless connectivity, 
        optimal performance, and enterprise-grade security.
      </p>
      <div className="hero-actions">
        <button className="btn-primary">
          Get Assessment
          <span>→</span>
        </button>
        <button className="btn-secondary">
          View Solutions
        </button>
      </div>
      <div className="hero-badges-row">
        <div className="badge-item">
          <FontAwesomeIcon icon={faLock} />
          <span>Secure Networks</span>
        </div>
        <div className="badge-item">
          <FontAwesomeIcon icon={faBolt} />
          <span>High Performance</span>
        </div>
        <div className="badge-item">
          <FontAwesomeIcon icon={faChartLine} />
          <span>Real-time Monitoring</span>
        </div>
      </div>
    </div>
  </section>
);

const NetworkFeatures = () => {
  const features = [
    { icon: faProjectDiagram, title: 'Network Design', description: 'Custom network architecture tailored to your business requirements.' },
    { icon: faShieldAlt, title: 'Security Implementation', description: 'Advanced firewalls, VPNs, and security protocols to protect your network.' },
    { icon: faWifi, title: 'Wireless Solutions', description: 'Enterprise-grade WiFi solutions for seamless connectivity.' },
    { icon: faChartLine, title: 'Performance Optimization', description: 'Network optimization for maximum speed and reliability.' },
    { icon: faSearch, title: 'Network Monitoring', description: 'Proactive monitoring and management for peak performance.' },
    { icon: faTools, title: 'Maintenance & Support', description: '24/7 network support and maintenance services.' }
  ];

  return (
    <section className="service-features">
      <div className="features-container">
        <div className="features-header">
          <span className="section-badge">COMPREHENSIVE NETWORKING</span>
          <h2 className="section-title">Complete Network Solutions</h2>
          <p className="section-description">
            From design to deployment and ongoing management, we handle all aspects of your network infrastructure.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, idx) => (
            <div className="feature-card" key={idx}>
               <div className="feature-icon">
                <FontAwesomeIcon icon={feature.icon} size="2x" />
              </div>
              <h3 style={{fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px'}}>{feature.title}</h3>
              <p style={{fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6}}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NetworkCTA = () => (
  <section className="service-cta">
    <div className="cta-container">
      <h2 style={{fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '20px'}}>
        Upgrade Your <span className="gradient-text">Network</span> Infrastructure
      </h2>
      <p style={{fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 40px'}}>
        Get a free network assessment and discover how we can improve your connectivity.
      </p>
      <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '50px'}}>
        <button className="btn-primary" style={{padding: '16px 32px', fontSize: '16px', fontWeight: 600, borderRadius: '12px', border: 'none', cursor: 'pointer', background: 'var(--accent-gradient)', color: 'white'}}>
          Free Assessment
        </button>
        <button className="btn-secondary" style={{padding: '16px 32px', fontSize: '16px', fontWeight: 600, borderRadius: '12px', border: '1px solid var(--border-color)', cursor: 'pointer', background: 'var(--bg-card)', color: 'var(--text-primary)'}}>
          Contact Team
        </button>
      </div>
      <div className="cta-stats">
        <div className="stat-item">
          <div className="stat-number">250+</div>
          <div className="stat-label">Networks Deployed</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-number">99.99%</div>
          <div className="stat-label">Network Uptime</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-number">10Gbps+</div>
          <div className="stat-label">Network Speeds</div>
        </div>
      </div>
    </div>
  </section>
);

const NetworkNew = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NetworkHero />
      <NetworkFeatures />
      <NetworkCTA />
    </>
  );
};

export default NetworkNew;

