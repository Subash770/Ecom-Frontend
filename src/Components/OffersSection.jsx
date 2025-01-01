import React from 'react';

function OffersSection() {
  return (
    <div style={{ marginTop: '40px' }}>
      <h2>Featured Offers</h2>
      <p>Don't miss out on our limited-time offers. Shop now and save big!</p>
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: 'green',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
        onClick={() => window.location.href = '/products'}
      >
        View Offers
      </button>
    </div>
  );
}

export default OffersSection;
