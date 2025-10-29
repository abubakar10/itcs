import React from 'react';
import "./CyberSsection2.scss";
import integratedCybersecurityImg from "./../../../../assets/logos/CyberSecurity-icons/Integrated-Cybersecurity.png"
import SecurityFocused from "./../../../../assets/logos/CyberSecurity-icons/Security-focused.png"
import PreventiveRisk from "./../../../../assets/logos/CyberSecurity-icons/preventive-risk.png"
import ManagedSecurity from "./../../../../assets/logos/CyberSecurity-icons/managed-security-services.png"
const CyberSsection2 = () => {
  return (
    <div className='cybersection2'>
        <h6>WHAT WE DO</h6>
        <h2>Cybersecurity Solutions</h2>
        <div className='whatWeDo'>
            <div className="sevices-info">
              <img src={integratedCybersecurityImg} alt="" />
              <h6>Integrated Cybersecurity Framework</h6>
            </div>

            <div className="sevices-info">
              <img src={SecurityFocused} alt="" />
              <h6>Integrated Cybersecurity Framework</h6>
            </div>

            <div className="sevices-info">
              <img src={PreventiveRisk} alt="" />
              <h6>Integrated Cybersecurity Framework</h6>
            </div>

            <div className="sevices-info">
              <img src={ManagedSecurity} alt="" />
              <h6>Integrated Cybersecurity Framework</h6>
            </div>
           

        </div>
    </div>
  )
}

export default CyberSsection2