import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by: ${formData.name}`);
    // Handle form submission (e.g., send data to backend)
  };

  return (
    <div style={{ marginTop: '40px' }}>
      <h2>Send Us a Message</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ padding: '10px', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ padding: '10px', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ padding: '10px', width: '100%', height: '150px' }}
          ></textarea>
        </div>
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: 'blueviolet',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
