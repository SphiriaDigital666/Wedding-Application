'use client';
import React, { FC } from 'react';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@prisma/client';
import { convertHeight } from '@/helpers/convert-height';

interface BasicDetailsProps {
  profile: UserProfile | null;
}

const BasicDetails: FC<BasicDetailsProps> = ({ profile }) => {
  return (
    <div className="p-5">
      <div className="grid grid-cols-2 justify-between gap-44">
        <div className="flex flex-col gap-5 mt-4">
          <div className="flex gap-x-2 items-center">
            <span>Name: </span>
            <span className=" text-gray-600">
              {profile?.name || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Age: </span>
            <span className=" text-gray-600">
              {profile?.age || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Address: </span>
            <span className=" text-gray-600">
              {`${profile?.city}, ${profile?.state}` || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Language: </span>
            <span className=" text-gray-600">
              {profile?.language || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Hieght: </span>
            <span className=" text-gray-600">
              {convertHeight(profile?.height!) || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Weight: </span>
            <span className=" text-gray-600">
              {profile?.weight || 'Not defined'} Kg
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-4">
          <div className="flex gap-x-2 items-center">
            <span>Body Type: </span>
            <span className=" text-gray-600">
              {profile?.bodyType || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Physical Status: </span>
            <span className=" text-gray-600">
              {profile?.physicalStatus || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Marital Status: </span>
            <span className=" text-gray-600">
              {profile?.maritalStatus || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Eating Habits: </span>
            <span className=" text-gray-600">
              {profile?.eatingHabits || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Drinking Habits: </span>
            <span className=" text-gray-600">
              {profile?.drinkingHabits || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Smoking Habits: </span>
            <span className=" text-gray-600">
              {profile?.smokingHabits || 'Not defined'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
