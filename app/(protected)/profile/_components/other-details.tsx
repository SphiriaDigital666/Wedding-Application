import React, { FC } from 'react';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@prisma/client';
import EditReligion from './edit/edit-religion';
import EditLocation from './edit/edit-location';
import EditProfessional from './edit/edit-professional';
import EditFamily from './edit/edit-family';
import { Separator } from '@/components/ui/separator';

interface OtherDetailsProps {
  profile: UserProfile | null;
}

const OtherDetails: FC<OtherDetailsProps> = ({ profile }) => {
  return (
    <div className="flex-col container p-5 mt-10 shadow-md rounded-md justify-between ">
      <div className="flex">
        <div className="w-1/2 p-5">
          <div className="flex justify-between">
            <span className="text-2xl">Religion Details</span>
            <EditReligion profile={profile} />
          </div>
          <div className="grid grid-cols-2 justify-between gap-5 mt-4">
            <div className="flex gap-x-2 items-center">
              <span>Religion: </span>
              <span className=" text-gray-600">
                {profile?.religion || 'Not defined'}
              </span>
            </div>

            <div className="flex gap-x-2 items-center">
              <span>Ethnicity: </span>
              <span className=" text-gray-600">
                {profile?.ethnicity || 'Not defined'}
              </span>
            </div>

            <div className="flex gap-x-2 items-center">
              <span>Caste: </span>
              <span className=" text-gray-600">
                {profile?.caste || 'Not defined'}
              </span>
            </div>
          </div>
          <Separator className="mt-10" />
        </div>

        <div className="w-1/2 p-5">
          <div className="flex justify-between">
            <span className="text-2xl">Location Details</span>
            <EditLocation profile={profile} />
          </div>
          <div className="grid grid-cols-2 justify-between gap-5 mt-4">
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
          <Separator className="mt-10" />
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2 p-5">
          <div className="flex justify-between">
            <span className="text-2xl">Professional Details</span>
            <EditProfessional profile={profile} />
          </div>
          <div className="grid grid-cols-2 justify-between gap-5 mt-4">
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

        <div className="w-1/2 p-5">
          <div className="flex justify-between">
            <span className="text-2xl">Family Details</span>
            <EditFamily profile={profile} />
          </div>
          <div className="grid grid-cols-2 justify-between gap-5 mt-4">
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
    </div>
  );
};

export default OtherDetails;
