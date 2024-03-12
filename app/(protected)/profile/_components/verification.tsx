'use client';
import React, { FC } from 'react';
import { UserProfile } from '@prisma/client';

interface AboutAndBasicProps {
  profile: UserProfile | null;
}

const AboutAndBasic: FC<AboutAndBasicProps> = ({ profile }) => {
  return (
    <div className="p-5 mt-10 h-full shadow-md rounded-md">
      <div className="p-5">
        <div className="flex justify-between">
          <span className="text-2xl">Verification</span>
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

export default AboutAndBasic;
