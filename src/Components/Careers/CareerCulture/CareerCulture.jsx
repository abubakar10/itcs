import React from "react";
import "./CareerCulture.scss";

const CareerCulture = () => {
  const values = [
    {
      title: "Innovation First",
      description: "We encourage creative thinking and embrace new ideas that push boundaries."
    },
    {
      title: "Collaboration",
      description: "Success comes from working together, sharing knowledge, and supporting each other."
    },
    {
      title: "Growth Mindset",
      description: "Continuous learning and development are at the core of everything we do."
    },
    {
      title: "Work-Life Balance",
      description: "We believe in sustainable success that respects personal time and well-being."
    }
  ];

  return (
    <section className="career-culture" id="culture">
      <div className="culture-container">
        <div className="culture-content">
          <div className="content-left">
            <span className="section-badge">OUR CULTURE</span>
            <h2>Where Innovation Meets Collaboration</h2>
            <p className="lead-text">
              At ITCS, we've built a culture that celebrates diversity, encourages innovation, 
              and supports personal growth. Join a team that values your ideas and invests in your future.
            </p>
            <div className="values-list">
              {values.map((value, index) => (
                <div key={index} className="value-item">
                  <div className="value-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="value-content">
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="content-right">
            <div className="culture-grid">
              <div className="culture-stat">
                <h3>95%</h3>
                <p>Employee Satisfaction</p>
              </div>
              <div className="culture-stat">
                <h3>4.8/5</h3>
                <p>Glassdoor Rating</p>
              </div>
              <div className="culture-stat">
                <h3>3 Years</h3>
                <p>Avg. Tenure</p>
              </div>
              <div className="culture-stat">
                <h3>40+</h3>
                <p>Nationalities</p>
              </div>
            </div>
            <div className="culture-quote">
              <div className="quote-icon">"</div>
              <p>
                "ITCS has been an incredible place to grow my career. The support from leadership 
                and the collaborative environment make every day rewarding."
              </p>
              <div className="quote-author">
                <strong>Sarah Ahmed</strong>
                <span>Senior Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerCulture;

