import React from 'react'
import "./NetworkSection2.scss"
import integratedCybersecurityImg from "./../../../../assets/logos/CyberSecurity-icons/Integrated-Cybersecurity.png"
import SecurityFocused from "./../../../../assets/logos/CyberSecurity-icons/Security-focused.png"
import PreventiveRisk from "./../../../../assets/logos/CyberSecurity-icons/preventive-risk.png"
import ManagedSecurity from "./../../../../assets/logos/CyberSecurity-icons/managed-security-services.png"
const NetworkSection2 = () => {
  return (
    <>
    <div className='network-section2'>
                    <h6>Network Solution</h6>
                    <h2>Key Elements</h2>
                    <div className='whatWeDo'>
                        <div className="sevices-info">
                          <img src={integratedCybersecurityImg} alt="" />
                          <h6>Connectivity</h6>
                          <p>Facilitating Seamless Communication and Collaboration with a Connected Infrastructure</p>
                        </div>
            
                        <div className="sevices-info">
                          <img src={SecurityFocused} alt="" />
                          <h6>Scalability</h6>
                          <p>Scaling to Meet the Needs of Growing Businesses with Expandable Network Solutions</p>
                        </div>
            
                        <div className="sevices-info">
                          <img src={PreventiveRisk} alt="" />
                          <h6>Reduce Costs</h6>
                          <p>Optimizing Business Operations with Cost-Effective Network Solutions</p>
                        </div>
            
                        <div className="sevices-info">
                          <img src={ManagedSecurity} alt="" />
                          <h6>Analytics</h6>
                          <p>Gaining Valuable Insights and optimization with Analytics Driven Network Solutions</p>
                        </div>
                       
            
                    </div>
                </div>
    </>
  )
}

export default NetworkSection2