import React from "react";
import "./EnterpriseSection2.scss";
import integratedCybersecurityImg from "./../../../../assets/logos/CyberSecurity-icons/Integrated-Cybersecurity.png"
import SecurityFocused from "./../../../../assets/logos/CyberSecurity-icons/Security-focused.png"
import PreventiveRisk from "./../../../../assets/logos/CyberSecurity-icons/preventive-risk.png"
import ManagedSecurity from "./../../../../assets/logos/CyberSecurity-icons/managed-security-services.png"
const EnterpriseSection2 = () => {
  return (
    <>
      <div className="enterprise-section2">
        <h6>CONSULTING SERVICES</h6>
        <h2>Strategy for a smooth and secure transformation</h2>
        <div className="whatWeDo">
          <div className="sevices-info">
            <img src={integratedCybersecurityImg} alt="" />
            <h6>Professional Services</h6>
          </div>

          <div className="sevices-info">
            <img src={SecurityFocused} alt="" />
            <h6>Strategy</h6>
          </div>

          <div className="sevices-info">
            <img src={PreventiveRisk} alt="" />
            <h6>Customer Interaction</h6>
          </div>

          <div className="sevices-info">
            <img src={ManagedSecurity} alt="" />
            <h6>Enterprise Integration</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnterpriseSection2;
