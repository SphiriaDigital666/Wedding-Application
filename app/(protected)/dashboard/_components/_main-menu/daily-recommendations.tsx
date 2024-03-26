'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { UserProfile } from '@prisma/client';
import { FC } from 'react';

interface UsersProps {
  users: UserProfile;
}

export const DailyRecommendations: FC<any> = ({ users }) => {
  const userProfile = users
  const currentDate = new Date();
  const dayOfMonth = currentDate.getDate();
  const getOrdinalSuffix = (day: any) => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };
  const ordinalSuffix = getOrdinalSuffix(dayOfMonth);
  const monthName = currentDate.toLocaleString('en-US', { month: 'short' });
  const formattedDate = `${dayOfMonth}${ordinalSuffix} ${monthName}`;

  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-bold mt-4">
        Your Daily Recommendations for {formattedDate}
      </h1>
      <div className="image-block mt-4">
        {userProfile && userProfile.length >= 4 && (
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {userProfile.map((user: any) => (
                <CarouselItem key={user.id} className="md:basis-1/3 lg:basis-[22.2%] sm:basis-1/2">
                  <div className="bg-white shadow-lg relative rounded-lg overflow-hidden object-cover transition-transform duration-300 transform hover:scale-110">
                    <Image
                      src={user?.profileImage!}
                      alt={user.id}
                      width={300}
                      height={300}
                      className="w-full h-[130px] relative rounded-lg transition delay-150 duration-300 ease-in-out"
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
        )}
        {userProfile && userProfile.length < 4 && (
          <div className="flex justify-between flex-wrap">
            {userProfile.map((user: any) => (
              <div key={user.id} className="mb-4 object-cover transition-transform duration-300 transform hover:scale-110">
                <div className="bg-white shadow-lg relative rounded-lg flex ">
                  <Image
                    src={user?.profileImage!}
                    alt={user.id}
                    width={300}
                    height={300}
                    className="h-[130px] w-[200px] relative rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                  <div className="p-4 absolute -bottom-4">
                    <p className="text-sm font-normal text-white">{user.name}</p>
                    <p className="text-sm font-light text-white">
                      Age: {user.age} Height: {user.height}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <p className="font-bold mt-4">Time left to view your daily matches - <span className="text-[#5BACE3]">02 : 20 : 11</span></p>
    </div>
  );
};

export default DailyRecommendations;
