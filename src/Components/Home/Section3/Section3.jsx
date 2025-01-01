// import React, { useEffect, useRef, useState } from "react";
// import "./Section3.scss";
// import Section3img from "./../../../assets/images/section3.jpg"

// const Section3 = () => {
//   const sectionRef = useRef(null);
//   const [scriptLoaded, setScriptLoaded] = useState(false); 

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !scriptLoaded) {
//           const script = document.createElement("script");
//           script.src = "https://codepen.io/shshaw/pen/QmZYMG.js";
//           script.async = true;
//           script.onload = () => {
//             console.log("External script loaded successfully.");
//             setScriptLoaded(true); 
//           };
//           script.onerror = (e) => {
//             console.error("Error loading external script:", e);
//           };
//           document.body.appendChild(script);
//         }
//       },
//       { threshold: 0.5 } 
//     );
//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }
//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, [scriptLoaded]);

//   return (
//     <div id="app" ref={sectionRef}>
//       <div className="title">
//         <div className="title-inner">
//           <div className="cafe">
//             <div className="cafe-inner">
//                 <h2>Cybersecurity</h2>
//                 <h1>Reimagined, Reinvented, Reinforced.</h1>
//                 <p>Safeguarding Your Business’s Legacy and Reputation – Our Comprehensive Cybersecurity Solutions Keep You Protected from the Devastating Impacts of Cyber-Incidents.</p>
//                 <h4>Penetration Testing</h4>
//                 <p>Ensure Complete Cybersecurity – Let Us Help You Find Issues, Verify Mitigations, and Manage Assessments..</p>
//                 <h4>Automated Software</h4>
//                 <p>Safeguarding Your Business Operations with Comprehensive Network Security Solutions and Expert Services.</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="image">
//         <img src={Section3img} alt="Beautiful landscape" />
//       </div>
//     </div>
//   );
// };

// export default Section3;


import React, { useEffect, useRef, useState } from "react";
import "./Section3.scss";
import Section3img from "./../../../assets/images/section3.jpg";

const Section3 = () => {
  const sectionRef = useRef(null); // Create a reference for the section
  const [scriptLoaded, setScriptLoaded] = useState(false); // Track if the script is loaded
  const [inView, setInView] = useState(false); // Track if the section is in view

  useEffect(() => {
    // Set up the IntersectionObserver to observe when the section is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !scriptLoaded) {
          // Load the script when the section comes into view
          const script = document.createElement("script");
          script.src = "https://codepen.io/shshaw/pen/QmZYMG.js";
          script.async = true;
          script.onload = () => {
            console.log("External script loaded successfully.");
            setScriptLoaded(true); // Mark the script as loaded
          };
          script.onerror = (e) => {
            console.error("Error loading external script:", e);
          };
          document.body.appendChild(script);
        }
        setInView(entry.isIntersecting); // Set inView to true when section is in view
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    // Start observing the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup when the component unmounts
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [scriptLoaded]);

  return (
    <div id="app" ref={sectionRef} className={inView ? "in-view" : ""}>
      <div className="title">
        <div className="title-inner">
          <div className="cafe">
            <div className="cafe-inner">
              <h2>Cybersecurity</h2>
              <h1>Reimagined, Reinvented, Reinforced.</h1>
              <p>
                Safeguarding Your Business’s Legacy and Reputation – Our
                Comprehensive Cybersecurity Solutions Keep You Protected from
                the Devastating Impacts of Cyber-Incidents.
              </p>
              <h4>Penetration Testing</h4>
              <p>
                Ensure Complete Cybersecurity – Let Us Help You Find Issues,
                Verify Mitigations, and Manage Assessments..
              </p>
              <h4>Automated Software</h4>
              <p>
                Safeguarding Your Business Operations with Comprehensive
                Network Security Solutions and Expert Services.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="image">
        <img src={Section3img} alt="Beautiful landscape" />
      </div>
    </div>
  );
};

export default Section3;
