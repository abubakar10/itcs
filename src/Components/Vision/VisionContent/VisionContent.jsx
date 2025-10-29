import React from "react";
import "./VisionContent.scss";

const VisionContent = () => {
  const visionPoints = [
    {
      icon: "🎯",
      title: "Our Vision",
      description: "To be the leading technology partner in the region, driving digital transformation and innovation across industries. We envision a future where technology seamlessly integrates with business to create unprecedented value and opportunities."
    },
    {
      icon: "🚀",
      title: "Our Mission",
      description: "To deliver cutting-edge IT solutions that empower businesses to achieve their full potential. We are committed to excellence, innovation, and building lasting partnerships with our clients through reliable service and expert guidance."
    },
    {
      icon: "💡",
      title: "Our Purpose",
      description: "We exist to simplify complex technology challenges and make innovation accessible to businesses of all sizes. By combining technical expertise with business understanding, we help organizations navigate the digital landscape confidently."
    }
  ];

  const coreValues = [
    {
      number: "01",
      title: "Innovation",
      description: "We embrace change and continuously seek new ways to solve problems and create value."
    },
    {
      number: "02",
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to client service."
    },
    {
      number: "03",
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices at all times."
    },
    {
      number: "04",
      title: "Collaboration",
      description: "We work together, leveraging diverse perspectives to achieve extraordinary results."
    },
    {
      number: "05",
      title: "Customer Focus",
      description: "We put our clients at the center, understanding their needs and exceeding expectations."
    },
    {
      number: "06",
      title: "Growth",
      description: "We invest in our people and foster continuous learning and professional development."
    }
  ];

  return (
    <>
      <section className="vision-content">
        <div className="content-container">
          {visionPoints.map((point, index) => (
            <div key={index} className="vision-card">
              <div className="card-icon">{point.icon}</div>
              <h2>{point.title}</h2>
              <p>{point.description}</p>
              <div className="card-glow"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="core-values">
        <div className="values-container">
          <div className="section-header">
            <span className="section-badge">CORE VALUES</span>
            <h2>What We Stand For</h2>
            <p>Our values guide everything we do and shape our culture</p>
          </div>
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-number">{value.number}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionContent;

