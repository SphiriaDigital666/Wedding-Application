"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  annualIncomes,
  occupations,
  educationalQualifications,
  employeeSectors,
} from "@/constants";
import { Label } from "@/components/ui/label";
import { FC, useEffect, useState } from 'react';

interface ProfessionalDetailsProps {
  onSelectChange: (data: object) => void;
}

const ProfessionalDetails: FC<ProfessionalDetailsProps> = ({ onSelectChange }) => {
  const [data, setData] = useState({
    occupation: '',
    annualIncomeFrom: '',
    annualIncomeTo: '',
    employeeType: '',
    education: '',
  });

  const handleSelectChange = (key: string, value: string | number) => {
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
          Professional Details
        </div>
      </div>
      <div className="row grid grid-cols-3 mt-2">
        <div className="col-span-1">
          <Label htmlFor="occupation" className="flex items-center h-full ml-3">
            Occupation
          </Label>
        </div>
        <div className="col-span-2">
          <div className="flex items-center col-span-2">
            <Select
              onValueChange={(value) => handleSelectChange('occupation', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Occupation" />
              </SelectTrigger>
              <SelectContent>
                {occupations.map((option, index) => (
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
          <Label htmlFor="annualIncome" className="flex items-center h-full ml-3">
            Annual Income
          </Label>
        </div>
        <div className="col-span-2">
          <div className="flex items-center col-span-2">
            <Select
              onValueChange={(value) => handleSelectChange('annualIncomeFrom', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="From" />
              </SelectTrigger>
              <SelectContent>
                {annualIncomes.map((option, index) => (
                  <SelectItem key={index} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span className="mx-2">to</span>
            <Select
              onValueChange={(value) => handleSelectChange('annualIncomeTo', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="To" />
              </SelectTrigger>
              <SelectContent>
                {annualIncomes.map((option, index) => (
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
          <Label htmlFor="employeeType" className="flex items-center h-full ml-3">
            Employee Type
          </Label>
        </div>
        <div className="col-span-2">
          <div className="flex items-center col-span-2">
            <Select
              onValueChange={(value) => handleSelectChange('employeeType', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Employee Type" />
              </SelectTrigger>
              <SelectContent>
                {employeeSectors.map((option, index) => (
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
          <Label htmlFor="education" className="flex items-center h-full ml-3">
            Education
          </Label>
        </div>
        <div className="col-span-2">
          <div className="flex items-center col-span-2">
            <Select
              onValueChange={(value) => handleSelectChange('education', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Education" />
              </SelectTrigger>
              <SelectContent>
                {educationalQualifications.map((option, index) => (
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

export default ProfessionalDetails;

