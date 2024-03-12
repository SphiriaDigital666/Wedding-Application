'use client';
import React, { FC } from 'react';
import { UserProfile } from '@prisma/client';
import { FaCircleCheck } from 'react-icons/fa6';
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
        <div className="flex flex-col justify-start items-start gap-5 mt-4">
          <div className="flex items-center justify-center gap-3">
            <FaCircleCheck color="green" size={20} />
            Email Verified
          </div>
          <div className="flex items-center justify-center gap-3">
            <FaCircleCheck color="green" size={20} />
            Mobile Verified
          </div>
          <div className="flex items-center justify-center gap-3">
            <FaCircleCheck color="green" size={20} />
            ID Verified
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAndBasic;
