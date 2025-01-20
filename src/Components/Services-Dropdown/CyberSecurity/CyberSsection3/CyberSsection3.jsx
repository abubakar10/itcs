import React from 'react'
import "./CyberSsection3.scss";
import CyberSection3Img from "./../../../../assets/images/CyberSecurity-images/cyberSection3-img.png"
const CyberSsection3 = () => {
  return (
    <>
    <div className='cyberSection3'>
        <div className="Cyber-section3-text">
            <h6>CYBERSECURITY</h6>
            <h1>Secure Scalability</h1>
            <p>In today’s increasingly digitized world, cybersecurity is no longer just a matter of meeting regulatory requirements or reducing risk. It has become a critical component of driving business growth and success, as the threat landscape continues to expand and threaten organizations of all sizes. With the threat perimeter constantly expanding, the need for robust cybersecurity measures has never been greater.</p>

        </div>
        <div className="Cyber-section3-img">
            <img src={CyberSection3Img} alt="" />
        </div>
    </div>
    </>
  )
}

export default CyberSsection3