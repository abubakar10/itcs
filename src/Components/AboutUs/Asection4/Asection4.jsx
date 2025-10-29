import React from "react";
import cloud from "./../../../assets/logos/SCloud.png";
import cybersecurity from "./../../../assets/logos/SCybersecurity.png";
import consulting from "./../../../assets/logos/SConsulting.png";
import "./Asection4.scss";
const asection4 = () => {
    const cardsData = [
        {
          logo: cybersecurity,
          title: "Collaboration & Productivity",
          description:
            "Microsoft Office 365 is both the industry standard and the cutting edge",
        },
        {
          logo:  cloud,
          title: "Cloud Computing",
          description:
            "On-premises, hybrid, multicloud, or at the edge, create secure, future-ready cloud solutions on Azure",
        },
        {
           logo: consulting,
           title: "Software Licensing",
           description:
                "Straightforward licensing of on-premises perpetual and subscription software in CSP.",
        }
    ]
  return (
    <>
      <div className="asection4">
      <div className="info">
        <div className="info-title">
        <h6>MICROSOFT SOLUTIONS</h6>
        <h1>Our Key Strengths</h1>
        </div>
      </div>
      <div className="cards">
        {cardsData.map((card, index) => (
          <div className="scard" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <img src={card.logo} alt={`${card.title} logo`} className="card-logo" />
                <h5 className="card-title">{card.title}</h5>
                {/* <p className="card-text">{card.description}</p> */}
              </div>
              <div className="card-back">
                <p className="back-text">{card.description}</p>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default asection4;
