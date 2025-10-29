import React from "react";
import "./AboutValues.scss";

const AboutValues = () => {
  const values = [
    {
      icon: "💡",
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to stay ahead of the curve."
    },
    {
      icon: "🎯",
      title: "Excellence",
      description: "We maintain the highest standards in service delivery and customer satisfaction."
    },
    {
      icon: "🤝",
      title: "Integrity",
      description: "We build trust through transparency, honesty, and ethical business practices."
    },
    {
      icon: "🚀",
      title: "Growth",
      description: "We invest in continuous learning and development for our team and clients."
    },
    {
      icon: "👥",
      title: "Teamwork",
      description: "We collaborate effectively to achieve extraordinary results together."
    },
    {
      icon: "❤️",
      title: "Customer Focus",
      description: "We put our clients first and build lasting partnerships based on mutual success."
    }
  ];

  return (
    <section className="about-values">
      <div className="values-container">
        <div className="section-header">
          <span className="section-badge">OUR VALUES</span>
          <h2>What Drives Us Forward</h2>
          <p>These core principles guide our actions and define who we are as a company</p>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card" data-index={index}>
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
              <div className="card-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;

