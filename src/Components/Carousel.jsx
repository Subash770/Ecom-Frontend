import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';

function Carousel() {
  const offers = [
    { id: 1, image: "https://via.placeholder.com/400x200?text=50%+OFF+on+Hoodies", alt: "50% OFF on Hoodies" },
    { id: 2, image: "https://via.placeholder.com/400x200?text=Buy+1+Get+1+Shirts", alt: "Buy 1 Get 1 on Shirts" },
    { id: 3, image: "https://via.placeholder.com/400x200?text=Free+Shipping+Today", alt: "Free Shipping Today" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {offers.map((offer) => (
          <div key={offer.id} className="carousel-slide">
            <img src={offer.image} alt={offer.alt} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
