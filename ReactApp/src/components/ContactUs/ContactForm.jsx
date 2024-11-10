import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Get in Touch</h1>
          <p className="text-center mb-4">Reach out, and let's create a universe of possibilities together!</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn"
              data-bs-toggle="modal"
              data-bs-target="#sendModal"
              style={{ backgroundColor: '#ffc107' }}
            >
              Send to Verbocity
            </button>
          </form>
        </div>
        <div className="col-md-6" id="image">
          <img src="lady.png" alt="Contact Illustration" height="300px" />
          <p>Let's speak a different language.</p>
        </div>
      </div>
      <ThankYouModal />
    </div>
  );
};

export default ContactForm;
