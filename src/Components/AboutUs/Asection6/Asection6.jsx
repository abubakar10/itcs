// import React, { useState } from "react";
// import "./Asection6.scss";
// import customerFocus from "./../../../assets/images/customer-focus.jpeg";
// import innovation from "./../../../assets/images/innovation.jpeg";
// import integrity from "./../../../assets/images/integrity.jpeg";
// import respect from "./../../../assets/images/respect.jpeg";
// import continousLearning from "./../../../assets/images/continous-learning.jpeg";
// import teamwork from "./../../../assets/images/teamwork.jpeg";

// //logos
// import customerFocusLogo from "./../../../assets/logos/customer-focus.png"
// import innovationLogo from "./../../../assets/logos/innovation.png"
// import integrityLogo from "./../../../assets/logos/integrity.png"
// import respectLogo from "./../../../assets/logos/respect.png"
// import continuousLearningLogo from "./../../../assets/logos/continous-learning.png"
// import teamworkLogo from "./../../../assets/logos/teamwork.png"


// const Asection6 = () => {
//   const [activeTab, setActiveTab] = useState("pills-customer-focus");

//   const tabs = [
//     {
//       id: "pills-customer-focus",
//       label: "Customer Focus",
//       image: customerFocus,
//       logo:customerFocusLogo,
//       title: "#01 Customer Focus",
//       description:
//         "We prioritize the needs of our clients, delivering solutions and services that exceed their expectations.",
//     },
//     {
//       id: "pills-innovation",
//       label: "Innovation",
//       image: innovation,
//       logo:  innovationLogo,
//       title: "#02 Innovation",
//       description:
//         "We are at the forefront of new technology by continuously researching on new solutions to drive digital transformation for our clients.",
//     },
//     {
//       id: "pills-integrity",
//       label: "Integrity",
//       image: integrity,
//       logo:  integrityLogo,
//       title: "#03 Integrity",
//       description:
//         "We believe in transparency, honesty, and a strong moral compass which are reflected through our conduct in business.",
//     },
//     {
//       id: "pills-respect",
//       label: "Respect",
//       image: respect,
//       logo:  respectLogo,
//       title: "#04 Respect",
//       description:
//         "We treat all individuals with dignity, kindness, and respect.",
//     },
//     {
//       id: "pills-continous-learning",
//       label: "Continuous Learning",
//       image: continousLearning,
//       logo:  continuousLearningLogo,
//       title: "#05 Continuous Learning",
//       description:
//         "We are committed to ongoing learning and development, both as individuals and as a company.",
//     },
//     {
//       id: "pills-teamwork",
//       label: "Teamwork",
//       image: teamwork,
//       logo:  teamworkLogo,
//       title: "#06 Teamwork",
//       description:
//         "We believe that teamwork is the dream work and we ensure that by collaborating with our clients and partners.",
//     },
//   ];

//   return (
//     <div className="asection6">
//         <div className="core-values-text">
//             <h6>LIFE AT ITCS</h6>
//             <h2>Our Core Values</h2>
//             <p>ITCS: Anchored by Six Core Values, We Forge a Path to Excellence.</p>
//         </div>
//       {/* Navigation */}
//       <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
//         {tabs.map((tab) => (
//           <li className="nav-item" role="presentation" key={tab.id}>
//             <button
//               className={`nav-link ${
//                 activeTab === tab.id ? "active" : ""
//               } bg-white`}
//               type="button"
//               role="tab"
//               aria-controls={tab.id}
//               aria-selected={activeTab === tab.id}
//               onClick={() => setActiveTab(tab.id)}
//             >
//               {tab.label}
//               <img className="logos" src={tab.logo} alt="" />
//             </button>
            
//           </li>
//         ))}
//       </ul>

