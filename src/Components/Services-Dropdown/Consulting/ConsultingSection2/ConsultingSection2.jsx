import React from 'react'
import "./ConsultingSection2.scss"
import integratedCybersecurityImg from "./../../../../assets/logos/CyberSecurity-icons/Integrated-Cybersecurity.png"
import SecurityFocused from "./../../../../assets/logos/CyberSecurity-icons/Security-focused.png"
import PreventiveRisk from "./../../../../assets/logos/CyberSecurity-icons/preventive-risk.png"
import ManagedSecurity from "./../../../../assets/logos/CyberSecurity-icons/managed-security-services.png"
const ConsultingSection2 = () => {
  return (
    <>
    <div className='consulting-section2'>
            <h6>CONSULTING SERVICES</h6>
            <h2>Strategy for a smooth and secure transformation</h2>
            <div className='whatWeDo'>
                <div className="sevices-info">
                  <img src={integratedCybersecurityImg} alt="" />
                  <h6>Cloud Strategy and Transformation</h6>
                </div>
    
                <div className="sevices-info">
                  <img src={SecurityFocused} alt="" />
                  <h6>Innovation Strategy and Transformation</h6>
                </div>
    
                <div className="sevices-info">
                  <img src={PreventiveRisk} alt="" />
                  <h6>Risk and Cybersecurity Strategy</h6>
                </div>
    
                <div className="sevices-info">
                  <img src={ManagedSecurity} alt="" />
                  <h6>Business Adaptability Solutions</h6>
                </div>
               
    
            </div>
        </div>
    </>
  )
}

export default ConsultingSection2