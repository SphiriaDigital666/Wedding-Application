"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  smokingHabits,
  drinkingHabits,
  eatingHabits,
} from "@/constants";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FC, useEffect, useState } from 'react';

interface LifeStyleProps {
  onSelectChange: (data: object) => void;
}


const LifeStyle: FC<LifeStyleProps> = ({ onSelectChange }) => {
  const [data, setData] = useState<object>({
    mutualHobbies: false,
    eatingHabits: "",
    smokingHabits: "",
    drinkingHabits: "",
  });

  const handleSelectChange = (key: string, value: string | boolean) => {
    setData({
      ...data,
      [key]: value
    })
  };

  useEffect(() => {
    onSelectChange(data);
  }, [data])

  return (
    <div className="md:col-span-1">
      <div className="row grid grid-cols-3">
        <div className="bg-[#5BACE3] text-white font-bold text-md py-2 px-3 rounded-lg">
          Life Style
        </div>
      </div>
      <div className="row grid grid-cols-3 mt-2">
        <div className="col-span-1 ">
          <Label htmlFor="age" className="flex items-center h-full ml-3">
            Mutual Hobbies
          </Label>
        </div>
        <div className="col-span-2">
          <div className="flex items-center col-span-2">
            <Checkbox
              id="terms"
              onCheckedChange={(checked) =>
                handleSelectChange("mutualHobbies", checked)
              }
            />
            <label
              htmlFor="terms"
              className="ml-2 text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              matches who have similar hobbies as you
            </label>
          </div>
        </div>
      </div>
      <div className="row grid grid-cols-3 mt-2">
        <div className="col-span-1 ">
          <Label htmlFor="eatingHabits" className="flex items-center h-full ml-3">
            Eating Habits
          </Label>
        </div>
        <div className="col-span-2">
          <div className="flex items-center col-span-2">
            <Select
              onValueChange={(value) =>
                handleSelectChange("eatingHabits", value)
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                {eatingHabits.map((option, index) => (
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
          <Label
            htmlFor="smokingHabits"
            className="flex items-center h-full ml-3"
          >
            Smoking Habits
          </Label>
        </div>
        <div className="col-span-2">
          <div className="flex items-center col-span-2">
            <Select
              onValueChange={(value) =>
                handleSelectChange("smokingHabits", value)
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                {smokingHabits.map((option, index) => (
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
          <Label
            htmlFor="drinkingHabits"
            className="flex items-center h-full ml-3"
          >
            Drinking Habits
          </Label>
        </div>
        <div className="col-span-2">
          <div className="flex items-center col-span-2">
            <Select
              onValueChange={(value) =>
                handleSelectChange("drinkingHabits", value)
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                {drinkingHabits.map((option, index) => (
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

export default LifeStyle;
