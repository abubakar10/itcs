import React from 'react'
import "./EnterpriseSection3.scss"
import ConsultingSection3Img from "./../../../../assets/images/Consulting-images/section3-img.jpg"
const EnterpriseSection3 = () => {
  return (
    <>
    <div className="enterprise-section3">
            <div className="consultingSection3-text">
                <h6>WHY TRANSFORMATION ?
                </h6>
                <h2>Strategy for Firms
                </h2>
                <p>In today’s dynamic business landscape, companies must adapt to stay ahead of the curve by updating their enterprise strategies, incorporating technological advancements, and taking a holistic approach to meeting the shifting demands of both customers and employees. To thrive in this fast-paced environment, it is essential for a business to implement a transformative strategy that prioritizes a defined purpose.</p>
            
            </div>
            <div className="consultingSection3-img">
                <img src={ConsultingSection3Img} alt="" />
            </div>
        </div>
    </>
  )
}

export default EnterpriseSection3