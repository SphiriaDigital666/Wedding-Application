"use client";
import React, { useState } from "react";
import Image from "next/image";

const FeedbackComponent = () => {
  const feedbackData = [
    {
      name: "Robert Wrick",
      imageSrc: "/landingPage/feedback-image1.png",
      paragraph1:
        "I found my soulmate from here. (Name of the site) I was very clear with what I wanted. When I create my profile I honestly added my hobbies and interests.",
      paragraph2:
        "(Name of the site) choses dates for us, organized timetables, and, surprisingly, made the café reservations. Dating became tranquil and fun.",
    },

    {
      name: "Mathew Jason",
      imageSrc: "/landingPage/feedback-image2.jpg",
      paragraph1: "John Paragraph 1",
      paragraph2: "John Paragraph 2",
    },

    {
      name: "Ricky Ponting",
      imageSrc: "/landingPage/feedback-image3.jpeg",
      paragraph1: "John Paragraph 1",
      paragraph2: "John Paragraph 2",
    },

    {
      name: "Steve Smith",
      imageSrc: "/landingPage/feedback-image4.jpg",
      paragraph1: "John Paragraph 1",
      paragraph2: "John Paragraph 2",
    },

    {
      name: "Andrew Michael",
      imageSrc: "/landingPage/feedback-image5.jpg",
      paragraph1: "John Paragraph 1",
      paragraph2: "John Paragraph 2",
    },

    {
      name: "Mathew Henry",
      imageSrc: "/landingPage/feedback-image6.jpg",
      paragraph1: "John Paragraph 1",
      paragraph2: "John Paragraph 2",
    },

    {
      name: "Mathew Henry",
      imageSrc: "/landingPage/feedback-image7.jpg",
      paragraph1: "John Paragraph 1",
      paragraph2: "John Paragraph 2",
    },
  ];

  const [selectedFeedback, setSelectedFeedback] = useState(feedbackData[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleImageClick = (index: number) => {
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
        <div className="">
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
          <Image
            src={selectedFeedback.imageSrc}
            alt="Main Image"
            width={624}
            height={487}
            className=""
          />
        </div>
      </div>

      <div className="flex items-center justify-center mt-8 mb-8">
        <Image
          src="/landingPage/rating-icons.png"
          alt="Main Image"
          width={288}
          height={44}
          className=""
        />
      </div>

      <div className="flex items-center justify-center gap-8">
        {feedbackData.map((feedback, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(index)}
            className="transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-80 cursor-pointer"
          >
            <div className="h-[130px] w-[130px] bg-gray-300 rounded-full flex items-center justify-center border-4 border-[#5BACE3]">
              <Image
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
