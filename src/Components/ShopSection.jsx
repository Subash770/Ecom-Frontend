import React from 'react';

function ShopSection() {
  return (
    <div>
      <h2>Shop Now!</h2>
      <p>Discover our latest products and exclusive deals.</p>
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: 'blueviolet',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
        onClick={() => window.location.href = '/products'}
      >
        Explore Products
      </button>
    </div>
  );
}

export default ShopSection;
