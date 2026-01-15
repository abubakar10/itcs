import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
        Enterprise-Grade
        <span className="gradient-text"> Cisco & Ruijie Networking</span>
      </h1>
      <p className="hero-description">
        We specialize in Cisco routing, Ruijie wireless solutions, and SolarWinds performance monitoring to ensure your business stays connected and secure.
      </p>
      <div className="hero-actions">
        <Link to="/contact" className="btn-primary">
          Get Assessment
          <span>→</span>
        </Link>
        <a href="#network-solutions" className="btn-secondary">
          View Solutions
        </a>
      </div>
      <div className="hero-badges-row">
        <div className="badge-item">
          <FontAwesomeIcon icon={faLock} />
          <span>Cisco Security</span>
        </div>
        <div className="badge-item">
          <FontAwesomeIcon icon={faBolt} />
          <span>Ruijie WIFI 6</span>
        </div>
        <div className="badge-item">
          <FontAwesomeIcon icon={faChartLine} />
          <span>SolarWinds Monitoring</span>
        </div>
      </div>
    </div>
  </section>
);

const NetworkFeatures = () => {
  const features = [
    { icon: faProjectDiagram, title: 'Cisco Core Networking', description: 'Advanced routing and switching architecture using industry-standard Cisco hardware.' },
    { icon: faShieldAlt, title: 'Security Implementation', description: 'Enterprise firewalls and VPNs from Cisco and Fortinet to protect your data.' },
    { icon: faWifi, title: 'Ruijie Wireless', description: 'High-density WIFI 6 solutions from Ruijie for seamless indoor and outdoor coverage.' },
    { icon: faChartLine, title: 'Performance Optimization', description: 'Network tuning for maximum speed using SolarWinds monitoring insights.' },
    { icon: faSearch, title: 'SolarWinds Monitoring', description: 'Proactive 24/7 network performance monitoring with automated alerts.' },
    { icon: faTools, title: 'Maintenance & Support', description: 'Expert technical support for your entire Cisco and Ruijie infrastructure.' }
  ];

  return (
    <section className="service-features" id="network-solutions">
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
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>{feature.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NetworkCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="service-cta">
      <div className="cta-container">
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '20px' }}>
          Upgrade Your <span className="gradient-text">Network</span> Infrastructure
        </h2>
        <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 40px' }}>
          Get a free network assessment and discover how we can improve your connectivity.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '50px' }}>
          <button className="btn-primary" onClick={() => navigate('/contact')} style={{ padding: '16px 32px', fontSize: '16px', fontWeight: 600, borderRadius: '12px', border: 'none', cursor: 'pointer', background: 'var(--accent-gradient)', color: 'white' }}>
            Free Assessment
          </button>
          <button className="btn-secondary" onClick={() => navigate('/contact')} style={{ padding: '16px 32px', fontSize: '16px', fontWeight: 600, borderRadius: '12px', border: '1px solid var(--border-color)', cursor: 'pointer', background: 'var(--bg-card)', color: 'var(--text-primary)' }}>
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
};

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

