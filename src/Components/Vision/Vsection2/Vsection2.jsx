import React from "react";
import "./Vsection2.scss";
const Vsection2 = () => {
  const cardsData = [
    {
      title: "Mission Statement",
      description: "Our Mission is to uplift businesses with advanced technology solutions and skilled consulting services, helping them reach their strategic objectives and navigate their digital evolution",
      
    },
    {
      title: "Vision Statement",
      description:
        "Our vision is to be the global frontrunners in IT consulting, services, and solutions. We're dedicated to delivering real business value through our expertise and innovative approach. Let's forge lasting partnerships based on trust, respect, and shared success.",
      
    },
    {
      title: "Our Core Values",
      description:
        "Our Ethos is based on the Egalitarian principles and Teachings of ISLAM.",
      
    },
  ];
  return (
    <>
      <div className="rotatable-cards">
        <h2>Our Philosophy</h2>
        <p>
        Our customer-centered approach relies on driving progress through collaboration.
        </p>
        <div className="cards-container">
          {cardsData.map((card, index) => (
            <div key={index} className="card">
              <div className="card-inner">
                <div className="card-front">
                  <h3>{card.title}</h3>
                </div>
                <div className="card-back">
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Vsection2;
