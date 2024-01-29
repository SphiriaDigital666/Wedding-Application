// pages/index.tsx
"use client";
// pages/index.tsx

import React, { useState, useEffect } from "react";

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const photos = ["/1.png", "/2.jpg", "/3.jpg"];

  // const paragraphs = [
  //   "The biggest and most trusted Matrimony service for Tamils!",
  //   // Add more paragraphs if needed
  // ];

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
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          zIndex: 1,
          position: "absolute",
          top: "10%",
          width: "100%",
        }}
      >
        Photo Carousel
      </h1>
      <div
        style={{
          display: "flex",
          transition: "transform 1s ease-in-out",
          transform: `translateX(-${currentSlide * 100}vw)`,
          width: `${photos.length * 100}vw`,
        }}
      >
        {photos.map((photo, index) => (
          <div
            key={index}
            style={{ width: "100vw", height: "100vh", position: "relative" }}
          >
            <img
              src={photo}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "10%",
                left: "50%",
                transform: "translateX(-50%)",
                textAlign: "center",
                color: "white",
                zIndex: 1,
              }}
            ></div>
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "1%",
          cursor: "pointer",
          fontSize: "24px",
          color: "white",
        }}
        onClick={goToPrevSlide}
      >
        &#10094;
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "1%",
          cursor: "pointer",
          fontSize: "24px",
          color: "white",
        }}
        onClick={goToNextSlide}
      >
        &#10095;
      </div>
    </div>
  );
};

export default Carousel;
