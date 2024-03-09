"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FC, useEffect, useState } from 'react';

interface ProfileTypeProps {
  onSelectChange: (data: object) => void;
}

const RecentlyActiveProfile: FC<ProfileTypeProps> = ({ onSelectChange }) => {
  const [selectedButton, setSelectedButton] = useState<String>("");
  const [data, setData] = useState<object>({
    profileBtn: "",
  });


  


  const handleButtonClick = (buttonName: String) => {
    setSelectedButton(buttonName);
    setData({
      ...data,
      profileBtn: buttonName,
    });
  };

  useEffect(() => {
    onSelectChange(data);
  }, [data]);

  return (
    <div className="md:col-span-1">
      <div className="row grid grid-cols-3">
        <div className="bg-[#5BACE3] text-white font-bold text-md py-2 px-3 rounded-lg">
          Recently Active Profile
        </div>
      </div>
      <div className="row grid grid-cols-1 mt-2">
        <div className="">
          <Label htmlFor="age" className="flex items-center h-full ml-3">
            Profile Created
          </Label>
        </div>
        <div className="">
          <Label
            htmlFor="age"
            className="flex items-center h-full ml-3 text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Profile Created
          </Label>
        </div>
        <div className="ml-3 row space-x-1">
          {["All", "Today", "Last 3 days", "One week", "One month"].map((buttonName) => (
            <Button
              key={buttonName}
              variant={selectedButton === buttonName ? "filled" : "outline"}
              className={`border-2 border-[#5BACE3] h-1 ${
                selectedButton === buttonName ? "bg-[#5BACE3] text-white" : ""
              }`}
              onClick={() => handleButtonClick(buttonName)}
            >
              {buttonName}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyActiveProfile;
