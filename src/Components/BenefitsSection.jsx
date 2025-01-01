import React from 'react';

function BenefitsSection() {
  return (
    <div style={{ marginTop: '40px' }}>
      <h2>Why Shop with Us?</h2>
      <p>
        At EcomShop, we offer quality products at great prices, with excellent customer service and fast delivery.
      </p>
      <ul style={{ listStyleType: 'disc', textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
        <li>Quality products from trusted brands.</li>
        <li>Easy returns and exchanges.</li>
        <li>24/7 customer support available.</li>
        <li>Secure payment options.</li>
      </ul>
    </div>
  );
}

export default BenefitsSection;
