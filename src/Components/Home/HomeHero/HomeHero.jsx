import React from 'react';
import './HomeHero.scss';

const HomeHero = () => {
  return (
    <section className="home-hero">
      <div className="hero-background">
        <div className="hero-grid"></div>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-badge">
          <span className="badge-icon">⚡</span>
          <span>PAKISTAN'S TOP MICROSOFT CSP TIER-1 DIRECT PARTNER</span>
        </div>
        
        <h1 className="hero-title">
          Innovate Faster with
          <span className="gradient-text"> Microsoft Cloud</span>
        </h1>
        
        <p className="hero-description">
          Transform your business with cutting-edge cloud solutions. 
          We help organizations accelerate digital transformation with Microsoft's 
          powerful cloud platform and our expert guidance.
        </p>
        
        <div className="hero-actions">
          <button className="btn-primary">
            Get Started
            <span className="btn-arrow">→</span>
          </button>
          <button className="btn-secondary">
            Learn More
            <span className="btn-icon">▶</span>
          </button>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">13+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">497+</div>
            <div className="stat-label">Satisfied Clients</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">954+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

