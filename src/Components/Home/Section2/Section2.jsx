import React from "react";
import "./section2.scss";
import CloudLogo from "./../../../assets/logos/Cloud.svg"
import SoftwareLicensing from "./../../../assets/logos/SoftwareLicensing.svg"
import MordernWorkplace from "./../../../assets/logos/MordernWorkplace.svg"

const Section2 = () => {
  return (
    <>
      <div className="section2 ">
        <div className="cards">
          <div className="card" >
            <img src={MordernWorkplace} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">MODERN WORKPLACE</h5>
              <p className="card-text">
                Unleash the potential of modern work with an array of
                transformative solutions.
              </p>
            </div>
            <div className="card-body">
              <a href="#" className="card-link">
                LEARN MORE
              </a>
            </div>
          </div>
          <div className="card" >
            <img src={CloudLogo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">CLOUD COMPUTING</h5>
              <p className="card-text">
                We are equipped to guide you through the transformative
                potential of Azure.
              </p>
            </div>
            <div className="card-body">
              <a href="#" className="card-link">
                LEARN MORE
              </a>
            </div>
          </div>
          <div className="card" >
            <img src={SoftwareLicensing} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">SOFTWARE LICENSING</h5>
              <p className="card-text">
                Choose the licensing option that aligns seamlessly with your
                business rhythm.
              </p>
            </div>
            <div className="card-body">
              <a href="#" className="card-link">
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
