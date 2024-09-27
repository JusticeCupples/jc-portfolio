import React, { useState } from 'react';
import './contact.css';
import Navigation from '../Navigation/navigation';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'email') {
      validateEmail(value);
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(re.test(email));
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.message.trim() !== '' &&
      isEmailValid
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      emailjs.send('service_upczwkh', 'template_et2g6gr', formData, 'vUO8sPpnN2l3pQvw_').then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setFormData({ name: '', email: '', message: '' });
          setIsEmailValid(true);
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('Failed to send email:', error.text);
          alert('Failed to send message. Please try again later.');
        }
      );
    }
  };

  return (
    <div className="contact-container">
      <Navigation isGitHubPage={true} />
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        {!isEmailValid && <span className="error-message">Please enter a valid email address</span>}
        <button
          type="submit"
          className={`submit-button ${isFormValid() ? '' : 'disabled'}`}
          disabled={!isFormValid()}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
