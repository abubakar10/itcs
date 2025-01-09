import React from "react";
import "./Section4.scss";
import cloud from "./../../../assets/logos/Cloud.png"
import cybersecurity from "./../../../assets/logos/Cybersecurity.png"
import consulting from "./../../../assets/logos/Cloud.png"
import enterpriseSol from "./../../../assets/logos/EnterpriseSol.png"
import itServices from "./../../../assets/logos/ITservices.png"
import networkSolutions from "./../../../assets/logos/NetworkSolutions.png"

const Section4 = () => {
  return (
    <div className="section4">
      <div className="info">
        <div className="info-title">
          <h2>Why Us?</h2>
          <h1>13+ years of Industry experience</h1>
        </div>
        <div className="info-text">
          <p>
            We uphold the virtues of superior functional resources and excellent
            customer services with the prime objective of fostering value
            enablement systems, since 2011. By deploying problem-focused and
            solution-centered approaches with functional expertise and strategic
            partnerships with Tier 1 firms, we ensure customer success.
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src={cloud} alt="" className="card-logo" />
              <h5 className="card-title">Cloud</h5>
              <p className="card-text">
              Unlock Business 4.0 with our Microsoft Cloud partnership for a smooth edge-to-cloud transformation
              </p>
            </div>
            <div className="card-back">
              <button className="explore-btn">Explore</button>
            </div>
          </div>
        </div>
        {/* 2nd Card */}
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src={cybersecurity} alt="" className="card-logo" />
              <h5 className="card-title">Cybersecurity</h5>
              <p className="card-text">
              Cybersecurity: a growth imperative in today's expanding digital threat landscape.              </p>
            </div>
            <div className="card-back">
              <button className="explore-btn">Explore</button>
            </div>
          </div>
        </div>
        {/* 3rd Card */}
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src={consulting} alt="" className="card-logo" />
              <h5 className="card-title">Consulting</h5>
              <p className="card-text">
              Thrive amidst change with a transformative strategy centered on purpose.              </p>
            </div>
            <div className="card-back">
              <button className="explore-btn">Explore</button>
            </div>
          </div>
        </div>
        {/* 4th Card */}
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src={enterpriseSol} alt="" className="card-logo" />
              <h5 className="card-title">Enterprise Solutions</h5>
              <p className="card-text">
              Transform your business with intelligent solutions and a holistic approach to enterprise applications.              </p>
            </div>
            <div className="card-back">
              <button className="explore-btn">Explore</button>
            </div>
          </div>
        </div>
        {/* 5th Card */}
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src={itServices} alt="" className="card-logo" />
              <h5 className="card-title">IT Services</h5>
              <p className="card-text">
              Expert managed IT services for smooth and efficient technology operations.              </p>
            </div>
            <div className="card-back">
              <button className="explore-btn">Explore</button>
            </div>
          </div>
        </div>
        {/* 6th Card */}
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src={networkSolutions} alt="" className="card-logo" />
              <h5 className="card-title">Network Solutions</h5>
              <p className="card-text">
              Optimize network performance and security with our comprehensive network solutions.              </p>
            </div>
            <div className="card-back">
              <button className="explore-btn">Explore</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
