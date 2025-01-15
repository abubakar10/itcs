

// import React, { useState } from "react";
// import "./Asection6.scss";
// import customerFocus from "./../../../assets/images/customer-focus.jpeg";
// import innovation from "./../../../assets/images/innovation.jpeg";
// import integrity from "./../../../assets/images/integrity.jpeg";
// import respect from "./../../../assets/images/respect.jpeg";
// import continousLearning from "./../../../assets/images/continous-learning.jpeg";
// import teamwork from "./../../../assets/images/teamwork.jpeg";

// const Asection6 = () => {
//   const [activeTab, setActiveTab] = useState("pills-customer-focus");

//   const handleTabClick = (tabId) => {
//     setActiveTab(tabId);
//   };

//   return (
//     <div className="asection6">
//       <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
//         <li className="nav-item" role="presentation">
//           <button
//             className={`nav-link ${
//               activeTab === "pills-customer-focus" ? "active" : ""
//             } bg-white`}
//             id="pills-home-tab"
//             data-bs-toggle="pill"
//             data-bs-target="#pills-customer-focus"
//             type="button"
//             role="tab"
//             aria-controls="pills-home"
//             aria-selected={activeTab === "pills-customer-focus"}
//             onClick={() => handleTabClick("pills-customer-focus")}
//           >
//             Customer Focus
//           </button>
//         </li>
//         <li className="nav-item" role="presentation">
//           <button
//             className={`nav-link ${
//               activeTab === "pills-innovation" ? "active" : ""
//             } bg-white`}
//             id="pills-profile-tab"
//             data-bs-toggle="pill"
//             data-bs-target="#pills-innovation"
//             type="button"
//             role="tab"
//             aria-controls="pills-profile"
//             aria-selected={activeTab === "pills-innovation"}
//             onClick={() => handleTabClick("pills-innovation")}
//           >
//             Innovation
//           </button>
//         </li>
//         <li className="nav-item" role="presentation">
//           <button
//             className={`nav-link ${
//               activeTab === "pills-integrity" ? "active" : ""
//             } bg-white`}
//             id="pills-contact-tab"
//             data-bs-toggle="pill"
//             data-bs-target="#pills-integrity"
//             type="button"
//             role="tab"
//             aria-controls="pills-contact"
//             aria-selected={activeTab === "pills-integrity"}
//             onClick={() => handleTabClick("pills-integrity")}
//           >
//             Integrity
//           </button>
//         </li>
//         <li className="nav-item" role="presentation">
//           <button
//             className={`nav-link ${
//               activeTab === "pills-respect" ? "active" : ""
//             } bg-white`}
//             id="pills-respect-tab"
//             data-bs-toggle="pill"
//             data-bs-target="#pills-respect"
//             type="button"
//             role="tab"
//             aria-controls="pills-contact"
//             aria-selected={activeTab === "pills-respect"}
//             onClick={() => handleTabClick("pills-respect")}
//           >
//             Respect
//           </button>
//         </li>
//         <li className="nav-item" role="presentation">
//           <button
//             className={`nav-link ${
//               activeTab === "pills-continous-learning" ? "active" : ""
//             } bg-white`}
//             id="pills-contact-tab"
//             data-bs-toggle="pill"
//             data-bs-target="#pills-continous-learning"
//             type="button"
//             role="tab"
//             aria-controls="pills-contact"
//             aria-selected={activeTab === "pills-continous-learning"}
//             onClick={() => handleTabClick("pills-continous-learning")}
//           >
//             Continuous Learning
//           </button>
//         </li>
//         <li className="nav-item" role="presentation">
//           <button
//             className={`nav-link ${
//               activeTab === "pills-teamwork" ? "active" : ""
//             } bg-white`}
//             id="pills-contact-tab"
//             data-bs-toggle="pill"
//             data-bs-target="#pills-teamwork"
//             type="button"
//             role="tab"
//             aria-controls="pills-contact"
//             aria-selected={activeTab === "pills-teamwork"}
//             onClick={() => handleTabClick("pills-teamwork")}
//           >
//             Teamwork
//           </button>
//         </li>
//       </ul>
//       <div className="tab-content" id="pills-tabContent">
//         <div
//           className={`tab-pane fade ${
//             activeTab === "pills-customer-focus" ? "show active" : ""
//           }`}
//           id="pills-customer-focus"
//           role="tabpanel"
//           aria-labelledby="pills-home-tab"
//           tabIndex={0}
//         >
//           <div className="content">
//             <div className="text">
//               <h1>#01 Customer Focus</h1>
//               <p>
//                 We prioritize the needs of our clients, delivering solutions and
//                 services that exceed their expectations.
//               </p>
//             </div>
//             <img className="image" src={customerFocus} alt="" />
//           </div>
//         </div>
//         <div
//           className={`tab-pane fade ${
//             activeTab === "pills-innovation" ? "show active" : ""
//           }`}
//           id="pills-innovation"
//           role="tabpanel"
//           aria-labelledby="pills-profile-tab"
//           tabIndex={0}
//         >
//           <div className="content">
//             <div className="text">
//               <h1>#02 Innovation</h1>
//               <p>
//               We are at the forefront of new technology by continuously researching on new solutions to drive digital transformation for our clients.
//               </p>
//             </div>
//             <img className="image" src={innovation} alt="" />
//           </div>
//         </div>
//         <div
//           className={`tab-pane fade ${
//             activeTab === "pills-integrity" ? "show active" : ""
//           }`}
//           id="pills-integrity"
//           role="tabpanel"
//           aria-labelledby="pills-contact-tab"
//           tabIndex={0}
//         >
//            <div className="content">
//             <div className="text">
//               <h1>#03 Integrity</h1>
//               <p>
//               We believe in transparency, honesty, and a strong moral compass which are reflected through our conduct in business.
//               </p>
//             </div>
//             <img className="image" src={integrity} alt="" />
//           </div>
//         </div>
//         <div
//           className={`tab-pane fade ${
//             activeTab === "pills-respect" ? "show active" : ""
//           }`}
//           id="pills-respect"
//           role="tabpanel"
//           aria-labelledby="pills-contact-tab"
//           tabIndex={0}
//         >
//           <div className="content">
//             <div className="text">
//               <h1>#04 Respect</h1>
//               <p>
//               We treat all individuals with dignity, kindness, and respect.</p>
//             </div>
//             <img className="image" src={respect} alt="" />
//           </div>
//         </div>
//         <div
//           className={`tab-pane fade ${
//             activeTab === "pills-continous-learning" ? "show active" : ""
//           }`}
//           id="pills-continous-learning"
//           role="tabpanel"
//           aria-labelledby="pills-contact-tab"
//           tabIndex={0}
//         >
//           <div className="content">
//             <div className="text">
//               <h1>#05 Continuous Learning</h1>
//               <p>We are committed to ongoing learning and development, both as individuals and as a company.</p>
//             </div>
//             <img className="image" src={continousLearning} alt="" />
//           </div>
//         </div>
//         <div
//           className={`tab-pane fade ${
//             activeTab === "pills-teamwork" ? "show active" : ""
//           }`}
//           id="pills-teamwork"
//           role="tabpanel"
//           aria-labelledby="pills-contact-tab"
//           tabIndex={0}
//         >
//            <div className="content">
//             <div className="text">
//               <h1>#06 Teamwork</h1>
//               <p>We believe that team work is the dream work and we ensure that by collaborating with our clients and partners. </p>
//             </div>
//             <img className="image" src={teamwork} alt="" />
//           </div>
//         </div>
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
import customerFocusLogo from "./../../../assets/logos/customer-focus.png"
import innovationLogo from "./../../../assets/logos/innovation.png"
import integrityLogo from "./../../../assets/logos/integrity.png"
import respectLogo from "./../../../assets/logos/respect.png"
import continuousLearningLogo from "./../../../assets/logos/continous-learning.png"
import teamworkLogo from "./../../../assets/logos/teamwork.png"


