import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./Section5.scss";

const Section5 = () => {
  const counters = [
    { number: 497, label: "Satisfied Customers" },
    { number: 954, label: "Projects Completed" },
    { number: 103, label: "Business Partners" },
    { number: 29, label: "Awards Winning" },
  ];
  const [startAnimation, setStartAnimation] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      setStartAnimation(true);
    }
  }, [inView]);
  const animateNumber = (endValue) => {
    const [value, setValue] = useState(0);
    useEffect(() => {
      if (startAnimation) {
        let start = 0;
        const duration = 2000; // animation duration in ms
        const increment = endValue / (duration / 16); // increase per frame (~60fps)
        const timer = setInterval(() => {
          start += increment;
          if (start >= endValue) {
            clearInterval(timer);
            setValue(endValue);
          } else {
            setValue(Math.ceil(start));
          }
        }, 16);

        return () => clearInterval(timer);
      }
    }, [startAnimation, endValue]);

    return value;
  };

  return (
    <div className="section5">
      <div ref={ref} className="counter-container">
        {counters.map((counter, index) => (
          <div className="counter" key={index}>
            <h2 className="counter-number">
              {animateNumber(counter.number)}
              <span className="counter-plus">+</span>
            </h2>
            <p className="counter-label">{counter.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section5;
