import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../_shared/service-common.scss';
import './ITServicesNew.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faClock, faWrench, faCheck, faDesktop, faBroadcastTower, faSync, faSave, faEye, faPhone } from '@fortawesome/free-solid-svg-icons';
const ITHero = () => (
  <section className="service-hero it-hero">
    <div className="hero-background">
      <div className="it-pattern"></div>
    </div>
    <div className="hero-container">
      <div className="hero-badge">
        <FontAwesomeIcon icon={faCog} />
        <span>MANAGED IT SERVICES</span>
      </div>
      <h1 className="hero-title">
        Enterprise-Grade IT Powered by
        <span className="gradient-text"> Dell, HP & VMware</span>
      </h1>
      <p className="hero-description">
        We provide professional managed services leveraging Dell and HP hardware expertise, combined with VMware virtualization and Veeam availability solutions to keep your business running 24/7.
      </p>
      <div className="hero-actions">
        <Link to="/contact" className="btn-primary">
          Get Support Now
          <span>→</span>
        </Link>
        <a href="#it-services" className="btn-secondary">
          View Services
        </a>
      </div>
      <div className="hero-badges-row">
        <div className="badge-item">
          <FontAwesomeIcon icon={faClock} />
          <span>VMware Ops</span>
        </div>
        <div className="badge-item">
          <FontAwesomeIcon icon={faWrench} />
          <span>Dell/HP Support</span>
        </div>
        <div className="badge-item">
          <FontAwesomeIcon icon={faCheck} />
          <span>Veeam Backups</span>
        </div>
      </div>
    </div>
  </section>
);

const ITFeatures = () => {
  const features = [
    { icon: faDesktop, title: 'Hardware Management', description: 'Certified support and procurement for Dell and HP workstations, servers, and desktops.' },
    { icon: faBroadcastTower, title: 'VMware Virtualization', description: 'Expert implementation and management of VMware vSphere and ESXi virtualization platforms.' },
    { icon: faSync, title: 'Availability Solutions', description: 'Ensuring 99.9% uptime with Veeam Backup & Replication for data protection.' },
    { icon: faSave, title: 'Disaster Recovery', description: 'Cloud-integrated disaster recovery planning using Veeam and Azure technologies.' },
    { icon: faEye, title: 'Proactive Monitoring', description: 'Advanced system health monitoring for your entire Dell and HP infrastructure.' },
    { icon: faPhone, title: '24/7 Expert Support', description: 'Unlimited remote and on-site support for your physical and virtual environments.' }
  ];

  return (
    <section className="service-features" id="it-services">
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

const ITCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="service-cta">
      <div className="cta-container">
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '20px' }}>
          Let Us <span className="gradient-text">Manage</span> Your IT
        </h2>
        <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 40px' }}>
          Experience worry-free IT with our managed services. Get started today.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '50px' }}>
          <button className="btn-primary" onClick={() => navigate('/contact')} style={{ padding: '16px 32px', fontSize: '16px', fontWeight: 600, borderRadius: '12px', border: 'none', cursor: 'pointer', background: 'var(--accent-gradient)', color: 'white' }}>
            Start Free Trial
          </button>
          <button className="btn-secondary" onClick={() => navigate('/contact')} style={{ padding: '16px 32px', fontSize: '16px', fontWeight: 600, borderRadius: '12px', border: '1px solid var(--border-color)', cursor: 'pointer', background: 'var(--bg-card)', color: 'var(--text-primary)' }}>
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
};

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

