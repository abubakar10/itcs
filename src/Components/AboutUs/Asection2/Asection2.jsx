import React from 'react'
import "./Asection2.scss"
import aboutusImg from "./../../../assets/images/about-us-s2.png"
const Asection2 = () => {
  return (
    <>
    <div className='asection2'>
        <div className='asection2-img'>
            <img src={aboutusImg} alt="" />
        </div>
        <div className="asection2-text">
            <h6>ABOUT US</h6>
            <h2>Empowering business through technology</h2>
            <p>We are enablers of innovative IT infrastructure, solutions, and services!</p>
            <p>Since 2010, we’ve stood as a visionary IT services and solutions partner, dedicated to empowering our valued clients. Our commitment lies in delivering optimal solutions through cutting-edge technology. Backed by a team of skilled, certified experts, we work relentlessly to bolster our clients’ competitive edge through technology.</p>
        </div>
    </div>
    </>
  )
}

export default Asection2