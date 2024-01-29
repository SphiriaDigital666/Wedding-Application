import React, { FC } from 'react';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@prisma/client';

interface ProfessionalDetailsProps {
  user: UserProfile | undefined;
}

const ProfessionalDetails: FC<ProfessionalDetailsProps> = ({ user }) => {
  return (
    <div className="container p-5 mt-10 shadow-md rounded-md">
      <div className="justify-between p-10">
        <div className="flex justify-between">
          <span className="text-2xl">Professional Details</span>
          <Button variant="secondary" size="lg">
            Edit
          </Button>
        </div>
        <div className="grid grid-cols-3 justify-between gap-5 mt-4">
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
    </div>
  );
};

export default ProfessionalDetails;
