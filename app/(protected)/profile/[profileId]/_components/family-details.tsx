import React, { FC } from 'react';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@prisma/client';
import EditFamily from './edit/edit-family';

interface FamilyDetailsProps {
  user: UserProfile | undefined;
}

const FamilyDetails: FC<FamilyDetailsProps> = ({ user }) => {
  return (
    <div className="container p-5 mt-10 shadow-md rounded-md">
      <div className="justify-between p-10">
        <div className="flex justify-between">
          <span className="text-2xl">Family Details</span>
          <EditFamily user={user} />
        </div>
        <div className="grid grid-cols-3 justify-between gap-5 mt-4">
          <div className="flex gap-x-2 items-center">
            <span>Family Values: </span>
            <span className=" text-gray-600">
              {user?.name || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Family Type: </span>
            <span className=" text-gray-600">
              {user?.name || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Family Status: </span>
            <span className=" text-gray-600">
              {user?.name || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Family Details: </span>
            <span className=" text-gray-600">
              {user?.name || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Siblings: </span>
            <span className=" text-gray-600">
              {user?.name || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>No. of Siblings: </span>
            <span className=" text-gray-600">
              {user?.name || 'Not defined'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyDetails;
