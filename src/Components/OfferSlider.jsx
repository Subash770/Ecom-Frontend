import React, { useState } from "react";
import "./OfferSlider.css";

const offers = [
  { title: "50% Off on Electronics", imgSrc: "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/53dcf24ecc20bf27.jpg?q=20" },
  { title: "Buy 1 Get 1 Free - Fashion", imgSrc: "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/806d964bcd5934db.jpg?q=20" },
  { title: "Winter Sale - Up to 70% Off", imgSrc: "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/7f3cde58a30f6024.jpg?q=20" },
  { title: "Buy More, Save More - Home", imgSrc: "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/7617fde0004272d6.jpg?q=20" },
  { title: "Flash Deals - 24 Hours Only", imgSrc: "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/fccfde198766277b.jpg?q=20" },
];

const OfferSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + offers.length) % offers.length);
    };
  
    return (
      <div className="offer-slider">
        <button className="slider-btn prev" onClick={prevSlide}>
          ❮
        </button>
        <div className="slider-container">
          <div
            className="offer-row"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {offers.map((offer, index) => (
              <div className="offer-item" key={index}>
                <img src={offer.imgSrc} alt={offer.title} className="offer-img" />
                <p className="offer-title">{offer.title}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="slider-btn next" onClick={nextSlide}>
          ❯
        </button>
      </div>
    );
  };
  
  export default OfferSlider;