// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./Section4.scss";
// import cloud from "./../../../assets/logos/Cloud.png";
// import cybersecurity from "./../../../assets/logos/Cybersecurity.png";
// import consulting from "./../../../assets/logos/Consulting.png";
// import enterpriseSol from "./../../../assets/logos/EnterpriseSol.png";
// import itServices from "./../../../assets/logos/ITservices.png";
// import networkSolutions from "./../../../assets/logos/NetworkSolutions.png";

// const Section4 = () => {
//   const navigate = useNavigate();
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
//     <div className="section4">
//       <div className="info">
//         <div className="info-title">
//           <h2>Why Us?</h2>
//           <h1>13+ years of Industry experience</h1>
//         </div>
//         <div className="info-text">
//           <p>
//             We uphold the virtues of superior functional resources and excellent
//             customer services with the prime objective of fostering value
//             enablement systems, since 2011. By deploying problem-focused and
//             solution-centered approaches with functional expertise and strategic
//             partnerships with Tier 1 firms, we ensure customer success.
//           </p>
//         </div>
//       </div>
//       <div className="cards">
//         {cardsData.map((card, index) => (
//           <div className="card" key={index}>
//             <div className="card-inner">
//               <div className="card-front">
//                 <img
//                   src={card.logo}
//                   alt={`${card.title} logo`}
//                   className="card-logo"
//                 />
//                 <h5 className="card-title">{card.title}</h5>
//                 <p className="card-text">{card.description}</p>
//               </div>
//               <div className="card-back">
//                 <button
//                   className="explore-btn"
//                 >
//                   Explore
//                 </button>
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
import "./Section4.scss";
import cloud from "./../../../assets/logos/Cloud.png";
import cybersecurity from "./../../../assets/logos/Cybersecurity.png";
import consulting from "./../../../assets/logos/Consulting.png";
import enterpriseSol from "./../../../assets/logos/EnterpriseSol.png";
import itServices from "./../../../assets/logos/ITservices.png";
import networkSolutions from "./../../../assets/logos/NetworkSolutions.png";

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
      title: "Cyber-security",
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
    <div className="section4">
      <div className="info">
        <div className="info-title">
          <h2>Why Us?</h2>
          <h1>13+ years of Industry experience</h1>
        </div>
        <div className="info-text">
          <p>
            We uphold the virtues of superior functional resources and excellent
            customer services with the prime objective of fostering value
            enablement systems, since 2011. By deploying problem-focused and
            solution-centered approaches with functional expertise and strategic
            partnerships with Tier 1 firms, we ensure customer success.
          </p>
        </div>
      </div>
      <div className="cards">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
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

