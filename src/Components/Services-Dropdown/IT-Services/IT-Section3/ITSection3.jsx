import React from "react";
import "./ITSection3.scss";
import EnterpriseSection3Img from "./../../../../assets/images/Enterprise-images/enterprise-section3-img.png";

const ITSection3 = () => {
  return (
    <>
      <div className="it-section3">
        <div className="consultingSection3-text">
          <h6>Empowering Excellence in Technology:</h6>
          <h2>
            ITCS – Your Partner for Expert Support in Hardware, Software,
            Networks, and Data Protection
          </h2>

          <ol>
            <li>
              {" "}
              <strong>Expertise You Can Trust:</strong> Rely on our proven track
              record of handling challenges with finesse and precision.{" "}
            </li>
            <li>
              {" "}
              <strong>Tailored for You:</strong> Our solutions are meticulously
              crafted to align perfectly with your individual requirements,
              ensuring top-tier performance and security.
            </li>
            <li>
              <strong>Savings that Matter:</strong> Embrace cost-efficiency
              without compromising on quality.
            </li>
            <li>
              <strong>Ahead of Trends:</strong> We stay attuned to the latest
              advancements, ensuring you remain at the forefront of innovation
              and competitive advantage.
            </li>
            <li>
              <strong>Your Success, Our Priority:</strong> We’re by your side,
              offering unwavering support, insights, and solutions that propel
              your growth.
            </li>
          </ol>
        </div>
        <div className="consultingSection3-img">
          <img src={EnterpriseSection3Img} alt="" />
        </div>
      </div>
    </>
  );
};

export default ITSection3;
