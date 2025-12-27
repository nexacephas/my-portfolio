import React, { useState } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaTiktok, FaTwitter} from 'react-icons/fa';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.target);
    formData.append('access_key', 'b0d63608-782b-495a-a8ab-03c7d80e1c92');

    try {
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
    } catch (err) {
      console.error(err);
      setResult('❌ Something went wrong.');
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-subtitle">
        Let’s build something amazing together. Send me a message!
      </p>

      <form onSubmit={onSubmit} className="contact-form">
        <div className="input-group">
          <input type="text" name="name" required />
          <label>Your Name</label>
        </div>
        <div className="input-group">
          <input type="email" name="email" required />
          <label>Your Email</label>
        </div>
        <div className="input-group">
          <textarea name="message" rows="6" required></textarea>
          <label>Your Message</label>
        </div>
        <button type="submit" className="btn">Send Message</button>
        <span className="form-status">{result}</span>
      </form>

      {/* Premium Social Icons */}
      <div className="social-icons">
        <a href="https://github.com/nexacephas" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/adekeye-cephas-b02b873a2/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://wa.me/08131495622" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
        <a href="https://www.instagram.com/nexa_cephas" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://www.tiktok.com/@nexa_code2" target="_blank" rel="noreferrer"><FaTiktok /></a>
       <a href="https://x.com/cephas_nexa" target="_blank" rel="noreferrer">
  <FaTwitter />
</a>

      </div>
    </section>
  );
};

export default Contact;
