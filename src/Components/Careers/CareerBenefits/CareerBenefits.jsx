import React from "react";
import "./CareerBenefits.scss";

const CareerBenefits = () => {
  const benefits = [
    {
      icon: "💰",
      title: "Competitive Salary",
      description: "Industry-leading compensation packages with performance bonuses and annual reviews."
    },
    {
      icon: "🏥",
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and fitness programs."
    },
    {
      icon: "🌴",
      title: "Flexible Time Off",
      description: "Generous vacation policy, sick leave, and paid holidays for work-life balance."
    },
    {
      icon: "🚀",
      title: "Career Growth",
      description: "Professional development opportunities, training programs, and clear career paths."
    },
    {
      icon: "💻",
      title: "Remote Work",
      description: "Hybrid work model with modern equipment and home office setup allowance."
    },
    {
      icon: "🎓",
      title: "Learning Budget",
      description: "Annual budget for courses, conferences, certifications, and skill development."
    },
    {
      icon: "👥",
      title: "Team Events",
      description: "Regular team building activities, company retreats, and social gatherings."
    },
    {
      icon: "🍕",
      title: "Perks & More",
      description: "Free meals, snacks, game rooms, and a vibrant office environment."
    }
  ];

  return (
    <section className="career-benefits">
      <div className="benefits-container">
        <div className="section-header">
          <span className="section-badge">BENEFITS</span>
          <h2>Why Join Our Team?</h2>
          <p>We believe in taking care of our people. Here's what we offer to help you thrive.</p>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card" data-index={index}>
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerBenefits;

