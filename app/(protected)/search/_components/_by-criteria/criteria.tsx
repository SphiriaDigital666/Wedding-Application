// Criteria.tsx

"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import BasicInfo from "./basic-info";
import ReligiousDetails from "./religious-details";
import ProfessionalDetails from "./professional-details";
import LifeStyle from "./life-style";
import FamilyDetails from "./family-details";
import LocationDetails from "./location-details";
import RecentlyActiveProfile from "./recently-active-profile";
import ProfileType from "./profile-type";

import { Button } from '@/components/ui/button';

const Criteria = () => {
  const [formData, setFormData] = useState<object>({});

  const handleSelectChange = (data: any) => {
    setFormData({
      ...formData,
      [Object.keys(data)[0]]: Object.values(data)[0]
    })
  };

  useEffect(()=> {
    console.log(formData)
  }, [formData])

  return (
    <div className="h-full w-[100%]">
      <div className="px-6 header my-6">
        Search profiles using the below criteria
      </div>

      <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-20 overflow-y-visible mb-[80px]">
        {/* basic info */}
        <BasicInfo onSelectChange={handleSelectChange} />

        {/* Religious Details */}
        <ReligiousDetails onSelectChange={handleSelectChange} />

        {/* Professional Details */}
        <ProfessionalDetails onSelectChange={handleSelectChange} />

        {/* Life Style */}
        <LifeStyle onSelectChange={handleSelectChange} />

        {/* Location Details */}
        <LocationDetails onSelectChange={handleSelectChange} />

        {/* Recently Active Profile */}
        <RecentlyActiveProfile onSelectChange={handleSelectChange} />

        {/* Family Details */}
        <FamilyDetails onSelectChange={handleSelectChange} />

        {/* Profile Type */}
        <ProfileType onSelectChange={handleSelectChange} />
      </div>
      <div className="w-[100%] bottom-0 flex justify-around">
        <div className="w-[100%] flex justify-center items-center col-span-1 h-[70px] bg-slate-200 space-x-6">
          <p>2 matches based on your preferences</p>
          <Button className="bg-[#5BACE3]">View Search Results</Button>
        </div>
      </div>
    </div>
  );
};

export default Criteria;
