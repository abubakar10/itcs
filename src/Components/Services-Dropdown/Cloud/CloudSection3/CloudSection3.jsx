import React from 'react'
import MicrosoftImg from "./../../../../assets/images/CloudSection3-MicrosoftImg.png"
import AwsImg from "./../../../../assets/images/CloudSection3-AWS.png"
import "./CloudSection3.scss"
const CloudSection3 = () => {
  return (
    <>
      <div className='cloudSection3'>
        <h3>Service Partners</h3>
        <div className='partnerships'>
            <h2>Strategic Cloud Collaborations & Partnerships</h2>
            <img className='microsoft' src={MicrosoftImg} alt="" />
            <img className='aws' src={AwsImg} alt="" />

        </div>
      </div>


    </>
  )
}

export default CloudSection3