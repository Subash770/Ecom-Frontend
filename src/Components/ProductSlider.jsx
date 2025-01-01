import React from 'react';
import Slider from 'react-slick';
import './ProductSlider.css';

function ProductSlider() {
    const products = [
        {
          id: 1,
          name: "Hoodie",
          price: "$14",
          discount: "10%",
          description: "Comfortable and stylish hoodie for all seasons.",
          image: "https://via.placeholder.com/300x200?text=Jacket",
        },
        {
          id: 2,
          name: "Shirt",
          price: "$10",
          discount: "15%",
          description: "Classic shirt for formal and casual occasions.",
          image: "https://via.placeholder.com/300x200?text=Jacket",
        },
        {
          id: 3,
          name: "Sneakers",
          price: "$20",
          discount: "20%",
          description: "Trendy sneakers perfect for daily wear.",
          image: "https://via.placeholder.com/300x200?text=Jacket",
        },
        {
          id: 4,
          name: "Boots",
          price: "$60",
          discount: "50%",
          description: "Cozy boots designed for trekking adventures.",
          image: "https://via.placeholder.com/300x200?text=Jacket",
        },
        {
          id: 5,
          name: "Jeans",
          price: "$30",
          discount: "25%",
          description: "Stylish and durable jeans for everyday wear.",
          image: "https://via.placeholder.com/300x200?text=Jacket",
        },
        {
          id: 6,
          name: "Jacket",
          price: "$50",
          discount: "30%",
          description: "Warm and trendy jacket for cold weather.",
          image: "https://via.placeholder.com/300x200?text=Jacket",
        },
        {
          id: 7,
          name: "Cap",
          price: "$5",
          discount: "5%",
          description: "Lightweight cap, perfect for sunny days.",
          image: "https://via.placeholder.com/300x200?text=Jacket",
        },
        {
          id: 8,
          name: "Backpack",
          price: "$40",
          discount: "35%",
          description: "Durable backpack with ample storage space.",
          image: "https://via.placeholder.com/300x200?text=Jacket",
        },
        {
          id: 9,
          name: "Watch",
          price: "$80",
          discount: "20%",
          description: "Elegant watch for all occasions.",
          image: "https://via.placeholder.com/300x200?text=Jacket",
        },
      ];
      

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="product-slider-container">
      <h2>Our Products</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product-slide">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>Price: {product.price}</p>
              <p>Discount: {product.discount}</p>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductSlider;
