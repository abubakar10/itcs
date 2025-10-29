import React, { useEffect } from 'react';
import '../_shared/service-common.scss';
import './ConsultingNew.scss';

const ConsultingHero = () => (
  <section className="service-hero consulting-hero">
    <div className="hero-background">
      <div className="consulting-pattern"></div>
    </div>
    <div className="hero-container">
      <div className="hero-badge">
        <span>💼</span>
        <span>STRATEGIC IT CONSULTING</span>
      </div>
      <h1 className="hero-title">
        Transform Your Business with
        <span className="gradient-text"> Expert IT Consulting</span>
      </h1>
      <p className="hero-description">
        Navigate digital transformation with confidence. Our expert consultants help you align 
        technology with business goals for sustainable growth and competitive advantage.
      </p>
      <div className="hero-actions">
        <button className="btn-primary">
          Start Consultation
          <span>→</span>
        </button>
        <button className="btn-secondary">
          View Services
        </button>
      </div>
      <div className="hero-badges-row">
        <div className="badge-item">
          <span>📊</span>
          <span>Strategic Planning</span>
        </div>
        <div className="badge-item">
          <span>🎯</span>
          <span>Goal Alignment</span>
        </div>
        <div className="badge-item">
          <span>📈</span>
          <span>Growth Focused</span>
        </div>
      </div>
    </div>
  </section>
);

const ConsultingFeatures = () => {
  const features = [
    { icon: '🎯', title: 'IT Strategy & Planning', description: 'Develop comprehensive IT strategies aligned with your business objectives.' },
    { icon: '💡', title: 'Digital Transformation', description: 'Guide your organization through successful digital transformation initiatives.' },
    { icon: '🔍', title: 'Technology Assessment', description: 'Evaluate your current technology landscape and identify improvement opportunities.' },
    { icon: '🛠️', title: 'Solution Architecture', description: 'Design scalable and efficient technology solutions for your business needs.' },
    { icon: '📊', title: 'Process Optimization', description: 'Streamline business processes through technology integration and automation.' },
    { icon: '👥', title: 'Change Management', description: 'Ensure smooth technology adoption with comprehensive change management support.' }
  ];

  return (
    <section className="service-features">
      <div className="features-container">
        <div className="features-header">
          <span className="section-badge">OUR EXPERTISE</span>
          <h2 className="section-title">Comprehensive Consulting Services</h2>
          <p className="section-description">
            Strategic guidance and expert advice to help you make informed technology decisions.
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

const ConsultingCTA = () => (
  <section className="service-cta">
    <div className="cta-container">
      <h2 style={{fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '20px'}}>
        Ready to <span className="gradient-text">Transform</span> Your IT Strategy?
      </h2>
      <p style={{fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 40px'}}>
        Let our experienced consultants help you navigate your digital transformation journey.
      </p>
      <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '50px'}}>
        <button className="btn-primary" style={{padding: '16px 32px', fontSize: '16px', fontWeight: 600, borderRadius: '12px', border: 'none', cursor: 'pointer', background: 'var(--accent-gradient)', color: 'white'}}>
          Schedule Consultation
        </button>
        <button className="btn-secondary" style={{padding: '16px 32px', fontSize: '16px', fontWeight: 600, borderRadius: '12px', border: '1px solid var(--border-color)', cursor: 'pointer', background: 'var(--bg-card)', color: 'var(--text-primary)'}}>
          Contact Us
        </button>
      </div>
      <div className="cta-stats">
        <div className="stat-item">
          <div className="stat-number">200+</div>
          <div className="stat-label">Successful Projects</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-number">15+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-number">98%</div>
          <div className="stat-label">Client Satisfaction</div>
        </div>
      </div>
    </div>
  </section>
);

const ConsultingNew = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ConsultingHero />
      <ConsultingFeatures />
      <ConsultingCTA />
    </>
  );
};

export default ConsultingNew;

