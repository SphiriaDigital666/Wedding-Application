'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const FeedbackComponent = () => {
  const feedbackData = [
    {
      name: 'Robert Wrick',
      imageSrc: '/landingPage/feedback-image1.png',
      paragraph1:
        'I found my soulmate from here. (Name of the site) I was very clear with what I wanted. When I create my profile I honestly added my hobbies and interests.',
      paragraph2:
        '(Name of the site) choses dates for us, organized timetables, and, surprisingly, made the café reservations. Dating became tranquil and fun.',
    },

    {
      name: 'Mathew Jason',
      imageSrc: '/landingPage/feedback-image2.jpg',
      paragraph1: 'John Paragraph 1',
      paragraph2: 'John Paragraph 2',
    },

    {
      name: 'Ricky Ponting',
      imageSrc: '/landingPage/feedback-image3.jpeg',
      paragraph1: 'John Paragraph 1',
      paragraph2: 'John Paragraph 2',
    },

    {
      name: 'Steve Smith',
      imageSrc: '/landingPage/feedback-image4.jpg',
      paragraph1: 'John Paragraph 1',
      paragraph2: 'John Paragraph 2',
    },

    {
      name: 'Andrew Michael',
      imageSrc: '/landingPage/feedback-image5.jpg',
      paragraph1: 'John Paragraph 1',
      paragraph2: 'John Paragraph 2',
    },

    {
      name: 'Mathew Henry',
      imageSrc: '/landingPage/feedback-image6.jpg',
      paragraph1: 'John Paragraph 1',
      paragraph2: 'John Paragraph 2',
    },

    {
      name: 'Mathew Henry',
      imageSrc: '/landingPage/feedback-image7.jpg',
      paragraph1: 'John Paragraph 1',
      paragraph2: 'John Paragraph 2',
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
      <div className="md:bg-[#aee2ee]">
        <div className="md:container md:mx-auto">
          <div
            className={`flex md:grid md:grid-cols-2 gap-0  ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className="flex bg-white w-[350px] md:w-full rounded-lg p-2 shadow-2xl md:bg-[#effafc] gap-2 justify-center items-center m-[-32px] md:m-0 md:rounded-none md:shadow-none">
              <div
                className={`md:hidden transition-opacity duration-500 ease-in-out w-[250px] ${
                  isAnimating ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <Image
                  src={selectedFeedback.imageSrc}
                  alt="Main Image"
                  width={400}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-start items-start">
                <div className="flex md:flex-col mt-4 justify-between gap-8 items-center md:justify-start md:items-start">
                  <p className="text-[#211919] text-[15px] md:text-[48px] font-bold md:mb-4 md:mt-8 md:mx-[70px]">
                    {selectedFeedback.name}
                  </p>

                  <div className="flex flex-col-reverse md:flex-row items-center md:gap-6 md:mx-[70px] md:mb-8">
                    <p className="text-[#919293] text-[6px] md:text-[20px] font-bold">
                      Star Rating 5/5
                    </p>

                    <Image
                      src="/landingPage/rating-icons.png"
                      alt="Main Image"
                      width={152}
                      height={23}
                      className="w-[80px] md:w-[200px]"
                    />
                  </div>
                </div>

                <div className="mt-4 mr-5">
                  <p className="text-[#919293] text-[7px] md:text-[20px] font-bold mb-2 md:mb-8 md:mx-[70px]">
                    {selectedFeedback.paragraph1}
                  </p>
                  <p className="text-[#919293] text-[7px] md:text-[20px] font-bold md:mx-[70px] mb-8">
                    {selectedFeedback.paragraph2}
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`hidden md:block transition-opacity duration-500 ease-in-out   ${
                isAnimating ? 'opacity-0' : 'opacity-100'
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
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center mt-8 mb-8">
        <Image
          src="/landingPage/rating-icons.png"
          alt="Main Image"
          width={288}
          height={44}
          className=""
        />
      </div>

      <div className="flex items-center justify-center md:gap-8 md:bg-[#d0dfe2] md:py-10 mt-16 gap-3">
        {feedbackData.map((feedback, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(index)}
            className="transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-80 cursor-pointer"
          >
            <div className="h-[30px] w-[30px] md:h-[130px] md:w-[130px] bg-gray-300 rounded-full flex items-center justify-center md:border-4 md:border-[#5BACE3]">
              <Image
                src={feedback.imageSrc}
                alt={`feedback image ${index + 1}`}
                width={300}
                height={300}
                className="w-[30px] h-[30px] md:h-[120px] md:w-[120px] rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackComponent;
