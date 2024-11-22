'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      try {
        const result = await emailjs.sendForm(
          'service_1oo50qx',   
          'template_mqpvsqf',  
          form.current,
          '7D3qAVMb7Qc3iINWH'
        );

        console.log('Email sent:', result.text);
        setIsSent(true);
        setError('');
        form.current.reset();
      } catch (err) {
        console.error('Email sending error:', err);
        setError('Failed to send message. Please try again.');
      }
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">Contact</h2>
        <p className="contact-subheading">
          Feel free to reach out to me if you&apos;d like to connect or collaborate!
        </p>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="contact-input"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="contact-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            className="contact-textarea"
          ></textarea>
          <button type="submit" className="contact-button">
            Send me an Email
          </button>
          {isSent && <p className="contact-success">Thanks for contacting us! Message sent successfully!</p>}
          {error && <p className="contact-error">{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;