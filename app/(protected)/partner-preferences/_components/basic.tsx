import { UserProfile } from '@prisma/client';
import React, { FC } from 'react';
import EditBasic from './edit/edit-basic';
import { Separator } from '@/components/ui/separator';
import { Pencil } from 'lucide-react';

interface BasicPreferencesProps {
  user: UserProfile | undefined;
}

const BasicPreferences: FC<BasicPreferencesProps> = ({ user }) => {
  return (
    <div className="p-5">
      <span className="text-2xl">Basic Preferences</span>
      {/* <div className="flex justify-between">
        <EditBasic user={user} />
      </div> */}
      <div className="flex flex-col gap-4 mt-5">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span>Age: </span>
            <span className=" text-gray-600">{user?.age || 'Not defined'}</span>
          </div>
          <Pencil />
        </div>
        <Separator />

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span>Language: </span>
            <span className=" text-gray-600">
              {user?.language || 'Not defined'}
            </span>
          </div>
          <Pencil />
        </div>
        <Separator />

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span>Hieght: </span>
            <span className=" text-gray-600">
              {user?.height || 'Not defined'}
            </span>
          </div>
          <Pencil />
        </div>
        <Separator />

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span>Weight: </span>
            <span className=" text-gray-600">
              {user?.weight || 'Not defined'}
            </span>
          </div>
          <Pencil />
        </div>
        <Separator />

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span>Body Type: </span>
            <span className=" text-gray-600">
              {user?.bodyType || 'Not defined'}
            </span>
          </div>
          <Pencil />
        </div>
        <Separator />

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span>Physical Status: </span>
            <span className=" text-gray-600">
              {user?.physicalStatus || 'Not defined'}
            </span>
          </div>
          <Pencil />
        </div>
        <Separator />

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span>Marital Status: </span>
            <span className=" text-gray-600">
              {user?.martialStatus || 'Not defined'}
            </span>
          </div>
          <Pencil />
        </div>
        <Separator />

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span>Eating Habits: </span>
            <span className=" text-gray-600">
              {user?.eatingHabits || 'Not defined'}
            </span>
          </div>
          <Pencil />
        </div>
        <Separator />

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span>Drinking Habits: </span>
            <span className=" text-gray-600">
              {user?.drinkingHabits || 'Not defined'}
            </span>
          </div>
          <Pencil />
        </div>
        <Separator />

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span>Smoking Habits: </span>
            <span className=" text-gray-600">
              {user?.smokingHabits || 'Not defined'}
            </span>
          </div>
          <Pencil />
        </div>
        <Separator />
      </div>
    </div>
  );
};

export default BasicPreferences;
