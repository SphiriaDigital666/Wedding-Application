"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MdCalendarMonth } from "react-icons/md";

const users = [
  {
    id: 1,
    name: "Mohini Arjun Pandit",
    age: 29,
    height: 5.1,
    job: "MCom, Manager, Mumbai",
    date: "14 Mar 2024",
    img: "https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/add-photo-male.png",
    isPremium: true,
  },
  {
    id: 2,
    name: "Later",
    age: 28,
    height: 5.2,
    job: "Other Masters Degree in Engineering / Computers,Sales Professional, Mumbai",
    date: "06 Mar 2024",
    img: "https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/verify-profile-with-id.png",
    isPremium: false,
  },
];

const MatchesViewed = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-bold mt-4 border-b-2 py-4 border-lime-600 w-fit">
        Matches Viewed By You (2)
      </h1>
      <div className="image-block mt-6 flex">
        {users.map((user) => (
          <div
            key={user.id}
            className="md:basis-1/3 lg:basis-[45%] sm:basis-1/2"
          >
            <div className="bg-white shadow-lgoverflow-hidden mr-6 flex justify-between">
              <div className="image-block w-[170px] h-[170px] rounded-lg relative">
                <Image
                  src={user.img}
                  alt={user.name}
                  width={300}
                  height={300}
                  className="w-full h-full rounded-lg"
                />
                {user.isPremium && (
                  <Image
                    src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/icon-gold-member.svg"
                    alt="premium-img"
                    width={50}
                    height={50}
                    className="w-[30px] h-[30px] absolute top-0 right-0 z-10"
                  />
                )}
              </div>

              <div className="p-4 bottom-0 w-1/2">
                <div className="flex flex-col items-start justify-center">
                  <p className="text-md font-bold text-black mb-2">
                    {user.name}
                  </p>
                  <p className="text-sm font-light text-black mb-2 text-left">
                    {user.job}
                  </p>
                  <div className="date">
                    <div className="flex items-center">
                      <MdCalendarMonth className="w-6 h-6" />
                      <p className="text-sm font-light text-black ml-2">
                        {user.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchesViewed;
