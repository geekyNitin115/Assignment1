import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"; // Import CSS file

const ImageSlider = () => {
  const imageSrc = "/images/Testimonial.png"; // Correct path for Vite (public folder)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {[...Array(5)].map((_, index) => (
          <div key={index} className="slider-slide">
            <img src={imageSrc} alt={`slide-${index}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;