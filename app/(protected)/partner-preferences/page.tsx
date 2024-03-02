'use client';
import React, { FC, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@prisma/client';
import EditBasic from './_components/edit/edit-basic';
import EditReligion from '../profile/_components/edit/edit-religion';
import EditProfessional from './_components/edit/edit-professional';
import EditLocation from './_components/edit/edit-location';
// import EditBasic from './edit/edit-basic';
// import EditAbout from './edit/edit-about';

interface AboutAndBasicProps {
  user: UserProfile | undefined;
}

const AboutAndBasic: FC<AboutAndBasicProps> = ({ user }) => {
  return (
    <div className="container p-5 mt-10 shadow-md rounded-md">
      <div className="justify-between p-5">
        <div className="flex justify-between">
          <span className="text-2xl">Partner Preferences</span>
        </div>
        <div className="flex gap-5 mt-4">
          Matches recommended by us are based on Acceptable matches criteria and
          at times might go slightly beyond your preferences.
        </div>
      </div>

      <div className="justify-between p-5">
        <div className="flex justify-between">
          <span className="text-2xl">Basic Preferences</span>
          <EditBasic user={user} />
        </div>
        <div className="grid grid-cols-2 justify-between mt-5">
          <div className="flex gap-x-2 items-center">
            <span>Age: </span>
            <span className=" text-gray-600">{user?.age || 'Not defined'}</span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Language: </span>
            <span className=" text-gray-600">
              {user?.language || 'Not defined'}
            </span>
          </div>
          <div className="flex flex-col gap-5 mt-4">
            <div className="flex gap-x-2 items-center">
              <span>Hieght: </span>
              <span className=" text-gray-600">
                {user?.height || 'Not defined'}
              </span>
            </div>

            <div className="flex gap-x-2 items-center">
              <span>Weight: </span>
              <span className=" text-gray-600">
                {user?.weight || 'Not defined'}
              </span>
            </div>

            <div className="flex gap-x-2 items-center">
              <span>Body Type: </span>
              <span className=" text-gray-600">
                {user?.bodyType || 'Not defined'}
              </span>
            </div>

            <div className="flex gap-x-2 items-center">
              <span>Physical Status: </span>
              <span className=" text-gray-600">
                {user?.physicalStatus || 'Not defined'}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-4">
            <div className="flex gap-x-2 items-center">
              <span>Marital Status: </span>
              <span className=" text-gray-600">
                {user?.martialStatus || 'Not defined'}
              </span>
            </div>

            <div className="flex gap-x-2 items-center">
              <span>Eating Habits: </span>
              <span className=" text-gray-600">
                {user?.eatingHabits || 'Not defined'}
              </span>
            </div>

            <div className="flex gap-x-2 items-center">
              <span>Drinking Habits: </span>
              <span className=" text-gray-600">
                {user?.drinkingHabits || 'Not defined'}
              </span>
            </div>

            <div className="flex gap-x-2 items-center">
              <span>Smoking Habits: </span>
              <span className=" text-gray-600">
                {user?.smokingHabits || 'Not defined'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="justify-between p-5">
        <div className="flex justify-between">
          <span className="text-2xl">Religion Preferences</span>
          <EditReligion user={user} />
        </div>
        <div className="grid grid-cols-2 justify-between gap-5 mt-4">
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

      <div className="justify-between p-5">
        <div className="flex justify-between">
          <span className="text-2xl">Professional Preferences</span>
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
            <span>Employed In: </span>
            <span className=" text-gray-600">
              {user?.name || 'Not defined'}
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <span>Occupation: </span>
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

      <div className="justify-between p-5">
        <div className="flex justify-between">
          <span className="text-2xl">Location Preferences</span>
          <EditLocation user={user} />
        </div>
        <div className="grid grid-cols-2 justify-between gap-5 mt-4">
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
        </div>
      </div>
    </div>
  );
};

export default AboutAndBasic;
