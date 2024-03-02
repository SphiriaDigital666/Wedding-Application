import React, { FC } from 'react';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@prisma/client';
import EditReligion from './edit/edit-religion';
import EditLocation from './edit/edit-location';
import EditProfessional from './edit/edit-professional';
import EditFamily from './edit/edit-family';

interface OtherDetailsProps {
  user: UserProfile | undefined;
}

const OtherDetails: FC<OtherDetailsProps> = ({ user }) => {
  return (
    <div className="flex-col container p-5 mt-10 shadow-md rounded-md justify-between ">
      <div className="flex">
        <div className="w-1/2 p-5">
          <div className="flex justify-between">
            <span className="text-2xl">Religion Details</span>
            <EditReligion user={user} />
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

        <div className="w-1/2 p-5">
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
      <div className="flex">
        <div className="w-1/2 p-5">
          <div className="flex justify-between">
            <span className="text-2xl">Professional Details</span>
            <EditProfessional user={user} />
          </div>
          <div className="grid grid-cols-2 justify-between gap-5 mt-4">
            <div className="flex gap-x-2 items-center">
              <span>Education: </span>
              <span className=" text-gray-600">
                {user?.name || 'Not defined'}
              </span>
            </div>

            <div className="flex gap-x-2 items-center">
              <span>Education in Detail: </span>
              <span className=" text-gray-600">
                {user?.name || 'Not defined'}
              </span>
            </div>

            <div className="flex gap-x-2 items-center">
              <span>College / Institue: </span>
              <span className=" text-gray-600">
                {user?.name || 'Not defined'}
              </span>
            </div>

            <div className="flex gap-x-2 items-center">
              <span>Employed Sector: </span>
              <span className=" text-gray-600">
                {user?.name || 'Not defined'}
              </span>
            </div>

            <div className="flex gap-x-2 items-center">
              <span>Company Name: </span>
              <span className=" text-gray-600">
                {user?.name || 'Not defined'}
              </span>
            </div>

            <div className="flex gap-x-2 items-center">
              <span>Job Title: </span>
              <span className=" text-gray-600">
                {user?.name || 'Not defined'}
              </span>
            </div>

            <div className="flex gap-x-2 items-center">
              <span>Annual Income: </span>
              <span className=" text-gray-600">
                {user?.name || 'Not defined'}
              </span>
            </div>
          </div>
        </div>

        <div className="w-1/2 p-5">
          <div className="flex justify-between">
            <span className="text-2xl">Family Details</span>
            <EditFamily user={user} />
          </div>
          <div className="grid grid-cols-3 justify-between gap-5 mt-4">
            <div className="flex gap-x-2 items-center">
              <span>Family Values: </span>
              <span className=" text-gray-600">
                {user?.name || 'Not defined'}
              </span>
            </div>

            <div className="flex gap-x-2 items-center">
              <span>Family Type: </span>
              <span className=" text-gray-600">
                {user?.name || 'Not defined'}
              </span>
            </div>

            <div className="flex gap-x-2 items-center">
              <span>Family Status: </span>
              <span className=" text-gray-600">
                {user?.name || 'Not defined'}
              </span>
            </div>

            <div className="flex gap-x-2 items-center">
              <span>Family Details: </span>
              <span className=" text-gray-600">
                {user?.name || 'Not defined'}
              </span>
            </div>

            <div className="flex gap-x-2 items-center">
              <span>Siblings: </span>
              <span className=" text-gray-600">
                {user?.name || 'Not defined'}
              </span>
            </div>

            <div className="flex gap-x-2 items-center">
              <span>No. of Siblings: </span>
              <span className=" text-gray-600">
                {user?.name || 'Not defined'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherDetails;
