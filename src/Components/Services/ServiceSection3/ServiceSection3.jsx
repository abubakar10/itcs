// import React, { useState, useEffect } from "react";
// import { useInView } from "react-intersection-observer"; // Import the hook
// import "./ServiceSection3.scss";
// import monumentImage from "./../../../assets/images/services-side.jpg"; // Update the path as needed

// const ServiceSection3 = () => {
//   const [progressValues, setProgressValues] = useState(
//     Array(6).fill(0) // Initial values are set to 0
//   );

//   const satisfactionData = [
//     { title: "Cloud Solutions", percentage: 97 },
//     { title: "Cybersecurity", percentage: 82 },
//     { title: "Enterprise Solutions", percentage: 87 },
//     { title: "IT Services", percentage: 89 },
//     { title: "Network Solutions", percentage: 80 },
//     { title: "Consulting", percentage: 92 },
//   ];

//   // Intersection Observer hook
//   const { ref, inView } = useInView({
//     triggerOnce: true, // Trigger only once when the section is in view
//     threshold: 0.5, // At least 50% of the section should be visible
//   });

//   // When the section comes into view, trigger the progress bar animation
//   useEffect(() => {
//     if (inView) {
//       satisfactionData.forEach((item, index) => {
//         let currentProgress = 0;
//         const targetProgress = item.percentage;
//         const stepDuration = 10; // Duration for each step increment (ms)
//         const maxSteps = targetProgress; // The number of steps it will take to reach the target

//         // Update progress at a consistent rate
//         const interval = setInterval(() => {
//           if (currentProgress < targetProgress) {
//             currentProgress += 1;
//             setProgressValues((prev) => {
//               const newValues = [...prev];
//               newValues[index] = currentProgress;
//               return newValues;
//             });
//           } else {
//             clearInterval(interval); // Stop when target is reached
//           }
//         }, stepDuration); // Update every 10ms (fast, consistent speed)
//       });
//     }
//   }, [inView]);

//   return (
//     <div className="ssection3" ref={ref}>
//       <div className="content">
//         <h4 className="subtitle">Customer Satisfaction</h4>
//         <h2 className="title">Delighted Customers</h2>
//         <p className="description">
//           We are proud to have achieved the highest ranking in a survey of over
//           100 C-level executives from top IT firms in Pakistan, as evidenced by
//           our exceptional overall satisfaction scores.
//         </p>
//         <div className="satisfaction-scores">
//           {satisfactionData.map((item, index) => (
//             <div key={index} className="satisfaction-item">
//               <span className="satisfaction-title">{item.title}</span>
//               <div className="progress-bar">
//                 <div
//                   className="progress"
//                   style={{
//                     width: `${progressValues[index]}%`, // Dynamically set the width
//                   }}
//                 ></div>
//               </div>
//               <span className="percentage">
//                 {progressValues[index]}% {/* Dynamically show the progress */}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="image">
//         <img src={monumentImage} alt="Monument" />
//       </div>
//     </div>
//   );
// };

// export default ServiceSection3;


import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer"; // Import the hook
import "./ServiceSection3.scss";
import monumentImage from "./../../../assets/images/services-side.jpg"; // Update the path as needed

const ServiceSection3 = () => {
  const [progressValues, setProgressValues] = useState(
    Array(6).fill(0) // Initial values are set to 0
  );

  const satisfactionData = [
    { title: "Cloud Solutions", percentage: 97 },
    { title: "Cybersecurity", percentage: 82 },
    { title: "Enterprise Solutions", percentage: 87 },
    { title: "IT Services", percentage: 89 },
    { title: "Network Solutions", percentage: 80 },
    { title: "Consulting", percentage: 92 },
  ];

  // Intersection Observer hook
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the section is in view
    threshold: 0.5, // At least 50% of the section should be visible
  });

  // When the section comes into view, trigger the progress bar animation
  useEffect(() => {
    if (inView) {
      satisfactionData.forEach((item, index) => {
        let currentProgress = 0;
        const targetProgress = item.percentage;
        const stepDuration = 10; // Duration for each step increment (ms)
        const maxSteps = targetProgress; // The number of steps it will take to reach the target

        // Update progress at a consistent rate
        const interval = setInterval(() => {
          if (currentProgress < targetProgress) {
            currentProgress += 1;
            setProgressValues((prev) => {
              const newValues = [...prev];
              newValues[index] = currentProgress;
              return newValues;
            });
          } else {
            clearInterval(interval); // Stop when target is reached
          }
        }, stepDuration); // Update every 10ms (fast, consistent speed)
      });
    }
  }, [inView]);

  return (
    <div className="ssection3" ref={ref}>
      <div className="content">
        <h4 className="subtitle">Customer Satisfaction</h4>
        <h2 className="title">Delighted Customers</h2>
        <p className="description">
          We are proud to have achieved the highest ranking in a survey of over
          100 C-level executives from top IT firms in Pakistan, as evidenced by
          our exceptional overall satisfaction scores.
        </p>
        <div className="satisfaction-scores">
          {satisfactionData.map((item, index) => (
            <div key={index} className="satisfaction-item">
              <span className="satisfaction-title">{item.title}</span>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{
                    width: `${progressValues[index]}%`, // Dynamically set the width
                  }}
                ></div>
              </div>
              <span className="percentage">
                {progressValues[index]}% {/* Dynamically show the progress */}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="image">
        <img src={monumentImage} alt="Monument" />
      </div>
    </div>
  );
};

export default ServiceSection3;