const Asection6 = () => {
  const [activeTab, setActiveTab] = useState("pills-customer-focus");

  const tabs = [
    {
      id: "pills-customer-focus",
      label: "Customer Focus",
      image: customerFocus,
      logo:customerFocusLogo,
      title: "#01 Customer Focus",
      description:
        "We prioritize the needs of our clients, delivering solutions and services that exceed their expectations.",
    },
    {
      id: "pills-innovation",
      label: "Innovation",
      image: innovation,
      logo:  innovationLogo,
      title: "#02 Innovation",
      description:
        "We are at the forefront of new technology by continuously researching on new solutions to drive digital transformation for our clients.",
    },
    {
      id: "pills-integrity",
      label: "Integrity",
      image: integrity,
      logo:  integrityLogo,
      title: "#03 Integrity",
      description:
        "We believe in transparency, honesty, and a strong moral compass which are reflected through our conduct in business.",
    },
    {
      id: "pills-respect",
      label: "Respect",
      image: respect,
      logo:  respectLogo,
      title: "#04 Respect",
      description:
        "We treat all individuals with dignity, kindness, and respect.",
    },
    {
      id: "pills-continous-learning",
      label: "Continuous Learning",
      image: continousLearning,
      logo:  continuousLearningLogo,
      title: "#05 Continuous Learning",
      description:
        "We are committed to ongoing learning and development, both as individuals and as a company.",
    },
    {
      id: "pills-teamwork",
      label: "Teamwork",
      image: teamwork,
      logo:  teamworkLogo,
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
              <img className="logos" src={tab.logo} alt="" />
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

