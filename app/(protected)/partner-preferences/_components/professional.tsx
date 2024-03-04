import { UserProfile } from '@prisma/client';
import React, { FC } from 'react';
import EditProfessional from './edit/edit-professional';

interface ProfessionalPreferencesProps {
  user: UserProfile | undefined;
}

const ProfessionalPreferences: FC<ProfessionalPreferencesProps> = ({
  user,
}) => {
  return (
    <div className="justify-between p-5">
      <div className="flex justify-between">
        <span className="text-2xl">Professional Preferences</span>
        <EditProfessional user={user} />
      </div>
      <div className="grid grid-cols-2 justify-between gap-5 mt-4">
        <div className="flex gap-x-2 items-center">
          <span>Education: </span>
          <span className=" text-gray-600">{user?.name || 'Not defined'}</span>
        </div>

        <div className="flex gap-x-2 items-center">
          <span>Employed In: </span>
          <span className=" text-gray-600">{user?.name || 'Not defined'}</span>
        </div>

        <div className="flex gap-x-2 items-center">
          <span>Occupation: </span>
          <span className=" text-gray-600">{user?.name || 'Not defined'}</span>
        </div>

        <div className="flex gap-x-2 items-center">
          <span>Annual Income: </span>
          <span className=" text-gray-600">{user?.name || 'Not defined'}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalPreferences;
