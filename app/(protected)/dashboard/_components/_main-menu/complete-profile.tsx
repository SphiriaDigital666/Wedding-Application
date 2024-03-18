"use client";
import React from "react";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const users = [
  {
    id: 1,
    des: "Your photo is the first thing that your matches look at",
    btn: "Add Photo",
    img: "https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/add-photo-male.png",
  },
  {
    id: 2,
    des: "Get 10x more responses by verifying your profile with a Govt ID",
    btn: "Verify Profile With ID",
    img: "https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/verify-profile-with-id.png",
  },
  {
    id: 3,
    des: "View horoscope compatible matches by adding your time and place of birth",
    btn: "Generate Horoscope",
    img: "https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/generate-horoscope-male.png",
  },
  {
    id: 4,
    des: "Let matches know your family better by adding your family details",
    btn: "Add Family Details",
    img: "https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/add-family-details.png",
  },
  {
    id: 5,
    des: "Let matches know where your have studied",
    btn: "Add Institution Details",
    img: "https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/add-institution-details.png",
  },
  {
    id: 6,
    des: "Members look for organization details while searching for a perfect match",
    btn: "Add Organisation",
    img: "https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/add-organization.png",
  },
];

const CompleteProfile = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-bold mt-4">Complete Your Profile</h1>
      <div className="flex items-center mt-1">
        <p className="font-light">Profile completeness score 46%</p>
        <Progress value={46} className="w-[10%] h-[10px] ml-2" />
      </div>
      <div className="image-block mt-4">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {users.map((user) => (
              <CarouselItem
                key={user.id}
                className="md:basis-1/3 lg:basis-[45%] sm:basis-1/2"
              >
                <div className="bg-white shadow-lg relative overflow-hidden">
                  <Image
                    src={user.img}
                    alt={user.btn}
                    width={300}
                    height={300}
                    className="w-full h-[170px] relative"
                  />
                  <div className="p-4 absolute bottom-0 w-full">
                    <div className="flex flex-col items-end justify-center">
                      <p className="text-lg font-normal text-black w-2/3 text-center mb-2">
                        {user.des}
                      </p>
                      <Button
                        variant="outline"
                        className="border-2 border-[#5BACE3] bg-[#5BACE3] text-white rounded-full text-base w-2/3 text-center"
                      >
                        {user.btn}
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </div>
    </div>
  );
};

export default CompleteProfile;
