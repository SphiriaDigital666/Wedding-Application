import React from 'react';

const SideBar = () => {
  return (
    <div className="p-5 border rounded-md mt-10 h-[50vh]">
      <span className="text-xl font-medium">Partner Preferences</span>
      <div className="flex flex-col gap-3 mt-5">
        <a href="">Basic</a>
        <a href="">Religious</a>
        <a href="">Professional</a>
        <a href="">Location</a>
        <a href="">About My Partner</a>
      </div>
    </div>
  );
};

export default SideBar;
