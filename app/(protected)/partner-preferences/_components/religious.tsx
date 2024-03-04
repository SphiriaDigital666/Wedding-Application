import { UserProfile } from '@prisma/client';
import React, { FC } from 'react';
import EditReligion from './edit/edit-religion';

interface ReligiousPreferencesProps {
  user: UserProfile | undefined;
}

const ReligiousPreferences: FC<ReligiousPreferencesProps> = ({ user }) => {
  return (
    <div className="justify-between p-5">
      <div className="flex justify-between">
        <span className="text-2xl">Religious Preferences</span>
        <EditReligion user={user} />
      </div>
      <div className="grid grid-cols-2 justify-between gap-5 mt-4">
        <div className="flex gap-x-2 items-center">
          <span>Religion: </span>
          <span className=" text-gray-600">{user?.name || 'Not defined'}</span>
        </div>

        <div className="flex gap-x-2 items-center">
          <span>Ethnicity: </span>
          <span className=" text-gray-600">{user?.name || 'Not defined'}</span>
        </div>

        <div className="flex gap-x-2 items-center">
          <span>Caste: </span>
          <span className=" text-gray-600">{user?.name || 'Not defined'}</span>
        </div>
      </div>
    </div>
  );
};

export default ReligiousPreferences;
