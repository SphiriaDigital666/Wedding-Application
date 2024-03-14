import React, { FC } from 'react';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@prisma/client';
import EditReligion from './edit/edit-religion';
import EditLocation from './edit/edit-location';
import EditProfessional from './edit/edit-professional';
import EditFamily from './edit/edit-family';
import { Separator } from '@/components/ui/separator';

interface LocationDetailsProps {
  profile: UserProfile | null;
}

const LocationDetails: FC<LocationDetailsProps> = ({ profile }) => {
  return (
    <div className="flex">
      <div className="w-1/2 p-5">
        <div className="flex justify-between gap-5 mt-4">
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
