import React from "react";
import "./CareerSection2.scss";
const CareerSection2 = () => {
  const steps = [
    {
      title: "Submission",
      description: "Submit your CV to begin the process.",
    },
    {
      title: "Phone Screening",
      description: "We’ll schedule a quick call to learn more about you.",
    },
    {
      title: "Assessment",
      description: "Complete an assignment to showcase your skills.",
    },
    {
      title: "Final Interview",
      description: "Meet with the team to discuss your role.",
    },
  ];
  return (
    <>
      <section className="recruitment-section">
        <div className="Careerheader">
          <h1>Ready To Join Our Team?</h1>
        </div>
        <div className="content">
          <div className="text">
            <h2>Learn Our Recruitment Process</h2>
            <p>
              The recruitment process begins with the submission of CVs,
              followed by phone screening, assessment, and a final interview. At
              ITCS, we believe in working together and working hard.
            </p>
            <p>
              Discover the difference of working at ITCS – where your career
              takes flight, and your work is more than just a job; it's a
              fulfilling journey.
            </p>
          </div>
          <div className="cards">
            {steps.map((step, index) => (
              <div key={index} className="card">
                <div className="card-inner">
                  <div className="card-front">
                    <span className="icon">➜</span>
                    <h3>{step.title}</h3>
                  </div>
                  <div className="card-back">
                    <p>{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerSection2;
