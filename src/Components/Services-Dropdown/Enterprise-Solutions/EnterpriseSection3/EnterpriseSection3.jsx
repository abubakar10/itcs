import React from "react";
import "./EnterpriseSection3.scss";
import EnterpriseSection3Img from "./../../../../assets/images/Enterprise-images/enterprise-section3-img.png";
const EnterpriseSection3 = () => {
  return (
    <>
      <div className="enterprise-section3">
        <div className="consultingSection3-text">
          
          <h2>Enterprise Solutions: A Contemporary Necessity!</h2>
          <p>
            In the intricate tapestry of business, enterprise solutions stand as
            the linchpin of triumph. They orchestrate seamless operations,
            amplify efficiency, and illuminate sagacious choices through
            harmonized technologies. With their power to meld processes and
            data, enterprises ascend, evolve, and pioneer amidst rivalry,
            fostering enduring expansion and unleashing the pinnacle of returns
            on investment.
          </p>
        </div>
        <div className="consultingSection3-img">
          <img src={EnterpriseSection3Img} alt="" />
        </div>
      </div>
    </>
  );
};

export default EnterpriseSection3;