//       {/* Tab Content */}
//       <div className="tab-content" id="pills-tabContent">
//         {tabs.map((tab) => (
//           <div
//             key={tab.id}
//             className={`tab-pane fade ${
//               activeTab === tab.id ? "show active" : ""
//             }`}
//             id={tab.id}
//             role="tabpanel"
//             tabIndex={0}
//           >
//             <div className="content">
//               <div className="text">
//                 <h1>{tab.title}</h1>
//                 <p>{tab.description}</p>
//               </div>
//               <img className="image" src={tab.image} alt={tab.label} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Asection6;


import React, { useState } from "react";
import "./Asection6.scss";
import customerFocus from "./../../../assets/images/customer-focus.jpeg";
import innovation from "./../../../assets/images/innovation.jpeg";
import integrity from "./../../../assets/images/integrity.jpeg";
import respect from "./../../../assets/images/respect.jpeg";
import continousLearning from "./../../../assets/images/continous-learning.jpeg";
import teamwork from "./../../../assets/images/teamwork.jpeg";

//logos
import customerFocusLogo from "./../../../assets/logos/customer-focus.png";
import innovationLogo from "./../../../assets/logos/innovation.png";
import integrityLogo from "./../../../assets/logos/integrity.png";
import respectLogo from "./../../../assets/logos/respect.png";
import continuousLearningLogo from "./../../../assets/logos/continous-learning.png";
import teamworkLogo from "./../../../assets/logos/teamwork.png";

const Asection6 = () => {
  const [activeTab, setActiveTab] = useState("pills-customer-focus");

  const tabs = [
    {
      id: "pills-customer-focus",
      label: "Customer Focus",
      image: customerFocus,
      logo: customerFocusLogo,
      title: "#01 Customer Focus",
      description:
        "We prioritize the needs of our clients, delivering solutions and services that exceed their expectations.",
    },
    {
      id: "pills-innovation",
      label: "Innovation",
      image: innovation,
      logo: innovationLogo,
      title: "#02 Innovation",
      description:
        "We are at the forefront of new technology by continuously researching on new solutions to drive digital transformation for our clients.",
    },
    {
      id: "pills-integrity",
      label: "Integrity",
      image: integrity,
      logo: integrityLogo,
      title: "#03 Integrity",
      description:
        "We believe in transparency, honesty, and a strong moral compass which are reflected through our conduct in business.",
    },
    {
      id: "pills-respect",
      label: "Respect",
      image: respect,
      logo: respectLogo,
      title: "#04 Respect",
      description: "We treat all individuals with dignity, kindness, and respect.",
    },
    {
      id: "pills-continous-learning",
      label: "Continuous Learning",
      image: continousLearning,
      logo: continuousLearningLogo,
      title: "#05 Continuous Learning",
      description:
        "We are committed to ongoing learning and development, both as individuals and as a company.",
    },
    {
      id: "pills-teamwork",
      label: "Teamwork",
      image: teamwork,
      logo: teamworkLogo,
      title: "#06 Teamwork",
      description:
        "We believe that teamwork is the dream work and we ensure that by collaborating with our clients and partners.",
    },
  ];

  return (
    <div className="asection6">
      <div className="core-values-text">
        <h6>LIFE AT ITCS</h6>
        <h2>Our Core Values</h2>
        <p>ITCS: Anchored by Six Core Values, We Forge a Path to Excellence.</p>
      </div>
      {/* Navigation */}
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        {tabs.map((tab) => (
          <li className="nav-item" role="presentation" key={tab.id}>
            <button
              className={`nav-link ${
                activeTab === tab.id ? "active" : ""
              } bg-white`}
              type="button"
              role="tab"
              aria-controls={tab.id}
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              <img className="logos" src={tab.logo} alt={tab.label} />
            </button>
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className="tab-content" id="pills-tabContent">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-pane fade ${
              activeTab === tab.id ? "show active" : ""
            }`}
            id={tab.id}
            role="tabpanel"
            tabIndex={0}
          >
            <div className="content">
              <div className="text">
                <h1>{tab.title}</h1>
                <p>{tab.description}</p>
              </div>
              <img className="image" src={tab.image} alt={tab.label} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Asection6;


