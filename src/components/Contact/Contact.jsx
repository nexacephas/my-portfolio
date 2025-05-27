import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.target);
    formData.append('access_key', 'b0d63608-782b-495a-a8ab-03c7d80e1c92');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult('✅ Form submitted successfully!');
      event.target.reset();
    } else {
      console.error('Error', data);
      setResult('❌ ' + data.message);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <form onSubmit={onSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn">Send Message</button>
        <span className="form-status">{result}</span>
      </form>
    </section>
  );
};

export default Contact;
