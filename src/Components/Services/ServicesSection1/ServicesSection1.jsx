import React from "react";
import "./SevicesSection1.scss";
import ServicesBg from "./../../../assets/images/alienvideo2.mp4";
const ServicesSection1 = () => {
  return (
    <>
      <div className="ssection1">
        <video autoPlay muted loop className="background-video">
          <source src={ServicesBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1>SERVICES</h1>
        <h3>WORLD CLASS</h3>
      </div>
    </>
  );
};

export default ServicesSection1;
