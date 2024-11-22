'use client'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

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
    <section id="contact" className="py-20  bg-black text-white">
      <div className="container mx-auto py-5 my-5 text-center">
        <h2 className="text-4xl text-center mb-10 font-bold">Contact</h2>
        <p className="text-lg text-center mb-6">Feel free to reach out to me if you&apos;d like to connect or collaborate!</p>

        

        <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto">
          <input
            type='text'
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-4 mb-4 border-2 text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-4 mb-4 border-2 text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            className="w-full p-4 mb-4 border-2 text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-pink-500 w-full h-10 rounded-full"
          >
            Send me an Email
          </button>
          {isSent && <p className="text-pink-500 mb-4">Thanks for contacting us! Message sent successfully!</p>}
            {error && <p className="text-cyan-500 mb-4">{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;