'use client';
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ProfilePending = () => {
  return (
    <div className="flex border-2 rounded-lg h-16 w-full border-[#5BACE3] justify-between items-center px-4">
      <Image
        src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/verify-profile-img.svg" // Path to the image within the public directory
        alt="Description of the image" // Alternate text for accessibility
        width={100} // Width of the image
        height={50} // Height of the image
        className="w-20 h-10"
      />

      <p>
        Your profile is pending verification! Verify now to get better responses
      </p>
      <Button
        variant="outline"
        className="border-2 border-[#5BACE3] bg-[#5BACE3] rounded-full text-base"
      >
        Verify Profile
      </Button>
    </div>
  );
};

export default ProfilePending;
