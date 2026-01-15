// import React from "react";
// import "./CyberSsection4.scss";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination } from "swiper/modules"; // Updated module import

// const CyberSsection4 = () => {
//   const profiles = [
//     { id: 1, img: "images/profile1.jpg", name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
//     { id: 2, img: "images/profile2.jpg", name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
//     { id: 3, img: "images/profile3.jpg", name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
//     { id: 4, img: "images/profile4.jpg", name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
//     { id: 5, img: "images/profile5.jpg", name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
//     { id: 6, img: "images/profile6.jpg", name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
//     { id: 7, img: "images/profile7.jpg", name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
//     { id: 8, img: "images/profile8.jpg", name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
//     { id: 9, img: "images/profile9.jpg", name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
//   ];

//   return (
//     <>
//     <div className="slide-container">
//       <Swiper
//         className="slide-content"
//         modules={[Navigation, Pagination]} // Use imported modules
//         slidesPerView={3}
//         spaceBetween={25}
//         loop={true}
//         grabCursor={true}
//         pagination={{
//           clickable: true,
//           dynamicBullets: true,
//         }}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         breakpoints={{
//           0: { slidesPerView: 1 },
//           520: { slidesPerView: 2 },
//           950: { slidesPerView: 3 },
//         }}
//       >
//         {profiles.map((profile) => (
//           <SwiperSlide key={profile.id} className="card">
//             <div className="image-content">
//               <span className="overlay"></span>
//               <div className="card-image">
//                 <img src={profile.img} alt={profile.name} className="card-img" />
//               </div>
//             </div>
//             <div className="card-content">
//               <h2 className="name">{profile.name}</h2>
//               <p className="description">{profile.description}</p>
//               <button className="button">View More</button>
//             </div>
//           </SwiperSlide>
//         ))}

//       </Swiper>
//       <div className="swiper-button-next swiper-navBtn"></div>
//       <div className="swiper-button-prev swiper-navBtn"></div>
//     </div>

//     </>
//   );
// };

// export default CyberSsection4;


import React from "react";
import "./CyberSsection4.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules"; // Updated module import
import CyberDemoImg from "./../../../../assets/logos/customer-focus.png"

const CyberSsection4 = () => {
  const profiles = [
    { id: 1, img: CyberDemoImg, name: "Kaspersky Threat Intelligence", description: "Leverage Kaspersky's world-class threat intelligence and detection capabilities to stay ahead of sophisticated cyber attacks." },
    { id: 2, img: CyberDemoImg, name: "Sophos Endpoint Protection", description: "Deploy Sophos Intercept X and next-gen endpoint protection to secure your devices against ransomware and zero-day threats." },
    { id: 3, img: CyberDemoImg, name: "Fortinet Security Fabric", description: "Implement the Fortinet Security Fabric for broad, integrated, and automated protection across your entire digital attack surface." },
    { id: 4, img: CyberDemoImg, name: "Symantec Enterprise Security", description: "Utilize Symantec's global intelligence network to provide defense-in-depth across email, web, and network vectors." },
    { id: 5, img: CyberDemoImg, name: "Vulnerability Management (Nessus)", description: "Proactively identify and remediate vulnerabilities using industry-standard tools like Tenable Nessus and Burp Suite for application security." },
    { id: 6, img: CyberDemoImg, name: "Zero Trust (Cisco & Fortinet)", description: "Modernize your access control with Zero Trust frameworks powered by Cisco Duo and Fortinet Secure Access solutions." },


  ];

  return (
    <div className="slide-container">
      <Swiper
        className="slide-content"
        modules={[Navigation, Pagination]} // Use imported modules
        slidesPerView={3}
        spaceBetween={25}
        loop={true}
        grabCursor={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          520: { slidesPerView: 2 },
          950: { slidesPerView: 3 },
        }}
      >
        {profiles.map((profile) => (
          <SwiperSlide key={profile.id} className="card">
            <div className="image-content">
              <span className="overlay"></span>
              <div className="card-image">
                <img src={profile.img} alt={profile.name} className="card-img" />
              </div>
            </div>
            <div className="card-content">
              <h2 className="name">{profile.name}</h2>
              <p className="description">{profile.description}</p>
              {/* <button className="button">View More</button> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* External Navigation and Pagination */}
      <div className="swiper-button-next swiper-navBtn"></div>
      <div className="swiper-button-prev swiper-navBtn"></div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default CyberSsection4;




