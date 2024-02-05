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
      }, 500);
    }
  };

  return (
    <div className="">
      <div className="bg-[#aee2ee]">
        <div className="container mx-auto">
          <div
            className={`grid grid-cols-2 gap-0  ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className=" bg-[#effafc]">
              <p className="text-[#211919] text-[48px] font-bold mb-4 mt-8 mx-[70px]">
                {selectedFeedback.name}
              </p>

              <div className="flex items-center gap-6 mx-[70px] mb-8">
                <p className="text-[#919293] text-[20px] font-bold">
                  Star Rating 5/5
                </p>

                <Image
                  src="/landingPage/rating-icons.png"
                  alt="Main Image"
                  width={152}
                  height={23}
                  className=""
                />
              </div>

              <p className="text-[#919293] text-[20px] 2xl:text-[20px] xl:text-[18px] lg:text-[16px] font-bold mb-8 mx-[70px]">
                {selectedFeedback.paragraph1}
              </p>
              <p className="text-[#919293] text-[20px] 2xl:text-[20px] xl:text-[18px] lg:text-[16px] font-bold mx-[70px] mb-8">
                {selectedFeedback.paragraph2}
              </p>
            </div>

            <div
              className={`transition-opacity duration-500 ease-in-out   ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <Image
                src={selectedFeedback.imageSrc}
                alt="Main Image"
                width={624}
                height={487}
                className="2xl:w-[624px] 2xl:h-auto xl:w-[624px] xl:h-auto"
              />
            </div>
          </div>
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

      <div className="flex items-center justify-center gap-8 bg-[#d0dfe2] py-10">
        {feedbackData.map((feedback, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(index)}
            className="transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-80 cursor-pointer"
          >
            <div className="2xl:h-[130px] 2xl:w-[130px] xl:h-[120px] xl:w-[120px] lg:h-[110px] lg:w-[110px] bg-gray-300 rounded-full flex items-center justify-center border-4 border-[#5BACE3]">
              <Image
                src={feedback.imageSrc}
                alt={`feedback image ${index + 1}`}
                width={300}
                height={300}
                className="2xl:h-[120px] 2xl:w-[120px] xl:h-[110px] xl:w-[110px] lg:h-[100px] lg:w-[100px] rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackComponent;
