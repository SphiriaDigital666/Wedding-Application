import { AnimatedTabs } from '@/components/ui/animated-tabs';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import db from '@/lib/db';
import AllMatches from '@/public/allMatches/all-matches-img.png';
import Image from 'next/image';
import { FC } from 'react';
import AboutAndBasic from './_components/about-me';
import MainDetails from './_components/main-details';
import OtherDetails from './_components/other-details';
import Verification from './_components/verification';

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
        <div className='w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-sky-300 to-sky-7pdate 00'>
          <p>Basic Details</p>
          <AboutAndBasic profile={userProfile} />
        </div>
      ),
    },
    {
      title: 'Religion Details',
      value: 'religion details',
      content: (
        <div className='w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-sky-300 to-sky-7pdate 00'>
          <p>Religion Details</p>
          <OtherDetails profile={userProfile} />
        </div>
      ),
    },
    {
      title: 'Location Details',
      value: 'location details',
      content: (
        <div className='w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-sky-300 to-sky-7pdate 00'>
          <p>Location Details</p>
          <Verification profile={userProfile} />
        </div>
      ),
    },
    {
      title: 'Professional Details',
      value: 'professional details',
      content: (
        <div className='w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-sky-300 to-sky-7pdate 00'>
          <p>Professional Details</p>
          <Verification profile={userProfile} />
        </div>
      ),
    },
    {
      title: 'Family Details',
      value: 'family details',
      content: (
        <div className='w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-sky-300 to-sky-7pdate 00'>
          <p>Family Details</p>
          <Verification profile={userProfile} />
        </div>
      ),
    },
    {
      title: 'Preferences',
      value: 'preferences',
      content: (
        <div className='w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-sky-300 to-sky-7pdate 00'>
          <p>Preferences</p>
          <Verification profile={userProfile} />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className='flex flex-col container items-center justify-center'>
        <div className='flex items-center justify-center'>
          <Image
            src={AllMatches}
            alt='Main Image'
            width={1920}
            height={312}
            className='-mt-5'
          />
          <div className='absolute text-center'>
            <p className='text-[35px] text-[#fff] font-bold'>
              The biggest and most trusted Matrimony service for Tamils!
            </p>
          </div>
        </div>

        <MainDetails profile={userProfile} />
        {/* <PhotosCarousel profile={userProfile} /> */}
        <div className='grid grid-cols-3 gap-3'>
          {userProfile?.images.map((image, index) => (
            <div key={index} className=''>
              <DirectionAwareHover imageUrl={image}>
                <p className='font-bold text-xl'>{userProfile.name}</p>
                <p className='font-normal text-sm'>{userProfile.age} years</p>
              </DirectionAwareHover>
            </div>
          ))}
        </div>
        <AboutAndBasic profile={userProfile} />

        <div className='h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col  mx-auto w-full  items-start justify-start my-10'>
          <AnimatedTabs tabs={tabs} />
        </div>
      </div>
    </>
  );
};

export default ProfileIdPage;
