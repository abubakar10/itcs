import React from 'react'
import "./Asection5.scss"
import customerSuccess from "./../../../assets/images/customer-successa.jpeg"
const Asection5 = () => {
  return (
    <>
      <div className='asection5'>
        <div className='customerSuccess-text'>
            <h5>Our NorthStar</h5>
            <h1>Customer Success</h1>
            <p>Our main objective is to assist our clients and enable them to take advantage of current technology to enhance their work environment and increase collaboration. We are enthusiastic about proposing new and creative concepts and are dedicated to providing exceptional customer service to fulfill our clients’ needs and exceed their expectations.</p>
       
        </div>
        <div className="customerSuccess-img">
            <img src={customerSuccess} alt="" />
        </div>
      </div>
    
    </>
  )
}

export default Asection5