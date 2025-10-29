import React, { useState } from "react";
import "./CareerPositions.scss";

const CareerPositions = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const positions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Karachi / Remote",
      type: "Full-time",
      experience: "5+ years",
      description: "Build scalable web applications using modern technologies."
    },
    {
      title: "Cloud Solutions Architect",
      department: "Engineering",
      location: "Lahore / Hybrid",
      type: "Full-time",
      experience: "7+ years",
      description: "Design and implement cloud infrastructure solutions for enterprise clients."
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Islamabad / Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Create beautiful and intuitive user experiences for our products."
    },
    {
      title: "Cybersecurity Analyst",
      department: "Security",
      location: "Karachi / On-site",
      type: "Full-time",
      experience: "4+ years",
      description: "Protect systems and networks from security threats and vulnerabilities."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Automate deployment pipelines and maintain cloud infrastructure."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Lahore / Hybrid",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead product strategy and work with cross-functional teams."
    }
  ];

  const departments = ["All", "Engineering", "Design", "Security", "Product"];

  const filteredPositions = selectedDepartment === "All" 
    ? positions 
    : positions.filter(pos => pos.department === selectedDepartment);

  return (
    <section className="career-positions" id="positions">
      <div className="positions-container">
        <div className="section-header">
          <span className="section-badge">OPEN POSITIONS</span>
          <h2>Find Your Perfect Role</h2>
          <p>Explore our current openings and take the next step in your career journey.</p>
        </div>

        <div className="department-filter">
          {departments.map((dept) => (
            <button
              key={dept}
              className={`filter-btn ${selectedDepartment === dept ? 'active' : ''}`}
              onClick={() => setSelectedDepartment(dept)}
            >
              {dept}
            </button>
          ))}
        </div>

        <div className="positions-grid">
          {filteredPositions.map((position, index) => (
            <div key={index} className="position-card">
              <div className="position-header">
                <div className="position-meta">
                  <span className="department-tag">{position.department}</span>
                  <span className="type-tag">{position.type}</span>
                </div>
                <h3>{position.title}</h3>
              </div>
              <div className="position-details">
                <div className="detail">
                  <span className="icon">📍</span>
                  <span>{position.location}</span>
                </div>
                <div className="detail">
                  <span className="icon">⏱️</span>
                  <span>{position.experience}</span>
                </div>
              </div>
              <p className="position-description">{position.description}</p>
              <button className="apply-btn">Apply Now →</button>
            </div>
          ))}
        </div>

        {filteredPositions.length === 0 && (
          <div className="no-positions">
            <p>No positions available in this department at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CareerPositions;

