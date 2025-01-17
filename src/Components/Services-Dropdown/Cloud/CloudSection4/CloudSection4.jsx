import React from "react";
import "./CloudSection4.scss";
import CloudSection4Img from "./../../../../assets/images/CloudMethodlogySection4.png";
import LocalExpertise from "./../../../../assets/logos/Cloud-Icons/Local-Expertise.png"
import MicrosoftCertified from "./../../../../assets/logos/Cloud-Icons/Microsoft-Certified.png"

import ProvenTrack from "./../../../../assets/logos/Cloud-Icons/Proven-track-record.png"
import TailoredSolutions from "./../../../../assets/logos/Cloud-Icons/Tailored-solutions.png"

import CostOptimization from "./../../../../assets/logos/Cloud-Icons/Cost-Optimization.png"
import EverytimeSupport from "./../../../../assets/logos/Cloud-Icons/24-Hour-Support.png"



const CloudSection4 = () => {
  return (
    <>
      <div className="cloudSection4">
        <div className="CloudSection4Img">
          <img src={CloudSection4Img} alt="" />
        </div>
        <div className="cloudSection4Info">
          <h2>Why Choose ITCS for Your Cloud Journey?</h2>
          <p>
            ITCS is Microsoft Gold Partner and value-added reseller working as
            Microsoft Cloud Service Provider (CSP – Tier 1) in Pakistan. We have
            a qualified team with Microsoft-certified trainers and professional
            industry experts to help you deploy Microsoft Azure in your business
            organization. Our team will discuss your business requirements,
            available resources, and cost and then customize the solution
            accordingly.
          </p>
          <div className="package">
            <div className="details">
                
                <img src={LocalExpertise} alt="" />
                <p>Local Expertise</p>
                
            </div>

            <div className="details">
            
                <img src={MicrosoftCertified} alt="" />
                <p>Microsoft Certified</p>
                
            </div>

            <div className="details">
               
                <img src={ProvenTrack} alt="" />
                <p>Proven Track Record</p>
                
            </div>

            <div className="details">
               
                <img src={TailoredSolutions} alt="" />
                <p>Tailored Solutions</p>
                
            </div>

            <div className="details">
                
                <img src={CostOptimization} alt="" />
                <p>Cost Optimization</p>
                
            </div>

            <div className="details">
                <img style={{width:"70px"}} src={EverytimeSupport} alt="" />
                <p>24/7 Support</p>
                
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default CloudSection4;
