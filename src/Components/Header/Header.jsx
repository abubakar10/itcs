import React from "react";
import { useNavigate } from "react-router-dom";
import alignitLogo from "../../assets/logos/Align It Services.png";
import "./Header.scss";
import { Dropdown } from "bootstrap";
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();

  const handleServiceNavigation = (e) => {
    if (window.innerWidth > 200) {
      e.preventDefault(); 
      navigate("/services"); 
    }
  };

  const handleDropdownItemClick = (path) => {
  
  const toggleEl = document.getElementById("servicesDropdown");
  if (toggleEl) {
    const dropdownInstance =
      Dropdown.getInstance(toggleEl) || new Dropdown(toggleEl);
    dropdownInstance.hide(); 
  }

  
  const navbarCollapse = document.getElementById("navbarNav");
  if (navbarCollapse?.classList.contains("show")) {
    navbarCollapse.classList.remove("show");
  }

  navigate(path);
};

  useEffect(() => {
    const dropdown = document.querySelector(".dropdown");
    const dropdownToggle = document.getElementById("servicesDropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");

      if (!dropdown || !dropdownToggle || !dropdownMenu) return;


      dropdown.addEventListener("mouseenter", () => {
      const instance =
        Dropdown.getInstance(dropdownToggle) || new Dropdown(dropdownToggle);
        instance.show();
      });

      dropdown.addEventListener("mouseleave", () => {
      const instance = Dropdown.getInstance(dropdownToggle);
      if (instance) instance.hide();
    });
 }, []);

  return (
    <div className="header">
      <div className="header-img">
        <a href="/">
          <img src={alignitLogo} alt="ITCS Logo" />
        </a>
      </div>
      <div className="links">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page"   onClick={() => navigate("/")} style={{cursor:"pointer"}}>
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/services"
                    id="servicesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={handleServiceNavigation}
                  >
                    Services
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="servicesDropdown"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => handleDropdownItemClick("/services/cloud")}
                        style={{ cursor: "pointer" }}
                      >
                        Cloud Solutions
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => handleDropdownItemClick("/services/cyber-security")}
                        style={{ cursor: "pointer" }}
                      >
                        Cybersecurity
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => handleDropdownItemClick("/services/consulting")}
                        style={{ cursor: "pointer" }}
                      >
                        Consulting
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => handleDropdownItemClick("/services/enterprise-solutions")}
                        style={{ cursor: "pointer" }}
                      >
                        Enterprise Solutions
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => handleDropdownItemClick("/services/it-services")}
                        style={{ cursor: "pointer" }}
                      >
                        IT Services
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => handleDropdownItemClick("/services/network-solutions")}
                        style={{ cursor: "pointer" }}
                      >
                        Network Solutions
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => navigate("/vision-mission")}
                    style={{ cursor: "pointer" }}
                  >
                    Vision & Mission
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => navigate("/blogs")}
                    style={{ cursor: "pointer" }}
                  >
                    Blogs
                  </a>
                </li> */}
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => navigate("about-us")}
                    style={{ cursor: "pointer" }}
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => navigate("/contact")}
                    style={{ cursor: "pointer" }}
                  >
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => navigate("/careers")}
                    style={{ cursor: "pointer" }}
                  >
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
