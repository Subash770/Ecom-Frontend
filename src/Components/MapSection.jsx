import React from 'react';

function MapSection() {
  return (
    <div style={{ marginTop: '40px' }}>
      <h2>Find Us on the Map</h2>
      <iframe
        title="EcomShop Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9030386977677!2d90.42110601472298!3d23.8116157963376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b0a9f244636f%3A0xa53a4b8d4081b8a0!2sIFET%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1636116657855!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default MapSection;
