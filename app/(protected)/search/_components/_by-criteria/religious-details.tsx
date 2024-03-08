"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { religions } from "@/constants";
import { Label } from "@/components/ui/label";
import { FC, useEffect, useState } from 'react';
interface ReligiousDetailsProps {
  onSelectChange: (data: object) => void;
}

const ReligiousDetails: FC<ReligiousDetailsProps> = ({ onSelectChange }) => {
  const [data, setData] = useState({
    religion: '',
    caste: '',
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
          Religious Details
        </div>
      </div>
      <div className="row grid grid-cols-3 mt-2">
        <div className="col-span-1">
          <Label htmlFor="religion" className="flex items-center h-full ml-3">
            Religion
          </Label>
        </div>
        <div className="col-span-2">
          <div className="flex items-center col-span-2">
            <Select
              onValueChange={(value) => handleSelectChange('religion', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Religion" />
              </SelectTrigger>
              <SelectContent>
                {religions.map((option, index) => (
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
          <Label htmlFor="caste" className="flex items-center h-full ml-3">
            Caste
          </Label>
        </div>
        <div className="col-span-2">
          <div className="flex items-center col-span-2">
            <Select
              onValueChange={(value) => handleSelectChange('caste', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Caste" />
              </SelectTrigger>
              <SelectContent>
                {religions.map((option, index) => (
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

export default ReligiousDetails;
