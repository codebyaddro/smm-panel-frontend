import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AutoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-play
    autoplaySpeed: 3000, // Set auto-play speed to 3 seconds
  };

  return (
    <div className="">
      <Slider {...settings}>
        <div className="">
          <img className='md:mx-auto flex justify-center items-center  ' src="./images/page 01.jpg" alt="" />
        </div>
        <div className="">
          <img src="./images/page 02.jpg" alt="" className='md:mx-auto' />
        </div>
        <div className="">
          <img src="//public/images/" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default AutoCarousel;