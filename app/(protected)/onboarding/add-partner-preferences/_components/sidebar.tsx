'use client';
import { useActiveSectionContext } from '@/hooks/useActiveSectionStore';
import React from 'react';

const SideBar = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <div className="p-5 w-1/6 fixed border rounded-md mt-10 h-[50vh]">
      <span className="text-xl font-medium">Partner Preferences</span>
      <div className="flex flex-col gap-3 mt-5">
        <a
          href="#basic"
          onClick={() => {
            setActiveSection('Basic');
            setTimeOfLastClick(Date.now());
          }}
        >
          Basic
        </a>
        <a
          href="#religion"
          onClick={() => {
            setActiveSection('Religion');
            setTimeOfLastClick(Date.now());
          }}
        >
          Religious
        </a>
        <a
          href="#professional"
          onClick={() => {
            setActiveSection('Professional');
            setTimeOfLastClick(Date.now());
          }}
        >
          Professional
        </a>
        <a
          href="#location"
          onClick={() => {
            setActiveSection('Location');
            setTimeOfLastClick(Date.now());
          }}
        >
          Location
        </a>
      </div>
    </div>
  );
};

export default SideBar;
