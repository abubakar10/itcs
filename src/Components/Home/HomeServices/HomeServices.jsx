import React from "react";
import "./HomeServices.scss";
import { Link } from "react-router-dom";
import CloudLogo from "./../../../assets/logos/Cloud.svg";
import SoftwareLicensing from "./../../../assets/logos/SoftwareLicensing.svg";
import MordernWorkplace from "./../../../assets/logos/MordernWorkplace.svg";

const HomeServices = () => {
  const services = [
    {
      icon: MordernWorkplace,
      title: "MODERN WORKPLACE",
      description: "Empower your team with Microsoft 365, Adobe Creative Cloud, and Zoom for seamless collaboration and productivity.",
      color: "#667eea",
      link: "/services/it-services",
    },
    {
      icon: CloudLogo,
      title: "CLOUD COMPUTING",
      description: "Scale your business with expert-led migrations to Amazon Web Services (AWS) and Microsoft Azure for maximum agility.",
      color: "#4a9eff",
      link: "/services/cloud",
    },
    {
      icon: SoftwareLicensing,
      title: "SOFTWARE LICENSING",
      description: "Secure genuine licensing for enterprise tools including Autodesk, CorelDraw, and Adobe with our certified partnership.",
      color: "#3d8eef",
      link: "/services/enterprise-solutions",
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
              style={{ '--card-color': service.color }}
            >
              <div className="card-glow"></div>
              <div className="card-icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
              <Link to={service.link} className="card-link">
                Learn More <span className="link-arrow">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;

