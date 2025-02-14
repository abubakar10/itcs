import React from 'react'
import "./ITSection2.scss"
import integratedCybersecurityImg from "./../../../../assets/logos/CyberSecurity-icons/Integrated-Cybersecurity.png"
import SecurityFocused from "./../../../../assets/logos/CyberSecurity-icons/Security-focused.png"
import PreventiveRisk from "./../../../../assets/logos/CyberSecurity-icons/preventive-risk.png"
import ManagedSecurity from "./../../../../assets/logos/CyberSecurity-icons/managed-security-services.png"
const ITSection2 = () => {
  return (
    <>
    <div className='it-section2'>
                <h6>WHAT WE DO</h6>
                <h2>We are not just a regular service provider,<br /> rather a reliable strategic partner to your triumph.</h2>
                <div className='whatWeDo'>
                    <div className="sevices-info">
                      <img src={integratedCybersecurityImg} alt="" />
                      <h6>Technical Support</h6>
                    </div>
        
                    <div className="sevices-info">
                      <img src={SecurityFocused} alt="" />
                      <h6>Network Management</h6>
                    </div>
        
                    <div className="sevices-info">
                      <img src={PreventiveRisk} alt="" />
                      <h6>Cloud Services</h6>
                    </div>
        
                    <div className="sevices-info">
                      <img src={ManagedSecurity} alt="" />
                      <h6>Cybersecurity</h6>
                    </div>
                   
        
                </div>
            </div> 
    
    </>
  )
}

export default ITSection2