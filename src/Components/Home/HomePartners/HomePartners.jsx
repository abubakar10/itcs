import React, { useRef } from 'react';
import "./HomePartners.scss";
import Acunetix from "./../../../assets/images/Acunetix.png";
import Adobe from "./../../../assets/images/Adobe.png";
import AutoDesk from "./../../../assets/images/AutoDesk.png";
import Barracuda from "./../../../assets/images/Barracuda.png";
import CorelDraw from "./../../../assets/images/CorelDraw.png";
import CPanel from "./../../../assets/images/CPanel.png";
import Digicert from "./../../../assets/images/Digicert.png";
import Dynamics365 from "./../../../assets/images/Dynamics365.png";
import Fortinet from "./../../../assets/images/Fortinet.png";
import Kaspersky from "./../../../assets/images/Kaspersky.png";
import ManageEngine from "./../../../assets/images/ManageEngine.png";
import Microsoft from "./../../../assets/images/Microsoft.png";
import Nvidia from "./../../../assets/images/Nvidia.png";
import Office365 from "./../../../assets/images/Office365.png";
import Plesk from "./../../../assets/images/Plesk.png";
import PortSwigger from "./../../../assets/images/PortSwigger.png";
import Rapid from "./../../../assets/images/Rapid.png";
import Ruigie from "./../../../assets/images/Ruigie.png";
import SolarWinds from "./../../../assets/images/SolarWinds.png";
import Sophos from "./../../../assets/images/Sophos.png";
import Symantec from "./../../../assets/images/Symantec.png";
import Veeam from "./../../../assets/images/Veeam.png";
import Vmware from "./../../../assets/images/Vmware.png";
import Zoom from "./../../../assets/images/Zoom.png";

const logos = [
  Acunetix, Adobe, AutoDesk, Barracuda, CorelDraw, CPanel, Digicert,
  Dynamics365, Fortinet, Kaspersky, ManageEngine, Microsoft, Nvidia,
  Office365, Plesk, PortSwigger, Rapid, Ruigie, SolarWinds, Sophos,
  Symantec, Veeam, Vmware, Zoom,
];

const HomePartners = () => {
  const sliderTrackRef = useRef(null);

  const handleMouseEnter = () => {
    if (sliderTrackRef.current) {
      sliderTrackRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (sliderTrackRef.current) {
      sliderTrackRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <section className="home-partners">
      <div className="partners-container">
        <div className="partners-header">
          <span className="section-badge">TRUSTED BY INDUSTRY LEADERS</span>
          <h2 className="section-title">Our Technology Partners</h2>
          <p className="section-description">
            We collaborate with the world's leading technology providers to deliver 
            exceptional solutions
          </p>
        </div>

        <div className="partners-slider">
          <div
            className="slider-track"
            ref={sliderTrackRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {logos.filter(logo => logo).map((logo, index) => (
              <div className="logo-wrapper" key={index}>
                <img src={logo} alt={`Partner ${index + 1}`} />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {logos.filter(logo => logo).map((logo, index) => (
              <div className="logo-wrapper" key={`duplicate-${index}`}>
                <img src={logo} alt={`Partner Duplicate ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePartners;

