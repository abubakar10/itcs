import React, { useState } from "react";
import "./ContactForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); // Reset form
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send message.' });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({ type: 'error', message: 'Network error. Please try again later.' });
    }
  };

  const contactInfo = [
    {
      icon: faMapMarkerAlt,
      title: "Visit Us",
      description: "6/K Block 2, P.E.C.H.S, Karachi, Pakistan"
    },
    {
      icon: faEnvelope,
      title: "Email Us",
      description: "info@itcs.com.pk\nsupport@itcs.com.pk"
    },
    {
      icon: faPhone,
      title: "Call Us",
      description: "021 111-482-711\nMon-Fri: 9AM - 6PM"
    }
  ];

  return (
    <section className="contact-form-section">
      <div className="form-container">
        <div className="form-wrapper">
          <div className="form-header">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we'll get back to you within 24 hours.</p>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+92 300 1234567"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your project..."
                rows="6"
                required
              ></textarea>
            </div>

            {status.message && (
              <div className={`status-message ${status.type}`} style={{
                padding: '10px',
                marginBottom: '20px',
                borderRadius: '5px',
                backgroundColor: status.type === 'success' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
                color: status.type === 'success' ? '#4caf50' : '#f44336',
                border: `1px solid ${status.type === 'success' ? '#4caf50' : '#f44336'}`
              }}>
                {status.message}
              </div>
            )}
            <button type="submit" className="submit-btn" disabled={status.type === 'loading'}>
              {status.type === 'loading' ? 'Sending...' : 'Send Message'}
              <span className="btn-icon">→</span>
            </button>
          </form>
        </div>

        <div className="contact-info">
          {contactInfo.map((info, index) => (
            <div key={index} className="info-card">
              <div className="info-icon">
                <FontAwesomeIcon icon={info.icon} />
              </div>
              <h3>{info.title}</h3>
              <p>{info.description.split("\n").map((line, idx) => <span key={idx}>{line}<br /></span>)}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContactForm;