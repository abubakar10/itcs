import React from 'react'
import "./CloudSection2.scss"
import Section2Img from "./../../../../assets/images/cloudSection2.jpg"
const CloudSection2 = () => {
  return (
    <>
    <div className='cloudSection2'>
        <div className='section2-text'>
            <h2>Empower Your Business with ITCS Cloud Solutions – A Microsoft Gold Partner</h2>
            <p>Welcome to ITCS, your premier partner for cloud solutions powered by Microsoft. As a Microsoft Gold Partner, we bring you a suite of cloud services designed to elevate your business, featuring Azure, Microsoft 365, and professional web hosting.</p>
        </div>
        <div className="section2-img">
            <img src={Section2Img} alt="" />
        </div>
    </div>
    </>
  )
}

export default CloudSection2