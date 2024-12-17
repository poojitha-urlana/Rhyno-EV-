import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";

const ImageSlider = () => {
  const settings = {
    fade: true,
    speed: 200,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings} className="hero-slider">
      <div className="slider_item slider_item-01 mt0">
        
      </div>
      <div className="slider_item slider_item-02 mt0">
        
      </div>
      <div className="slider_item slider_item-03 mt0">
        
      </div>
    </Slider>
  );
};

export default ImageSlider;
