import React from 'react';
import './Marquee.css';

function Marquee() {
  return (
    <div className="marquee-container">
      <marquee behavior="scroll" direction="left" className="marquee-text">
        🚀 Big Sale: Up to 50% OFF on all products! | 🎁 Free Shipping on Orders Over $50! | 💥 Exclusive Deals Daily!
      </marquee>
    </div>
  );
}

export default Marquee;
