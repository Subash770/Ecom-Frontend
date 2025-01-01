import React from 'react';

function About() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>About EcomShop</h1>
      <p>
        Welcome to <strong>EcomShop</strong>, your one-stop destination for trendy and affordable products.
        Our mission is to bring you the best shopping experience with a wide range of products tailored to
        meet your needs.
      </p>
      <h2>Who We Are</h2>
      <p>
        At EcomShop, we believe in quality, affordability, and customer satisfaction. From apparel to accessories,
        we have everything you need to complement your lifestyle. Our team is dedicated to sourcing the finest
        products from trusted suppliers and ensuring they reach you in perfect condition.
      </p>
      <h2>Why Choose Us?</h2>
      <ul style={{ listStyleType: 'disc', textAlign: 'left', maxWidth: '800px', margin: '20px auto' }}>
        <li>Wide variety of products at unbeatable prices.</li>
        <li>Fast and reliable shipping across the globe.</li>
        <li>Secure and hassle-free online shopping experience.</li>
        <li>24/7 customer support to assist you with your queries.</li>
      </ul>
      <h2>Our Values</h2>
      <p>
        We value trust, transparency, and innovation. Our goal is to build lasting relationships with our
        customers by exceeding their expectations at every step of their shopping journey.
      </p>
      <p>
        Thank you for choosing EcomShop. We look forward to serving you and making your shopping experience
        delightful!
      </p>
    </div>
  );
}

export default About;
