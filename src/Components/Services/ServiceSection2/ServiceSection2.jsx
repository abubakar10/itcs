// import React from "react";
// import "./ServiceSection2.scss";
// import cloud from "./../../../assets/logos/SCloud.png";
// import cybersecurity from "./../../../assets/logos/SCybersecurity.png";
// import consulting from "./../../../assets/logos/SConsulting.png";
// import enterpriseSol from "./../../../assets/logos/SEnterpriseSol.png";
// import itServices from "./../../../assets/logos/SITservices.png";
// import networkSolutions from "./../../../assets/logos/SNetworkSolutions.png";

// const Section4 = () => {
//   const cardsData = [
//     {
//       logo: cloud,
//       title: "Cloud",
//       description:
//         "Unlock Business 4.0 with our Microsoft Cloud partnership for a smooth edge-to-cloud transformation",
//     },
//     {
//       logo: cybersecurity,
//       title: "Cybersecurity",
//       description:
//         "Cybersecurity: a growth imperative in today's expanding digital threat landscape.",
//     },
//     {
//       logo: consulting,
//       title: "Consulting",
//       description:
//         "Thrive amidst change with a transformative strategy centered on purpose.",
//     },
//     {
//       logo: enterpriseSol,
//       title: "Enterprise Solutions",
//       description:
//         "Transform your business with intelligent solutions and a holistic approach to enterprise applications.",
//     },
//     {
//       logo: itServices,
//       title: "IT Services",
//       description:
//         "Expert managed IT services for smooth and efficient technology operations.",
//     },
//     {
//       logo: networkSolutions,
//       title: "Network Solutions",
//       description:
//         "Optimize network performance and security with our comprehensive network solutions.",
//     },
//   ];

//   return (
//     <div className="ssection4">
//       <div className="info">
//         <div className="info-title">
//         <h3>OUR SERVICES</h3>
//         <h1>WHAT WE DO</h1>
//         </div>
//         <div className="info-text">
//         <p>Transforming businesses through technology</p>
//         </div>
//       </div>
//       <div className="cards">
//         {cardsData.map((card, index) => (
//           <div className="scard" key={index}>
//             <div className="card-inner">
//               <div className="card-front">
//                 <img src={card.logo} alt={`${card.title} logo`} className="card-logo" />
//                 <h5 className="card-title">{card.title}</h5>
//                 <p className="card-text">{card.description}</p>
//               </div>
//               <div className="card-back">
//                 <button className="explore-btn">Explore</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Section4;


import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./ServiceSection2.scss";
import cloud from "./../../../assets/logos/SCloud.png";
import cybersecurity from "./../../../assets/logos/SCybersecurity.png";
import consulting from "./../../../assets/logos/SConsulting.png";
import enterpriseSol from "./../../../assets/logos/SEnterpriseSol.png";
import itServices from "./../../../assets/logos/SITservices.png";
import networkSolutions from "./../../../assets/logos/SNetworkSolutions.png";

const Section4 = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const cardsData = [
    {
      logo: cloud,
      title: "Cloud",
      description:
        "Unlock Business 4.0 with our Microsoft Cloud partnership for a smooth edge-to-cloud transformation",
      path: "/services/cloud", // Navigation path
    },
    {
      logo: cybersecurity,
      title: "Cybersecurity",
      description:
        "Cybersecurity: a growth imperative in today's expanding digital threat landscape.",
      path: "/services/cyber-security", // Navigation path
    },
    {
      logo: consulting,
      title: "Consulting",
      description:
        "Thrive amidst change with a transformative strategy centered on purpose.",
      path: "/services/consulting", // Navigation path
    },
    {
      logo: enterpriseSol,
      title: "Enterprise Solutions",
      description:
        "Transform your business with intelligent solutions and a holistic approach to enterprise applications.",
      path: "/services/enterprise-solutions", // Navigation path
    },
    {
      logo: itServices,
      title: "IT Services",
      description:
        "Expert managed IT services for smooth and efficient technology operations.",
      path: "/services/it-services", // Navigation path
    },
    {
      logo: networkSolutions,
      title: "Network Solutions",
      description:
        "Optimize network performance and security with our comprehensive network solutions.",
      path: "/services/network-solutions", // Navigation path
    },
  ];

  return (
    <div className="ssection4">
      <div className="info">
        <div className="info-title">
          <h3>OUR SERVICES</h3>
          <h1>WHAT WE DO</h1>
        </div>
        <div className="info-text">
          <p>Transforming businesses through technology</p>
        </div>
      </div>
      <div className="cards">
        {cardsData.map((card, index) => (
          <div className="scard" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <img
                  src={card.logo}
                  alt={`${card.title} logo`}
                  className="card-logo"
                />
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
              </div>
              <div className="card-back">
                <button
                  className="explore-btn"
                  onClick={() => navigate(card.path)} // Dynamic navigation
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;
