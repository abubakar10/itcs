import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServicesGrid.scss";
import cloud from "./../../../assets/logos/SCloud.png";
import cybersecurity from "./../../../assets/logos/SCybersecurity.png";
import consulting from "./../../../assets/logos/SConsulting.png";
import enterpriseSol from "./../../../assets/logos/SEnterpriseSol.png";
import itServices from "./../../../assets/logos/SITservices.png";
import networkSolutions from "./../../../assets/logos/SNetworkSolutions.png";

const ServicesGrid = () => {
  const navigate = useNavigate();

  const services = [
    {
      logo: cloud,
      title: "Cloud Solutions",
      description: "Scale efficiently with our AWS and Microsoft Azure cloud partnerships for a secure edge-to-cloud transformation.",
      path: "/services/cloud",
      features: ["Azure & AWS Migration", "Cloud Security", "Hybrid Cloud Support"]
    },
    {
      logo: cybersecurity,
      title: "Cybersecurity",
      description: "Protect your digital assets with industry-leading security from Kaspersky, Sophos, and Fortinet.",
      path: "/services/cyber-security",
      features: ["Threat Detection (Kaspersky)", "Sophos Firewall", "Fortinet Security"]
    },
    {
      logo: consulting,
      title: "IT Consulting",
      description: "Strategize for the future with data-driven insights and digital transformation roadmaps.",
      path: "/services/consulting",
      features: ["Strategy Planning", "Digital Transformation", "Tech Advisory"]
    },
    {
      logo: enterpriseSol,
      title: "Enterprise Solutions",
      description: "Automate and optimize with Microsoft Dynamics 365, SAP, and custom ERP/CRM integrations.",
      path: "/services/enterprise-solutions",
      features: ["Dynamics 365 ERP", "CRM Solutions", "CPanel/Plesk Hosting"]
    },
    {
      logo: itServices,
      title: "IT Services",
      description: "Ensure business continuity with Dell and HP hardware support, plus Veeam and VMware virtualization.",
      path: "/services/it-services",
      features: ["VMware Operations", "Veeam Data Backup", "Dell/HP Hardware"]
    },
    {
      logo: networkSolutions,
      title: "Network Solutions",
      description: "Connect your global workspace with enterprise routing from Cisco, Ruijie, and SolarWinds monitoring.",
      path: "/services/network-solutions",
      features: ["Cisco Routing/Switching", "Ruijie Wireless", "SolarWinds Monitoring"]
    },
  ];

  return (
    <section className="services-grid-section">
      <div className="services-grid-container">
        <div className="services-grid-header">
          <span className="section-badge">OUR SERVICES</span>
          <h2 className="section-title">What We Do</h2>
          <p className="section-description">
            Transforming businesses through technology with comprehensive solutions
            tailored to your unique needs
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="card-inner">
                <div className="card-front">
                  <div className="card-icon">
                    <img src={service.logo} alt={service.title} />
                  </div>
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-description">{service.description}</p>
                  <div className="card-hover-indicator">
                    <span>Hover for details</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="card-back">
                  <h4 className="back-title">Key Features</h4>
                  <ul className="features-list">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="explore-btn"
                    onClick={() => navigate(service.path)}
                  >
                    Explore Service
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

