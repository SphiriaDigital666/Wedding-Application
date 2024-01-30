import React, { FC } from 'react';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@prisma/client';
import EditBasic from '../edit/edit-basic';

interface BasicDetailsProps {
  user: UserProfile | undefined;
}

const BasicDetails: FC<BasicDetailsProps> = ({ user }) => {
  return (
    <div className="container p-5 mt-10 shadow-md rounded-md">
      <div className="justify-between p-10">
        <div className="flex justify-between">
          <span className="text-2xl">Basic Details</span>
          <EditBasic user={user} />
        </div>
        <div className="grid grid-cols-3 justify-between">
          <div className="flex flex-col gap-5 mt-4">
            <div className="flex gap-x-2 items-center">
              <span>Name: </span>
              <span className=" text-gray-600">
                {user?.name || 'Not defined'}
              </span>
            </div>

            <div className="flex gap-x-2 items-center">
              <span>Age: </span>
              <span className=" text-gray-600">
                {user?.name || 'Not defined'}
              </span>
            </div>

            <div className="flex gap-x-2 items-center">
              <span>Address: </span>
              <span className=" text-gray-600">
                {user?.name || 'Not defined'}
              </span>
            </div>

            <div className="flex gap-x-2 items-center">
              <span>Language: </span>
              <span className=" text-gray-600">
                {user?.name || 'Not defined'}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-4">
            <div className="flex gap-x-2 items-center">
              <span>Hieght: </span>
              <span className=" text-gray-600">
                {user?.name || 'Not defined'}
              </span>
            </div>

            <div className="flex gap-x-2 items-center">
              <span>Weight: </span>
              <span className=" text-gray-600">
                {user?.name || 'Not defined'}
              </span>
            </div>

            <div className="flex gap-x-2 items-center">
              <span>Body Type: </span>
              <span className=" text-gray-600">
                {user?.name || 'Not defined'}
              </span>
            </div>

            <div className="flex gap-x-2 items-center">
              <span>Physical Status: </span>
              <span className=" text-gray-600">
                {user?.name || 'Not defined'}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-4">
            <div className="flex gap-x-2 items-center">
              <span>Marital Status: </span>
              <span className=" text-gray-600">
                {user?.name || 'Not defined'}
              </span>
            </div>

            <div className="flex gap-x-2 items-center">
              <span>Eating Habits: </span>
              <span className=" text-gray-600">
                {user?.name || 'Not defined'}
              </span>
            </div>

            <div className="flex gap-x-2 items-center">
              <span>Drinking Habits: </span>
              <span className=" text-gray-600">
                {user?.name || 'Not defined'}
              </span>
            </div>

            <div className="flex gap-x-2 items-center">
              <span>Smoking Habits: </span>
              <span className=" text-gray-600">
                {user?.name || 'Not defined'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
