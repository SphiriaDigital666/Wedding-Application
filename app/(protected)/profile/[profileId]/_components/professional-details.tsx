import React, { FC } from 'react';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@prisma/client';
import EditReligion from './edit/edit-religion';
import EditLocation from './edit/edit-location';
import EditProfessional from './edit/edit-professional';
import EditFamily from './edit/edit-family';
import { Separator } from '@/components/ui/separator';

interface ProfessionalDetailsProps {
  profile: UserProfile | null;
}

const ProfessionalDetails: FC<ProfessionalDetailsProps> = ({ profile }) => {
  return (
    <div className="flex">
      <div className="w-1/2 p-5">
        <div className="grid grid-cols-2 gap-5 mt-4">
          <div className="flex gap-x-2 items-center">
            <span>Education: </span>
            <span className=" text-gray-600">
              {profile?.education || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>College: </span>
            <span className=" text-gray-600">
              {profile?.college || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Employed Sector: </span>
            <span className=" text-gray-600">
              {profile?.employedSector || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Company Name: </span>
            <span className=" text-gray-600">
              {profile?.companyName || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Occupation: </span>
            <span className=" text-gray-600">
              {profile?.jobTitle || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Annual Income: </span>
            <span className=" text-gray-600">
              {profile?.annualIncome || 'Not defined'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetails;
