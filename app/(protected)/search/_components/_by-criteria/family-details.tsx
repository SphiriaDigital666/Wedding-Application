"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { familyStatus, familyValues, familyTypes } from "@/constants";
import { Label } from "@/components/ui/label";
import { FC, useEffect, useState } from 'react';

interface FamilyDetailsProps {
  onSelectChange: (data: object) => void;
}

const FamilyDetails: FC<FamilyDetailsProps> = ({ onSelectChange }) => {
  const [data, setData] = useState<object>({
    familyStatus: "",
    familyValue: "",
    familyType: "",
  });

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
          Family Details
        </div>
      </div>
      <div className="row grid grid-cols-3 mt-2">
        <div className="col-span-1 ">
          <Label htmlFor="familyStatus" className="flex items-center h-full ml-3">
            Family Status
          </Label>
        </div>
        <div className="col-span-2">
          <div className="flex items-center col-span-2">
            <Select
              onValueChange={(value) => handleSelectChange("familyStatus", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                {familyStatus.map((option, index) => (
                  <SelectItem key={index} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="row grid grid-cols-3 mt-2">
        <div className="col-span-1 ">
          <Label htmlFor="familyValue" className="flex items-center h-full ml-3">
            Family Value
          </Label>
        </div>
        <div className="col-span-2">
          <div className="flex items-center col-span-2">
            <Select
              onValueChange={(value) => handleSelectChange("familyValue", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                {familyValues.map((option, index) => (
                  <SelectItem key={index} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="row grid grid-cols-3 mt-2">
        <div className="col-span-1 ">
          <Label htmlFor="familyType" className="flex items-center h-full ml-3">
            Family Type
          </Label>
        </div>
        <div className="col-span-2">
          <div className="flex items-center col-span-2">
            <Select
              onValueChange={(value) => handleSelectChange("familyType", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                {familyTypes.map((option, index) => (
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

export default FamilyDetails;
