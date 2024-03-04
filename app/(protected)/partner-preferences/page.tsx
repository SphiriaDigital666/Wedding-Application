'use client';
import React, { FC, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@prisma/client';
import EditBasic from './_components/edit/edit-basic';
import EditReligion from '../profile/_components/edit/edit-religion';
import EditProfessional from './_components/edit/edit-professional';
import EditLocation from './_components/edit/edit-location';
import SideBar from './_components/sidebar';
import BasicPreferences from './_components/basic';
import ReligiousPreferences from './_components/religious';

interface AboutAndBasicProps {
  user: UserProfile | undefined;
}

const AboutAndBasic: FC<AboutAndBasicProps> = ({ user }) => {
  return (
    <div className="flex container gap-5">
      <SideBar />
      <div className="flex container p-5 mt-10 shadow-md rounded-md">
        <div>
          <div className="p-5">
            <div className="flex justify-between">
              <span className="text-2xl">Partner Preferences</span>
            </div>
            <div className="flex gap-5 mt-4">
              Matches recommended by us are based on Acceptable matches criteria
              and at times might go slightly beyond your preferences.
            </div>
          </div>

          <div className="flex container">
            <div>
              <BasicPreferences user={user} />

              <ReligiousPreferences user={user} />

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAndBasic;
