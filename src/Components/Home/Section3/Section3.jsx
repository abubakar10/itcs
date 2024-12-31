// import React,{useEffect} from 'react'
// import "./Section3.scss"
// const Section3 = () => {
//     useEffect(() => {

//       const script = document.createElement('script');
//       script.src = 'https://codepen.io/shshaw/pen/QmZYMG.js';
//       script.async = true;
//       document.body.appendChild(script);

//       return () => {
//         document.body.removeChild(script);
//       };
//     }, []);

//     return (
//       <div id="app">
//         <div className="title">
//           <div className="title-inner">
//             <div className="cafe">
//               <div className="cafe-inner">Keyframé</div>
//             </div>
//             <div className="mozart">
//               <div className="mozart-inner">Artistes</div>
//             </div>
//           </div>
//         </div>

//         <div className="image">
//           <img
//             src="https://images.unsplash.com/photo-1616362355051-6a9f8c434fff?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzE0MTYzNQ&ixlib=rb-1.2.1&q=80&w=800&h=600"
//             alt=""
//           />
//         </div>

//         <a href="https://youtu.be/mBY62jtbMYM" target="_blank" rel="noopener noreferrer" data-keyframers-credit style={{ color: '#000' }}>
//         </a>
//       </div>
//     );
//   };

// export default Section3
import React, { useEffect, useRef, useState } from "react";
import "./Section3.scss";
import Section3Img from "./../../../assets/images/section3-image.png";

const Section3 = () => {
  const sectionRef = useRef(null); // Create a reference for the section
  const [scriptLoaded, setScriptLoaded] = useState(false); // Track if the script is loaded

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
    <div id="app" ref={sectionRef}>
      <div className="title">
        <div className="title-inner">
          <div className="cafe">
            <div className="cafe-inner">Keyframé</div>
          </div>
          <div className="mozart">
            <div className="mozart-inner">Artistes</div>
          </div>
        </div>
      </div>

      <div className="image">
        <img src={Section3Img} alt="Beautiful landscape" />
      </div>
    </div>
  );
};

export default Section3;
