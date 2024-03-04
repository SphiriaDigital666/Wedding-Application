import { UserProfile } from '@prisma/client';
import React, { FC } from 'react';
import EditBasic from './edit/edit-basic';

interface BasicPreferencesProps {
  user: UserProfile | undefined;
}

const BasicPreferences: FC<BasicPreferencesProps> = ({ user }) => {
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <span className="text-2xl">Basic Preferences</span>
        <EditBasic user={user} />
      </div>
      <div className="grid grid-cols-2 justify-between mt-5">
        <div className="flex gap-x-2 items-center">
          <span>Age: </span>
          <span className=" text-gray-600">{user?.age || 'Not defined'}</span>
        </div>

        <div className="flex gap-x-2 items-center">
          <span>Language: </span>
          <span className=" text-gray-600">
            {user?.language || 'Not defined'}
          </span>
        </div>
        <div className="flex flex-col gap-5 mt-4">
          <div className="flex gap-x-2 items-center">
            <span>Hieght: </span>
            <span className=" text-gray-600">
              {user?.height || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Weight: </span>
            <span className=" text-gray-600">
              {user?.weight || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Body Type: </span>
            <span className=" text-gray-600">
              {user?.bodyType || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Physical Status: </span>
            <span className=" text-gray-600">
              {user?.physicalStatus || 'Not defined'}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-4">
          <div className="flex gap-x-2 items-center">
            <span>Marital Status: </span>
            <span className=" text-gray-600">
              {user?.martialStatus || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Eating Habits: </span>
            <span className=" text-gray-600">
              {user?.eatingHabits || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Drinking Habits: </span>
            <span className=" text-gray-600">
              {user?.drinkingHabits || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Smoking Habits: </span>
            <span className=" text-gray-600">
              {user?.smokingHabits || 'Not defined'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicPreferences;
