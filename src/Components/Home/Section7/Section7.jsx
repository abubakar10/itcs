import React, { useState } from "react";
import "./Section7.scss";

const Section7 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    { title: "The SindClub", role:"ManagerIT", text: "“The ITCS support team is awesome. They are very professional and never hesitate to above and beyond to satisfy us. Keep up the good work!”" },
    { title: "Brands of the year Awards", role:"CEO", text: "“Our migration to the cloud via Office 365 was made very simple by ITCS.  Excellent service and courteous staff!”" },
    { title: "Getz Pharma", role:"ManagerIT", text: "“I have no words to say thanks because from one strange call for IT support from my colleague, you provided highly technical support and spent almost full day to restore our IT services running on domain environment.”" },
    { title: "The SindClub", role:"ManagerIT", text: "“The ITCS support team is awesome. They are very professional and never hesitate to above and beyond to satisfy us. Keep up the good work!”" },
  
  ];

  // Handle slide for 2 cards at a time
  const handleSlide = (index) => {
    const carouselInner = document.querySelector(".carousel-inner");
    const cardWidth = document.querySelector(".carousel-item").offsetWidth;
    const scrollPosition = cardWidth * 2 * index; // Move 2 cards at a time
    carouselInner.scrollTo({ left: scrollPosition, behavior: "smooth" });
    setActiveIndex(index);
  };

  return (
    <div className="section7">
      <div className="testimonial-slider">
        <div id="carouselExampleControls" className="carousel">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <div className="testimonial-title" >
                  <i className="bi bi-quote display-2"></i>
                  <h2 className="" style={{fontWeight:"300",fontSize:"30px"}}>TESTIMONIALS</h2>
                  <h2 className="fw-bold display-6">What our customers are saying</h2>
                  <h2 className="" style={{fontWeight:"300",fontSize:"25px"}}>World class customer service is our core value</h2>

                </div>
              </div>
              <div className="col-md-8">
                <div className="carousel-inner">
                  {testimonials.map((item, index) => (
                    <div
                      className={`carousel-item ${activeIndex === index ? "active" : ""}`}
                      key={index}
                    >
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title fw-bold">{item.title}</h5>
                          <p className="">{item.role}</p>
                          
                          <div className="stars">
                            {Array.from({ length: 3 }, (_, i) => (
                              <i key={i} className="bi bi-star-fill text-warning"></i>
                            ))}
                          </div>
                          <p className="card-text">"{item.text}"</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-indicators">
          {[0, 1].map((index) => (
            <button
              key={index}
              className={`indicator ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleSlide(index)}
            >
              _
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section7;









