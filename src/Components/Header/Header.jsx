// import React from "react";
// import itcsLogo from "../../assets/logos/itcsLogo.png";
// import "./Header.scss";

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="header-img">
//         <a href="">
//           <img src={itcsLogo} alt="ITCS Logo" />
//         </a>
//       </div>
//       <div className="links">
//         <nav className="navbar navbar-expand-lg">
//           <div className="container-fluid">
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <a className="nav-link active" aria-current="page" href="/">
//                     Home
//                   </a>
//                 </li>
//                 <li className="nav-item dropdown">
//                   <a
//                     className="nav-link dropdown-toggle"
//                     href="/services" // Link to the "Services" page
//                     id="servicesDropdown"
//                     role="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                     onClick={(e) => {
//                       // Prevent dropdown from toggling on click
//                       if (window.innerWidth > 992) {
//                         e.preventDefault();
//                         window.location.href = "/services"; // Navigate to the Services page
//                       }
//                     }}
//                   >
//                     Services
//                   </a>
//                   <ul
//                     className="dropdown-menu"
//                     aria-labelledby="servicesDropdown"
//                   >
//                     <li>
//                       <a className="dropdown-item" href="#">
//                         Cloud Solutions
//                       </a>
//                     </li>
//                     <li>
//                       <a className="dropdown-item" href="#">
//                         Cybersecurity
//                       </a>
//                     </li>
//                     <li>
//                       <a className="dropdown-item" href="#">
//                         IT Consulting
//                       </a>
//                     </li>
//                     <li>
//                       <a className="dropdown-item" href="#">
//                         Enterprise Solutions
//                       </a>
//                     </li>
//                     <li>
//                       <a className="dropdown-item" href="#">
//                         Network Solutions
//                       </a>
//                     </li>
//                   </ul>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">
//                     Vision & Mission
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">
//                     Blogs
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">
//                     About Us
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">
//                     Contact
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">
//                     Careers
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Header;


import React from "react";
import { useNavigate } from "react-router-dom";
import itcsLogo from "../../assets/logos/itcsLogo.png";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();

  const handleServiceNavigation = (e) => {
    if (window.innerWidth > 992) {
      e.preventDefault(); // Prevent default dropdown toggle behavior
      navigate("/services"); // Navigate to the Services page
    }
  };

  return (
    <div className="header">
      <div className="header-img">
        <a href="/">
          <img src={itcsLogo} alt="ITCS Logo" />
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
                        onClick={() => navigate("/services/cloud")}
                        style={{ cursor: "pointer" }}
                      >
                        Cloud Solutions
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("/services/cyber-security")}
                        style={{ cursor: "pointer" }}
                      >
                        Cybersecurity
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("/services/consulting")}
                        style={{ cursor: "pointer" }}
                      >
                        Consulting
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("/services/enterprise-solutions")}
                        style={{ cursor: "pointer" }}
                      >
                        Enterprise Solutions
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("/services/it-services")}
                        style={{ cursor: "pointer" }}
                      >
                        IT Services
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("/services/network-solutions")}
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
