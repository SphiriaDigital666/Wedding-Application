import React, { FC } from 'react';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@prisma/client';

interface ReligionDetailsProps {
  user: UserProfile | undefined;
}

const ReligionDetails: FC<ReligionDetailsProps> = ({ user }) => {
  return (
    <div className="container p-5 mt-10 shadow-md rounded-md">
      <div className="justify-between p-10">
        <div className="flex justify-between">
          <span className="text-2xl">Religion Details</span>
          <Button variant="secondary" size="lg">
            Edit
          </Button>
        </div>
        <div className="grid grid-cols-3 justify-between gap-5 mt-4">
          <div className="flex gap-x-2 items-center">
            <span>Religion: </span>
            <span className=" text-gray-600">
              {user?.name || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Ethnicity: </span>
            <span className=" text-gray-600">
              {user?.name || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Caste: </span>
            <span className=" text-gray-600">
              {user?.name || 'Not defined'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReligionDetails;
