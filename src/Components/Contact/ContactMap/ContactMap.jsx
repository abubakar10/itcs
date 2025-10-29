import React from "react";
import "./ContactMap.scss";

const ContactMap = () => {
  const offices = [
    {
      city: "Karachi",
      address: "6/K Block 2, P.E.C.H.S, Karachi, Pakistan",
      phone: "021 111-482-711",
      email: "karachi@itcs.com.pk"
    },
    {
      city: "Lahore",
      address: "Office Address, Lahore, Pakistan",
      phone: "042 XXX-XXXX",
      email: "lahore@itcs.com.pk"
    },
    {
      city: "Islamabad",
      address: "Office Address, Islamabad, Pakistan",
      phone: "051 XXX-XXXX",
      email: "islamabad@itcs.com.pk"
    }
  ];

  return (
    <section className="contact-map-section">
      <div className="map-container">
        <div className="section-header">
          <span className="section-badge">OUR LOCATIONS</span>
          <h2>Find Us</h2>
          <p>Visit our offices across Pakistan or get in touch remotely.</p>
        </div>

        <div className="offices-grid">
          {offices.map((office, index) => (
            <div key={index} className="office-card">
              <div className="office-icon">🏢</div>
              <h3>{office.city}</h3>
              <div className="office-details">
                <p className="office-address">
                  <span className="detail-icon">📍</span>
                  {office.address}
                </p>
                <p className="office-phone">
                  <span className="detail-icon">📞</span>
                  {office.phone}
                </p>
                <p className="office-email">
                  <span className="detail-icon">📧</span>
                  {office.email}
                </p>
              </div>
              <button className="directions-btn">Get Directions →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMap;

