import React, { FC } from 'react';
import EditLocation from './edit/edit-location';
import { UserProfile } from '@prisma/client';

interface LocationPreferencesProps {
  user: UserProfile | undefined;
}

const LocationPreferences: FC<LocationPreferencesProps> = ({ user }) => {
  return (
    <div className="justify-between p-5">
      <div className="flex justify-between">
        <span className="text-2xl">Location Preferences</span>
        <EditLocation user={user} />
      </div>
      <div className="grid grid-cols-2 justify-between gap-5 mt-4">
        <div className="flex gap-x-2 items-center">
          <span>Country: </span>
          <span className=" text-gray-600">{user?.name || 'Not defined'}</span>
        </div>
        <div className="flex gap-x-2 items-center">
          <span>City: </span>
          <span className=" text-gray-600">{user?.name || 'Not defined'}</span>
        </div>
        <div className="flex gap-x-2 items-center">
          <span>State: </span>
          <span className=" text-gray-600">{user?.name || 'Not defined'}</span>
        </div>
      </div>
    </div>
  );
};

export default LocationPreferences;
