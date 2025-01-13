import React from "react";
import "./Asection3.scss";
import companyProfile from "./../../../assets/images/ITCS-Company-Profile.png";
import openCompanyProfile from "./../../../assets/images/open-company profile.png";
import { Link } from "react-router-dom";

const Asection3 = () => {
  return (
    <div className="asection3">
      <h1> Company Profile</h1>
      <Link to="https://online.fliphtml5.com/tnugg/unta/">
        <div className=" hover-effect">
          <img src={companyProfile} alt="Company Profile" className="default" />
          {/* Simulated Pages */}
          <img src={openCompanyProfile} alt="Inner Page 1" className="page" />
        </div>
      </Link>
    </div>
  );
};

export default Asection3;
