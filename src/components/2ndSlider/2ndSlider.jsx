import React, { useState } from "react";
import "./2ndSlider.css";

const images = [
  "/images/2ndSlider1.png",
  "/images/2ndSlider2.png",
  "/images/3rdSlider.png",
  "/images/5thSlider.png"
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <button className="prev-btn" onClick={prevSlide}>❮</button>
      <img 
        src={images[currentIndex]} 
        alt={`Slide ${currentIndex + 1}`} 
        className="slider-image fade-in"
      />
      <button className="next-btn" onClick={nextSlide}>❯</button>
    </div>
  );
};

const SliderApp = () => {
  return (
    <div className="page-container">
      <div className="banner">
        <h1><span>Your</span> <strong>Videos</strong></h1>
        <h1><span>Your</span> <strong>Brand</strong></h1>
        <h1><span>Your</span> <strong>Website</strong></h1>
      </div>
      <div className="content">
        <h3 className="highlight">Media+ in action:</h3>
        <h2 className="title">Customer Spotlight</h2>
        <p className="description">
          See how customers use Media+ to create branded media sites that captivate and convert.
        </p>
        <Slider />
      </div>
    </div>
  );
};

export default SliderApp;