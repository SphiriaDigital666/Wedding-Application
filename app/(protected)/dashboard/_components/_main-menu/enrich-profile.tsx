"use client";
import React from "react";
import Image from "next/image";
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
];

const EnrichProfile = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-bold mt-4">Enrich Your Profile</h1>
      <div className="flex items-center mt-1">
        <p className="font-light">
          Add below details to let prospects know more about you and get higher
          responses
        </p>
      </div>
      <div className="image-block mt-4 flex">
        {users.map((user) => (
          <div
            key={user.id}
            className="md:basis-1/3 lg:basis-[45%] sm:basis-1/2"
          >
            <div className="bg-white shadow-lg relative overflow-hidden mr-6">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrichProfile;
