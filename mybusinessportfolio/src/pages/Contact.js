// src/pages/Contact.js
import React, { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/yourFormID', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setStatus('Thanks for your message! I will get back to you soon.');
        form.reset();
      } else {
        setStatus('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Oops! Something went wrong. Please try again.');
    }
  };

  return (
    <div className="container my-5" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required
            placeholder="Your full name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="_replyto"
            required
            placeholder="your.email@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message <span style={{ color: 'red' }}>*</span>
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            required
            placeholder="Write your message here..."
          ></textarea>
        </div>
        {status && (
          <div className="alert alert-info" role="alert">
            {status}
          </div>
        )}
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
