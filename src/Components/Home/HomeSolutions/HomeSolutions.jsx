import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeSolutions.scss";
import cloud from "./../../../assets/logos/Cloud.png";
import cybersecurity from "./../../../assets/logos/Cybersecurity.png";
import consulting from "./../../../assets/logos/Consulting.png";
import enterpriseSol from "./../../../assets/logos/EnterpriseSol.png";
import itServices from "./../../../assets/logos/ITservices.png";
import networkSolutions from "./../../../assets/logos/NetworkSolutions.png";

const HomeSolutions = () => {
  const navigate = useNavigate();

  const solutions = [
    {
      logo: cloud,
      title: "Cloud",
      description: "Scalable cloud infrastructures powered by Microsoft Azure and Amazon Web Services (AWS) for edge-to-cloud agility.",
      path: "/services/cloud",
    },
    {
      logo: cybersecurity,
      title: "Cyber-security",
      description: "Unrivaled protection for your digital assets with Kaspersky, Sophos, and Fortinet enterprise security.",
      path: "/services/cyber-security",
    },
    {
      logo: consulting,
      title: "Consulting",
      description: "Strategic digital transformation consulting centered on purpose-driven methodology and growth.",
      path: "/services/consulting",
    },
    {
      logo: enterpriseSol,
      title: "Enterprise Solutions",
      description: "Intelligent business applications using Microsoft Dynamics 365, SAP, and specialized hosting tools.",
      path: "/services/enterprise-solutions",
    },
    {
      logo: itServices,
      title: "IT Services",
      description: "Managed services for Dell and HP hardware environments, plus VMware and Veeam virtualization.",
      path: "/services/it-services",
    },
    {
      logo: networkSolutions,
      title: "Network Solutions",
      description: "Optimize performance and security with Cisco routing, Ruijie wireless, and SolarWinds monitoring.",
      path: "/services/network-solutions",
    },
  ];

  return (
    <section className="home-solutions">
      <div className="solutions-container">
        <div className="solutions-header">
          <span className="section-badge">WHY CHOOSE US</span>
          <h2 className="section-title">13+ Years of Industry Experience</h2>
          <p className="section-description">
            We uphold the virtues of superior functional resources and excellent
            customer services with the prime objective of fostering value enablement
            systems, since 2011. By deploying problem-focused and solution-centered
            approaches with functional expertise and strategic partnerships with Tier 1
            firms, we ensure customer success.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div className="solution-card" key={index}>
              <div className="card-inner">
                <div className="card-front">
                  <div className="card-icon">
                    <img src={solution.logo} alt={solution.title} />
                  </div>
                  <h3 className="card-title">{solution.title}</h3>
                  <p className="card-description">{solution.description}</p>
                </div>
                <div className="card-back">
                  <button
                    className="explore-btn"
                    onClick={() => navigate(solution.path)}
                  >
                    <span>Explore {solution.title}</span>
                    <span className="btn-arrow">→</span>
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

export default HomeSolutions;

