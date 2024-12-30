import React from "react";
import itcsLogo from "../../assets/logos/itcsLogo.png";
import Twitter from "./../../assets/logos/Twitter.svg";
import Facebook from "./../../assets/logos/Facebook.svg";
import Instagram from "./../../assets/logos/Instagram.svg";
import LinkedIn from "./../../assets/logos/LinkedIn.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo-section">
          {/* <h1 className="logo-heading">itcs</h1> */}
          <a href=""><img src={itcsLogo} alt="ITCS Logo" /></a>
          <p className="intro-para"> 
            ITCS strives to provide its customers with the best possible
            solutions using the latest available technology.
          </p>
          <div className="social-icons">
            <a href="#" className="icon twitter"><img src={Twitter} alt="" /></a>
            <a href="#" className="icon facebook"><img src={Facebook} alt="" /></a>
            <a href="#" className="icon youtube"><img src={Instagram} alt="" /></a>
            <a href="#" className="icon linkedin"><img src={LinkedIn} alt="" /></a>
          </div>
        </div>
        <div className="info-section">
          <h3>Head Office</h3>
          <p className="head-para">6/K Block 2, P.E.C.H.S, Karachi, Pakistan</p>
          <p className="head-para"> info@itcs.com.pk</p>
          <p className="head-para">Phone: 021 111-482-711</p>
          <p className="head-para">Fax: 021 4554818</p>
        </div>
        <div className="services-section">
          <h3>Services</h3>
          <ul>
            <li>Cloud Solutions</li>
            <li>IT Consulting</li>
            <li>Enterprise Solutions</li>
            <li>IT Services</li>
            <li>Network Solutions</li>
            <li>Cybersecurity</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

