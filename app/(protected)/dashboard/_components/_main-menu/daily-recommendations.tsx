import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const users = [
  {
    id: 1,
    name: "Jone Doe",
    age: 23,
    height: 5.3,
    img: "https://source.unsplash.com/Di7Eg6FJGXA", // Corrected image URLs
  },
  {
    id: 2,
    name: "JEma Whatson",
    age: 25,
    height: 5.0,
    img: "https://source.unsplash.com/pfHX93lxp1g", // Corrected image URLs
  },
  {
    id: 3,
    name: "Jone Doe",
    age: 23,
    height: 5.3,
    img: "https://source.unsplash.com/Di7Eg6FJGXA", // Corrected image URLs
  },
  {
    id: 4,
    name: "Frank Doe",
    age: 29,
    height: 5.8,
    img: "https://source.unsplash.com/bOMVTvE2QFU", // Corrected image URLs
  },
  {
    id: 5,
    name: "Jack Ryan",
    age: 30,
    height: 6.3,
    img: "https://source.unsplash.com/LJcXEB5Z98o", // Corrected image URLs
  },
  {
    id: 6,
    name: "Frank Doe",
    age: 29,
    height: 5.8,
    img: "https://source.unsplash.com/bOMVTvE2QFU", // Corrected image URLs
  },
];

const DailyRecommendations = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-bold mt-4">
        Your Daily Recommendations for 14th Mar
      </h1>
      <div className="image-block mt-4">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {users.map((user) => (
              <CarouselItem key={user.id} className="md:basis-1/3 lg:basis-[22.2%] sm:basis-1/2">
                <div className="bg-white shadow-lg relative rounded-lg overflow-hidden">
                  <Image
                    src={user.img}
                    alt={user.name}
                    width={300}
                    height={300}
                    className="w-full h-[130px] relative rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <div className="p-4 absolute -bottom-4">
                    <p className="text-sm font-normal text-white">
                      {user.name}
                    </p>
                    <p className="text-sm font-light text-white">
                      Age: {user.age} Height: {user.height}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </div>
      <p className="font-bold mt-4">Time left to view your daily matches - <span className="text-[#5BACE3]">02 : 20 : 11</span></p>
    </div>
  );
};

export default DailyRecommendations;
