import React from "react";
import itcsLogo from "../../assets/logos/itcsLogo.png";
import "./Header.scss"
const Header = () => {
  return (
    <div className="header">
      <div className="header-img">
        <img src={itcsLogo} alt="" />
      </div>
      <div className="links">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
          
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                   Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Vision & Mission
                  </a>
                </li>
                <li class="nav-item">
                 <a class="nav-link" href="#">
                    Blogs
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
