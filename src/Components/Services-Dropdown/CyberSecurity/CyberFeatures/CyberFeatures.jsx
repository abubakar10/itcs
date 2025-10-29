import React from 'react';
import './CyberFeatures.scss';

const CyberFeatures = () => {
  const features = [
    {
      icon: '🔍',
      title: 'Threat Detection',
      description: 'Advanced AI-powered threat detection and real-time monitoring to identify and neutralize threats before they cause damage.'
    },
    {
      icon: '🔒',
      title: 'Data Encryption',
      description: 'Military-grade encryption for data at rest and in transit, ensuring your sensitive information stays protected.'
    },
    {
      icon: '🛡️',
      title: 'Firewall Protection',
      description: 'Next-generation firewall solutions with deep packet inspection and intrusion prevention systems.'
    },
    {
      icon: '👁️',
      title: 'Security Audits',
      description: 'Comprehensive security assessments and vulnerability testing to identify and address potential weaknesses.'
    },
    {
      icon: '⚡',
      title: 'Incident Response',
      description: 'Rapid incident response team available 24/7 to handle security breaches and minimize damage.'
    },
    {
      icon: '📋',
      title: 'Compliance Management',
      description: 'Ensure compliance with industry standards including GDPR, HIPAA, PCI-DSS, and ISO 27001.'
    }
  ];

  return (
    <section className="cyber-features">
      <div className="features-container">
        <div className="features-header">
          <span className="section-badge">COMPREHENSIVE PROTECTION</span>
          <h2 className="section-title">Multi-Layered Security Approach</h2>
          <p className="section-description">
            Protect your digital assets with our comprehensive cybersecurity solutions 
            designed to defend against modern threats.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="card-icon">{feature.icon}</div>
              <h3 className="card-title">{feature.title}</h3>
              <p className="card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyberFeatures;

