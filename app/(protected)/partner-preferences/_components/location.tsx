import React, { FC } from 'react';
import { Separator } from '@/components/ui/separator';
import { Pencil } from 'lucide-react';
import { UserProfile } from '@prisma/client';

interface LocationPreferencesProps {
  user: UserProfile | undefined;
}

const LocationPreferences: FC<LocationPreferencesProps> = ({ user }) => {
  return (
    <div className="p-5">
      <span className="text-2xl">Location Preferences</span>
      <div className="flex flex-col gap-4 mt-5">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span>Country: </span>
            <span className=" text-gray-600">
              {user?.country || 'Not defined'}
            </span>
          </div>
          <Pencil />
        </div>
        <Separator />

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span>City: </span>
            <span className=" text-gray-600">
              {user?.city || 'Not defined'}
            </span>
          </div>
          <Pencil />
        </div>
        <Separator />

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span>State: </span>
            <span className=" text-gray-600">
              {user?.state || 'Not defined'}
            </span>
          </div>
          <Pencil />
        </div>
        <Separator />
      </div>
    </div>
  );
};

export default LocationPreferences;
