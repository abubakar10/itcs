import React from "react";
import itcsLogo from "../../assets/logos/itcsLogo.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo-section">
          <h1 className="logo-heading">itcs</h1>
          <p className="intro-para"> 
            ITCS strives to provide its customers with the best possible
            solutions using the latest available technology.
          </p>
          <div className="social-icons">
            <a href="#" className="icon twitter">Twitter</a>
            <a href="#" className="icon facebook">Facebook</a>
            <a href="#" className="icon youtube">YouTube</a>
            <a href="#" className="icon linkedin">LinkedIn</a>
          </div>
        </div>
        <div className="info-section">
          <h3>Head Office</h3>
          <p className="heade-para">6/K Block 2, P.E.C.H.S, Karachi, Pakistan</p>
          <p className="heade-para">Email: info@itcs.com.pk</p>
          <p className="heade-para">Phone: 021 111-482-711</p>
          <p className="heade-para">Fax: 021 4554818</p>
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

