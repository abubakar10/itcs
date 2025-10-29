import React from "react";
import "./HomeServices.scss";
import CloudLogo from "./../../../assets/logos/Cloud.svg";
import SoftwareLicensing from "./../../../assets/logos/SoftwareLicensing.svg";
import MordernWorkplace from "./../../../assets/logos/MordernWorkplace.svg";

const HomeServices = () => {
  const services = [
    {
      icon: MordernWorkplace,
      title: "MODERN WORKPLACE",
      description: "Unleash the potential of modern work with an array of transformative solutions.",
      color: "#667eea"
    },
    {
      icon: CloudLogo,
      title: "CLOUD COMPUTING",
      description: "We are equipped to guide you through the transformative potential of Azure.",
      color: "#4a9eff"
    },
    {
      icon: SoftwareLicensing,
      title: "SOFTWARE LICENSING",
      description: "Choose the licensing option that aligns seamlessly with your business rhythm.",
      color: "#3d8eef"
    }
  ];

  return (
    <section className="home-services">
      <div className="services-container">
        <div className="services-header">
          <span className="section-badge">WHAT WE OFFER</span>
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-description">
            Comprehensive IT solutions designed to drive your business forward
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              className="service-card" 
              key={index}
              style={{'--card-color': service.color}}
            >
              <div className="card-glow"></div>
              <div className="card-icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
              <button className="card-link">
                Learn More
                <span className="link-arrow">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;

