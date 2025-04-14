import React, { useRef } from 'react';
import "./Section6.scss";
import Acunetix from "./../../../assets/images/Acunetix.png";
import Adobe from "./../../../assets/images/Adobe.png";
import AutoDesk from "./../../../assets/images/AutoDesk.png";
import Barracuda from "./../../../assets/images/Barracuda.png";
import CorelDraw from "./../../../assets/images/CorelDraw.png";
import CPanel from "./../../../assets/images/CPanel.png";
import Digicert from "./../../../assets/images/Digicert.png";
import Dynamics365 from "./../../../assets/images/Dynamics365.png";
import Fortinet from "./../../../assets/images/Fortinet.png";
import Kaspersky from "./../../../assets/images/Kaspersky.png";  //kasper
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
// Add other image imports...

const images = [
  Acunetix, Adobe,AutoDesk, Barracuda, CorelDraw, CPanel, Digicert,
    Dynamics365, Fortinet, Kaspersky, ManageEngine, Microsoft, Nvidia,
    Office365, Plesk, PortSwigger, Rapid, Ruigie, SolarWinds, Sophos,
    Symantec, Veeam, Vmware, Zoom, /* Add other images here */,
];

const Section6 = () => {
  const sliderTrackRef = useRef(null);

  const handleMouseEnter = () => {
    if (sliderTrackRef.current) {
      sliderTrackRef.current.style.animationPlayState = "paused"; // Pause animation
    }
  };

  const handleMouseLeave = () => {
    if (sliderTrackRef.current) {
      sliderTrackRef.current.style.animationPlayState = "running"; // Resume animation
    }
  };

  return (
    <div className="slider">
      <div
        className="slider-track"
        ref={sliderTrackRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Logo ${index + 1}`} />
        ))}
        {/* Duplicate images for seamless looping */}
        {images.map((image, index) => (
          <img key={`duplicate-${index}`} src={image} alt={`Duplicate Logo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Section6;



