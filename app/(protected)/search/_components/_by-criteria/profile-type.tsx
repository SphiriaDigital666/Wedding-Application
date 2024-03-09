"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries } from "@/constants";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FC, useEffect, useState } from 'react';

interface ProfileTypeProps {
  onSelectChange: (data: object) => void;
}

const ProfileType: FC<ProfileTypeProps> = ({ onSelectChange }) => {
  const [data, setData] = useState<object>({
    profileWithPhoto: false,
    hideProfile: "",
  });

  const handleCheckboxChange = (checked: boolean) => {
    setData({
      ...data,
      profileWithPhoto: checked,
    });
  };

  const handleSelectChange = (key: string, value: string) => {
    setData({
      ...data,
      [key]: value,
    });
  };

  useEffect(() => {
    onSelectChange(data);
  }, [data]);

  return (
    <div className="md:col-span-1">
      <div className="row grid grid-cols-3">
        <div className="bg-[#5BACE3] text-white font-bold text-md py-2 px-3 rounded-lg">
          Profile Type
        </div>
      </div>
      <div className="row grid grid-cols-3 mt-2">
        <div className="col-span-1 ">
          <Label htmlFor="profileWithPhoto" className="flex items-center h-full ml-3">
            Profile with Photo
          </Label>
        </div>
        <div className="col-span-2">
          <div className="flex items-center col-span-2">
            <Checkbox
              id="profileWithPhoto"
              onCheckedChange={handleCheckboxChange}
            />
            <label
              htmlFor="profileWithPhoto"
              className="ml-2 text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Matches who have added photos
            </label>
          </div>
        </div>
      </div>
      <div className="row grid grid-cols-3 mt-2">
        <div className="col-span-1 ">
          <Label htmlFor="hideProfile" className="flex items-center h-full ml-3">
            Don’t show profile
          </Label>
        </div>
        <div className="col-span-2">
          <div className="flex items-center col-span-2">
            <Select
              onValueChange={(value) => handleSelectChange("hideProfile", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((option, index) => (
                  <SelectItem key={index} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileType;
