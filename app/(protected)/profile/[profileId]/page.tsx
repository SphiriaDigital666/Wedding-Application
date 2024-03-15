import { AnimatedTabs } from '@/components/ui/animated-tabs';
import db from '@/lib/db';
import { FC } from 'react';
import About from './_components/about-me';
import MainDetails from './_components/main-details';
import ReligionDetails from './_components/religion-details';
import LocationDetails from './_components/location-details';
import BasicDetails from './_components/basic';
import ProfessionalDetails from './_components/professional-details';
import FamilyDetails from './_components/family-details';
import OtherImages from './_components/photos-carousel';

interface ProfileIdPageProps {
  params: {
    profileId: string;
  };
}

const ProfileIdPage: FC<ProfileIdPageProps> = async ({ params }) => {
  const userProfile = await db.userProfile.findUnique({
    where: {
      id: params?.profileId,
    },
  });

  const tabs = [
    {
      title: 'Basic Details',
      value: 'basic details',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-gray-100 to-white">
          <span className="text-2xl font-bold">Basic Details</span>
          <BasicDetails profile={userProfile} />
        </div>
      ),
    },
    {
      title: 'Religion Details',
      value: 'religion details',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-gray-100 to-white">
          <span className="text-2xl font-bold">Religion Details</span>
          <ReligionDetails profile={userProfile} />
        </div>
      ),
    },
    {
      title: 'Location Details',
      value: 'location details',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-gray-100 to-white">
          <span className="text-2xl font-bold">Location Details</span>
          <LocationDetails profile={userProfile} />
        </div>
      ),
    },
    {
      title: 'Professional Details',
      value: 'professional details',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-gray-100 to-white">
          <span className="text-2xl font-bold">Professional Details</span>
          <ProfessionalDetails profile={userProfile} />
        </div>
      ),
    },
    {
      title: 'Family Details',
      value: 'family details',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-gray-100 to-white">
          <span className="text-2xl font-bold">Family Details</span>
          <FamilyDetails profile={userProfile} />
        </div>
      ),
    },
    {
      title: 'Preferences',
      value: 'preferences',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-gray-100 to-white">
          <span className="text-2xl font-bold">Preferences</span>
          <LocationDetails profile={userProfile} />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col container items-center justify-center">
        <MainDetails profile={userProfile} />
        <OtherImages params={params} />
        <About profile={userProfile} />

        <div className="h-[20rem] md:h-[30rem] [perspective:1000px] relative b flex flex-col  mx-auto w-full  items-start justify-start my-10">
          <AnimatedTabs tabs={tabs} />
        </div>
      </div>
    </>
  );
};

export default ProfileIdPage;
