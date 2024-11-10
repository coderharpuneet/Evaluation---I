import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contactForm.css';
const ThankYouModal = () => (
  <div className="modal fade" id="sendModal" tabIndex="-1" aria-labelledby="sendModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="sendModalLabel">Thank you!!</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <p>Thank you for contacting us. Our team will get back to you soon.</p>
        </div>
        <div className="modal-footer">
          <a href="/home" className="btn btn-primary" style={{ backgroundColor: 'rgb(88, 94, 144)' }}>Return to home</a>
        </div>
      </div>
    </div>
  </div>
);

export default ThankYouModal;
