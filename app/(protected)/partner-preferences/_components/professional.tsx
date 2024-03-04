import { UserProfile } from '@prisma/client';
import React, { FC } from 'react';
import { Separator } from '@/components/ui/separator';
import { Pencil } from 'lucide-react';
interface ProfessionalPreferencesProps {
  user: UserProfile | undefined;
}

const ProfessionalPreferences: FC<ProfessionalPreferencesProps> = ({
  user,
}) => {
  return (
    <div className="p-5">
      <span className="text-2xl">Professional Preferences</span>
      <div className="flex flex-col gap-4 mt-5">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span>Education: </span>
            <span className=" text-gray-600">
              {user?.education || 'Not defined'}
            </span>
          </div>
          <Pencil />
        </div>
        <Separator />

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span>Employed In: </span>
            <span className=" text-gray-600">
              {user?.employedSector || 'Not defined'}
            </span>
          </div>
          <Pencil />
        </div>
        <Separator />

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span>Occupation: </span>
            <span className=" text-gray-600">
              {user?.jobTitle || 'Not defined'}
            </span>
          </div>
          <Pencil />
        </div>
        <Separator />

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span>Annual Income: </span>
            <span className=" text-gray-600">
              {user?.annualIncome || 'Not defined'}
            </span>
          </div>
          <Pencil />
        </div>
        <Separator />
      </div>
    </div>
  );
};

export default ProfessionalPreferences;
