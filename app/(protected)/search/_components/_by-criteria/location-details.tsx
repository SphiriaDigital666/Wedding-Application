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

interface LocationDetailsProps {
  onSelectChange: (data: object) => void;
}

const LocationDetails: FC<LocationDetailsProps> = ({ onSelectChange }) => {
  const [data, setData] = useState<Record<string,any>>({
    nearbyProfiles: false,
    country: "",
    citizenship: "",
  });

  const handleCheckboxChange = (checked: boolean) => {
    setData({
      ...data,
      nearbyProfiles: checked,
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
          Location Details
        </div>
      </div>
      <div className="row grid grid-cols-3 mt-2">
        <div className="col-span-1 ">
          <Label htmlFor="nearbyProfiles" className="flex items-center h-full ml-3">
            Nearby Profiles
          </Label>
        </div>
        <div className="col-span-2">
          <div className="flex items-center col-span-2">
            <Checkbox
              id="nearbyProfiles"
              onCheckedChange={handleCheckboxChange}
            />
            <label
              htmlFor="nearbyProfiles"
              className="ml-2 text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Matches near your location
            </label>
          </div>
        </div>
      </div>
      <div className="row grid grid-cols-3 mt-2">
        <div className="col-span-1 ">
          <Label htmlFor="country" className="flex items-center h-full ml-3">
            Country
          </Label>
        </div>
        <div className="col-span-2">
          <div className="flex items-center col-span-2">
            <Select
              onValueChange={(value) => handleSelectChange("country", value)}
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
      <div className="row grid grid-cols-3 mt-2">
        <div className="col-span-1 ">
          <Label htmlFor="citizenship" className="flex items-center h-full ml-3">
            Citizenship
          </Label>
        </div>
        <div className="col-span-2">
          <div className="flex items-center col-span-2">
            <Select
              onValueChange={(value) => handleSelectChange("citizenship", value)}
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

export default LocationDetails;
