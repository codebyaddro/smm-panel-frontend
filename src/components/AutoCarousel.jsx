import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AutoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-play
    autoplaySpeed: 3000, // Set auto-play speed to 3 seconds
  };

  return (
    <div className="w-full bg-gradient-to-r from-fuchsia-600 to-violet-500">
      <Slider {...settings}>
        <div className="">
          <img className='h-[70%] w-[80%] mx-auto' src="./images/Grow Authentic Websiute.jpg" alt="" />
        </div>
        <div className="">
          <img src="./images/Grow Authentic Websiute 01.jpg" alt="" className='h-[70%] w-[80%] mx-auto' />
        </div>
        <div className="p-4 bg-yellow-200 text-center">
          <h3 className="text-xl font-bold">Slide 3</h3>
          <p>This is the third slide content.</p>
        </div>
      </Slider>
    </div>
  );
};

export default AutoCarousel;