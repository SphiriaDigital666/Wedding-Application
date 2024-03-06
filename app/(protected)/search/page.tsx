"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Criteria from "./_components/criteria";
import ProfileId from "./_components/profile-id";
import SavedSearch from "./_components/saved-search";

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
  const [currentStep, setCurrentStep] = useState<STEPS>(STEPS.By_Criteria);

  const changeState = (step: STEPS) => {
    setCurrentStep(step);
  };

  const handleStepClick = (step: STEPS) => {
    changeState(step);
  };

  return (
    <Card className="w-[90%] m-auto">
      <CardHeader>
        <div className="text-md text-start flex gap-3">
          {Object.values(STEPS).map((step) => (
            <p
              key={step}
              className={`p-0 ${
                currentStep === step ? "font-bold" : "font-thin"
              }`}
              onClick={() => handleStepClick(step)}
            >
              {stepLabels[step]}
            </p>
          ))}
        </div>
      </CardHeader>
      <div className="w-full flex justify-center">
        <hr className="w-[97%]" />
      </div>
      <CardContent>
        {currentStep === STEPS.By_Criteria && <Criteria />}
        {currentStep === STEPS.Profile_Id && <ProfileId />}
        {currentStep === STEPS.Saved_Search && <SavedSearch />}
      </CardContent>
    </Card>
  );
};

export default SearchPage;
