"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ProfileId = () => {
  const handleInputChange = (e: any) => {};
  const handleButtonClick = (e: any) => {};

  return (
    <div>
      <div className="header my-6 w-full flex flex-col items-center">
        <p className="bg-[#5BACE3] text-white font-bold text-md py-3 px-12 w-[90%] rounded-lg text-center">
          Enter Memory ID
        </p>
        <div className="w-[40%] mt-10">
          <Input
            type="text"
            placeholder="Any"
            className="w-full"
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-4">
        <Button
              variant="outline"
              className="border-2 border-[#5BACE3] w-[200px]"
              onClick={() => handleButtonClick}
            >
              View Profile
            </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileId;
