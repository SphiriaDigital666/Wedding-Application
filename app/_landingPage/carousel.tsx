'use client';

import React, { useState, useEffect } from 'react';

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const photos = [
    '/landingPage/main-carousel 01.jpg',
    '/landingPage/main-carousel 02.jpg',
    '/landingPage/main-carousel 03.jpg',
  ];

  const goToPrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + photos.length) % photos.length
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % photos.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[40vh] md:h-[90vh] overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}vw)`,
          width: `${photos.length * 100}vw`,
        }}
      >
        {photos.map((photo, index) => (
          <div key={index} className="w-full h-full relative">
            <img
              src={photo}
              alt={`Slide ${index + 1}`}
              className="w-full h-[40vh] md:h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div
        className="absolute top-1/2 left-5 cursor-pointer text-24px text-white"
        onClick={goToPrevSlide}
      >
        &#10094;
      </div>
      <div
        className="absolute top-1/2 right-5 cursor-pointer text-24px text-white"
        onClick={goToNextSlide}
      >
        &#10095;
      </div>
    </div>
  );
};

export default Carousel;
