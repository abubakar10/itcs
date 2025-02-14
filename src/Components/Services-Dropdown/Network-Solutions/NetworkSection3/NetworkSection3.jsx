import React from "react";
import "./NetworkSection3.scss";
import NetworkSection3Img from "./../../../../assets/images/Network-solutions/network-section3-img.jpg";

const NetworkSection3 = () => {
  return (
    <>
      <div className="network-section3">
        <div className="consultingSection3-text">
          <h6>Network Solutions</h6>
          <h2>Unlock Success through Advanced Network Solutions!</h2>

          <p>
            Empowering Organizations with Robust Network Solutions for Seamless
            Connectivity and Increased Efficiency.
          </p>
        </div>
        <div className="consultingSection3-img">
          <img src={NetworkSection3Img} alt="" />
        </div>
      </div>
    </>
  );
};

export default NetworkSection3;
