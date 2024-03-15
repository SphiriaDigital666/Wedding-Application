import React, { FC } from 'react';
import { UserProfile } from '@prisma/client';

interface LocationDetailsProps {
  profile: UserProfile | null;
}

const LocationDetails: FC<LocationDetailsProps> = ({ profile }) => {
  return (
    <div className="flex">
      <div className="p-5">
        <div className="flex justify-between gap-20 mt-4">
          <div className="flex gap-x-2 items-center">
            <span>Country: </span>
            <span className=" text-gray-600">
              {profile?.country || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>City: </span>
            <span className=" text-gray-600">
              {profile?.city || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>State: </span>
            <span className=" text-gray-600">
              {profile?.state || 'Not defined'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
