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

const CyberSsection4 = () => {
  const profiles = [
    { id: 1, img: "images/profile1.jpg", name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 2, img: "images/profile2.jpg", name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 3, img: "images/profile3.jpg", name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 4, img: "images/profile4.jpg", name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 5, img: "images/profile5.jpg", name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 6, img: "images/profile6.jpg", name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 7, img: "images/profile7.jpg", name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 8, img: "images/profile8.jpg", name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 9, img: "images/profile9.jpg", name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
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
              <button className="button">View More</button>
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




