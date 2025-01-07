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
import itcsLogo from "../../assets/logos/itcsLogo.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header" style={{ backgroundColor: "#fff" }}>
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
                  <a className="nav-link active" aria-current="page" href="/">
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
                  >
                    Services
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                    <li>
                      <a className="dropdown-item" href="/cloud-solutions">
                        Cloud Solutions
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cybersecurity">
                        Cybersecurity
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/it-consulting">
                        IT Consulting
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/enterprise-solutions">
                        Enterprise Solutions
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/network-solutions">
                        Network Solutions
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/vision-mission">
                    Vision & Mission
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/blogs">
                    Blogs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/careers">
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

