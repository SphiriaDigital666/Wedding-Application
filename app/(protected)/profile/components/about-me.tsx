import React from 'react';
import EditAbout from '../edit/edit-about';

const AboutMe = () => {
  return (
    <div className="container p-5 mt-10 shadow-md rounded-md">
      <div className="justify-between p-10">
        <div className="flex justify-between">
          <span className="text-2xl">About Me</span>
          <EditAbout />
        </div>
        <div className="flex gap-5 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quos
          repudiandae excepturi, dolorum laboriosam ducimus, nulla voluptatem,
          labore expedita ea quas porro architecto nesciunt veritatis unde quod
          perferendis aspernatur voluptatibus?
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
