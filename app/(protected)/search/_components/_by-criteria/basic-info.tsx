// BasicInfo.jsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { age, heights } from "@/constants";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FC, useEffect, useState } from 'react';

interface BasicInfoProps {
  onSelectChange: (data: object) => void;
}

const BasicInfo: FC<BasicInfoProps> = ({ onSelectChange }) => {
  const [data, setData] = useState({
    ageFrom: '',
    ageTo: '',
    heightFrom: '',
    heightTo: '',
    profileCreatedBy: '',
  });

  const handleSelectChange = (key: string, value: string | number) => {
    setData({
      ...data,
      [key]: value
    })
  };

  const handleInputChange = (e: any) => {
    setData({
      ...data,
      ["profileCreatedBy"]: e.target.value
    })    
  };

  useEffect(() => {
    onSelectChange(data);
  }, [data])

  return (
    <div className="md:col-span-1">
      <div className="row grid grid-cols-3">
        <div className="bg-[#5BACE3] text-white font-bold text-md py-2 px-3 rounded-lg">
          Basic Info
        </div>
      </div>
      <div className="row grid grid-cols-3 mt-2">
        <div className="col-span-1">
          <Label htmlFor="age" className="flex items-center h-full ml-3">
            Age
          </Label>
        </div>
        <div className="col-span-2">
          <div className="flex items-center col-span-2">
            <Select
              onValueChange={(value) => handleSelectChange('ageFrom', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="18" />
              </SelectTrigger>
              <SelectContent>
                {age.map((option, index) => (
                  <SelectItem key={index} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span className="mx-2">to</span>
            <Select
              onValueChange={(value) => handleSelectChange('ageTo', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="22" />
              </SelectTrigger>
              <SelectContent>
                {age.map((option, index) => (
                  <SelectItem key={index} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      {/* Similar adjustments for other fields: Height, Profile Created By */}
      <div className="row grid grid-cols-3 mt-2">
        <div className="col-span-1">
          <Label htmlFor="height" className="flex items-center h-full ml-3">
            Height
          </Label>
        </div>
        <div className="col-span-2">
          <div className="flex items-center col-span-2">
            <Select
              onValueChange={(value) => handleSelectChange('heightFrom', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="4'6''" />
              </SelectTrigger>
              <SelectContent>
                {heights.map((option, index) => (
                  <SelectItem key={index} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span className="mx-2">to</span>
            <Select
              onValueChange={(value) => handleSelectChange('heightTo', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="5'8''" />
              </SelectTrigger>
              <SelectContent>
                {heights.map((option, index) => (
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
        <div className="col-span-1">
          <Label htmlFor="profileCreatedBy" className="flex items-center h-full ml-3">
            Profile Created By
          </Label>
        </div>
        <div className="col-span-2">
          <div className="flex items-center col-span-2">
            <Input
              type="text"
              placeholder="Any"
              className="w-full"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
