"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Criteria from "./_components/_by-criteria/criteria";
import ProfileId from "./_components/_profile-id/profile-id";
import SavedSearch from "./_components/_saved-search/saved-search";

enum STEPS {
  By_Criteria,
  Profile_Id,
  Saved_Search,
}

const stepLabels = {
  [STEPS.By_Criteria]: "By Criteria",
  [STEPS.Profile_Id]: "By Profile Id",
  [STEPS.Saved_Search]: "Saved Search",
};

const SearchPage = () => {
  const [currentStep, setCurrentStep] = useState<String>("By Criteria");

  const changeState = (step: String) => {
    setCurrentStep(step);
  };

  const handleStepClick = (step: String) => {
    changeState(step);
  };

  return (
    <Card className="w-[90%] m-auto">
      <CardHeader>
        <div className="text-md text-start flex gap-3">
          {["By Criteria", "By Profile Id", "Saved Search"].map((step) => (
            <p
              key={step}
              className={`p-0 ${
                currentStep === step ? "font-bold" : "font-thin"
              }`}
              onClick={() => handleStepClick(step)}
            >
              {step}
            </p>
          ))}
        </div>
      </CardHeader>
      <div className="w-full flex justify-center">
        <hr className="w-[97%]" />
      </div>
      <CardContent className="px-0">
        {currentStep === "By Criteria" && <Criteria />}
        {currentStep === "By Profile Id" && <ProfileId />}
        {currentStep === "Saved Search" && <SavedSearch />}
      </CardContent>
    </Card>
  );
};

export default SearchPage;
