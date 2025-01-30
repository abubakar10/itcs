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
    { id: 1, img: CyberDemoImg, name: "Cybersecurity Consulting", description: "Discover the ultimate fit for your specific cybersecurity requirements with our tailor-made solutions, designed to meet your unique niche needs." },
    { id: 2, img: CyberDemoImg, name: "Digital Identity Management", description: "Enhance the security of your identity and access management with the help of our expert consulting, seamless implementation, and efficient managed services." },
    { id: 3, img: CyberDemoImg, name: "Security as a Service", description: "Elevate your business' security level with our platform-centric approach to integrating and modernizing cybersecurity, designed to drive improvement." },
    { id: 4, img: CyberDemoImg, name: "Secure Cloud Transformation", description: "Stay ahead of current and emerging cyber threats with our Cloud Security Services solution, providing unrivaled protection for your data and applications." },
    { id: 5, img: CyberDemoImg, name: "Vulnerability Management", description: "Strengthen your defense against cyber attacks with our cutting-edge vulnerability assessment, proactive threat hunting, automated detection, rapid response, and effective remediation solutions." },
    { id: 6, img: CyberDemoImg, name: "Zero Trust and Edge Security", description: "Protect your digital assets by modernizing and securing user access with our framework-based Zero Trust Network Access and Secure Access Service Edge services, ensuring a safe and secure digital estate." },
    
    
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




