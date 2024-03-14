import React, { FC } from 'react';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@prisma/client';
import EditReligion from './edit/edit-religion';
import EditLocation from './edit/edit-location';
import EditProfessional from './edit/edit-professional';
import EditFamily from './edit/edit-family';
import { Separator } from '@/components/ui/separator';

interface FamilyDetailsProps {
  profile: UserProfile | null;
}

const FamilyDetails: FC<FamilyDetailsProps> = ({ profile }) => {
  return (
    <div className="flex">
      <div className="w-1/2 p-5">
        <div className="flex justify-between gap-5 mt-4">
          <div className="flex gap-x-2 items-center">
            <span>Family Values: </span>
            <span className=" text-gray-600">
              {profile?.familyValues || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Family Type: </span>
            <span className=" text-gray-600">
              {profile?.familyType || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Family Status: </span>
            <span className=" text-gray-600">
              {profile?.familyStatus || 'Not defined'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyDetails;
