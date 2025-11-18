import React from 'react';
import itcsLogo from "../../assets/logos/itcsLogo.png";
import Twitter from "./../../assets/logos/Twitter.svg";
import Facebook from "./../../assets/logos/Facebook.svg";
import Instagram from "./../../assets/logos/Instagram.svg";
import LinkedIn from "./../../assets/logos/LinkedIn.svg";
import { Link } from 'react-router-dom';
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo & Intro Section */}
        <div className="logo-section">
          <a href="/" className="logo-link">
            <img src={itcsLogo} alt="ITCS Logo" className="itcs-logo" />
          </a>
          <p className="intro-para">
            ITCS strives to provide its customers with the best possible
            solutions using the latest available technology.
          </p>
          <div className="social-icons">
            <a href="#" className="icon twitter" aria-label="Twitter">
              <img src={Twitter} alt="Twitter" />
            </a>
            <a
              href="https://www.facebook.com/itcspakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="icon facebook"
              aria-label="Facebook"
            >
              <img src={Facebook} alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/itcs.pakistan"  // Update with real link if available
              target="_blank"
              rel="noopener noreferrer"
              className="icon instagram"
              aria-label="Instagram"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/itconsultingandservices"
              target="_blank"
              rel="noopener noreferrer"
              className="icon linkedin"
              aria-label="LinkedIn"
            >
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </div>
        </div>

        {/* Head Office Info */}
        <div className="info-section">
          <h3>Head Office</h3>
          <p className="head-para">6/K Block 2, P.E.C.H.S, Karachi, Pakistan</p>
          <p className="head-para">
            <a href="mailto:info@itcs.com.pk">info@itcs.com.pk</a>
          </p>
          <p className="head-para">
            <a href="tel:+9221111482711">Phone: 021 111-482-711</a>
          </p>
          <p className="head-para">Fax: 021 4554818</p>
        </div>

        {/* Services Links */}
        <div className="services-section">
          <h3>Services</h3>
          <ul>
            <li><Link to="/services/cloud">Cloud Solutions</Link></li>
            <li><Link to="/services/consulting">IT Consulting</Link></li>
            <li><Link to="/services/enterprise-solutions">Enterprise Solutions</Link></li>
            <li><Link to="/services/it-services">IT Services</Link></li>
            <li><Link to="/services/network-solutions">Network Solutions</Link></li>
            <li><Link to="/services/cyber-security">Cybersecurity</Link></li>
          </ul>
        </div>
      </div>

      {/* Optional: Copyright Line */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ITCS Pakistan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;