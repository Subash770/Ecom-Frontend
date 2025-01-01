import React from 'react';
import ContactInfo from '../Components/ContactInfo';
import ContactForm from '../Components/ContactForm';
import MapSection from '../Components/MapSection';
function Contact() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Contact Us</h1>
      <ContactInfo />
      <ContactForm />
      <MapSection />
    </div>
  );
}

export default Contact;
