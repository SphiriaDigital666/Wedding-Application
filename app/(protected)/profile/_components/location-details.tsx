import React, { FC } from 'react';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@prisma/client';
import EditLocation from './edit/edit-location';

interface LocationDetailsProps {
  user: UserProfile | undefined;
}

const LocationDetails: FC<LocationDetailsProps> = ({ user }) => {
  return (
    <div className="container p-5 mt-10 shadow-md rounded-md">
      <div className="justify-between p-10">
        <div className="flex justify-between">
          <span className="text-2xl">Location Details</span>
          <EditLocation user={user} />
        </div>
        <div className="grid grid-cols-3 justify-between gap-5 mt-4">
          <div className="flex gap-x-2 items-center">
            <span>Country: </span>
            <span className=" text-gray-600">
              {user?.name || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>City: </span>
            <span className=" text-gray-600">
              {user?.name || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>State: </span>
            <span className=" text-gray-600">
              {user?.name || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Citizenship: </span>
            <span className=" text-gray-600">
              {user?.name || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Residential Status: </span>
            <span className=" text-gray-600">
              {user?.name || 'Not defined'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
