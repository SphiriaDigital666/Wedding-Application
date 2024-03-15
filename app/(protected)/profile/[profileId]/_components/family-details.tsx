import React, { FC } from 'react';
import { UserProfile } from '@prisma/client';

interface FamilyDetailsProps {
  profile: UserProfile | null;
}

const FamilyDetails: FC<FamilyDetailsProps> = ({ profile }) => {
  return (
    <div className="flex">
      <div className="p-5">
        <div className="flex justify-between gap-20 mt-4">
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
