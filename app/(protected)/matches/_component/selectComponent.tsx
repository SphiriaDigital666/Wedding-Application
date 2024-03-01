"use client";
import React, { useState, ChangeEvent } from "react";

interface LabelOptions {
  [label: string]: string[];
}

interface SelectedOptions {
  [label: string]: string;
}

const SelectComponent: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({});

  const labelOptions: LabelOptions = {
    "Religious Details": ["option 1", "option 2"],
    "Professional Details": ["option 1", "option 2", "option 3"],
    "Location Details": ["option 1", "option 2"],
    Lifestyle: [
      "option 1",
      "option 2",
      "option 3",
      "option 4",
      "option 5",
      "option 6",
    ],
    "Family Details": ["option 1", "option 2"],
    "Recently Active Profile": ["option 1", "option 2", "option 3"],
    "Profile Type": ["option 1", "option 2", "option 3", "option 4"],
  };

  const handleOptionChange = (
    label: string,
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedOption = event.target.value;
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [label]: selectedOption,
    }));
  };

  return (
    <div className="border-2  p-5 mx-4">
      <div className="flex items-center justify-center mb-6">
        <p className="bg-[#5BACE3] text-white font-bold text-[20px] py-3 px-12 w-max rounded-lg">
          Filter Profiles
        </p>
      </div>
      <div className="border-t-2 border-[#5BACE3]">
        {Object.keys(labelOptions).map((label) => (
          <div
            key={label}
            className="border-b-2 border-[#5BACE3] py-3 flex flex-col"
          >
            <label className="text-[#5BACE3] text-[20px] font-semibol">
              {label}:
            </label>
            <select
              value={selectedOptions[label] || ""}
              onChange={(event) => handleOptionChange(label, event)}
            >
              <option value="" disabled>
                Select an option
              </option>
              {labelOptions[label].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectComponent;
