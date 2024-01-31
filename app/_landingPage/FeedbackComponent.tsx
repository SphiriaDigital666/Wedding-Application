"use client";
import React, { useState } from "react";

const FeedbackComponent = () => {
  const feedbackData = [
    {
      name: "Michael",
      imageSrc: "/landingPage/feedback-image1.png",
      paragraph1: "Michael Paragraph 1",
      paragraph2: "Michael Paragraph 2",
    },
    {
      name: "John",
      imageSrc: "/landingPage/feedback-image2.jpeg",
      paragraph1: "John Paragraph 1",
      paragraph2: "John Paragraph 2",
    },
    // Add more data for other feedback images
  ];

  const [selectedFeedback, setSelectedFeedback] = useState(feedbackData[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleImageClick = (index) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setSelectedFeedback(feedbackData[index]);
      setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Adjust the duration of the animation (in milliseconds)
    }
  };

  return (
    <div>
      <div
        className={`grid grid-cols-2 ${
          isAnimating ? "opacity-0" : "opacity-100"
        }`}
      >
        <div>
          <p className="text-[#211919] text-[48px] font-bold mb-4">
            {selectedFeedback.name}
          </p>
          <p className="text-[#919293] text-[20px] mb-8">
            {selectedFeedback.paragraph1}
          </p>
          <p className="text-[#919293] text-[20px]">
            {selectedFeedback.paragraph2}
          </p>
        </div>

        <div
          className={`transition-opacity duration-500 ease-in-out ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          <img
            src={selectedFeedback.imageSrc}
            alt="Main Image"
            width={624}
            height={487}
            className=""
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-8">
        {feedbackData.map((feedback, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(index)}
            className="transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-80 cursor-pointer"
          >
            <div className="h-[120px] w-[120px] bg-gray-300 rounded-full flex items-center justify-center">
              <img
                src={feedback.imageSrc}
                alt={`feedback image ${index + 1}`}
                width={300}
                height={300}
                className="h-[120px] w-[120px] rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackComponent;
