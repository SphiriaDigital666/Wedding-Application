import { UserProfile } from '@prisma/client';
import React, { FC } from 'react';
import { Separator } from '@/components/ui/separator';
import { Pencil } from 'lucide-react';

interface ReligiousPreferencesProps {
  user: UserProfile | undefined;
}

const ReligiousPreferences: FC<ReligiousPreferencesProps> = ({ user }) => {
  return (
    <div className="p-5">
      <span className="text-2xl">Religious Preferences</span>
      <div className="flex flex-col gap-4 mt-5">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span>Religion: </span>
            <span className=" text-gray-600">
              {user?.religion || 'Not defined'}
            </span>
          </div>
          <Pencil />
        </div>
        <Separator />

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span>Ethnicity: </span>
            <span className=" text-gray-600">
              {user?.ethnicity || 'Not defined'}
            </span>
          </div>
          <Pencil />
        </div>
        <Separator />

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span>Caste: </span>
            <span className=" text-gray-600">
              {user?.caste || 'Not defined'}
            </span>
          </div>
          <Pencil />
        </div>
        <Separator />
      </div>
    </div>
  );
};

export default ReligiousPreferences;
