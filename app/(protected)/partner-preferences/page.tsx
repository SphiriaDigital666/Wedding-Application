'use client';
import React, { FC } from 'react';
import { UserProfile } from '@prisma/client';
import SideBar from './_components/sidebar';
import BasicPreferences from './_components/basic';
import ReligiousPreferences from './_components/religious';
import ProfessionalPreferences from './_components/professional';
import LocationPreferences from './_components/location';

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

              <ProfessionalPreferences user={user} />

              <LocationPreferences user={user} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAndBasic;
