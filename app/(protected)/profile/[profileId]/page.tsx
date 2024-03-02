import db from '@/lib/db';
// import BasicDetails from './_components/basic-details';
// import LocationDetails from './_components/location-details';
import FamilyDetails from '../_components/family-details';
import MainDetails from '../_components/main-details';
import PhotosCarousel from '../_components/photos-carousel';
import ProfessionalDetails from '../_components/professional-details';
import { currentUser } from '@/lib/auth';
import Image from 'next/image';
import AllMatches from '@/public/allMatches/all-matches-img.png';
import AboutAndBasic from '../_components/about-me';
import OtherDetails from '../_components/other-details';

const DashboardPage = async () => {
  const sessionUser = await currentUser();

  const userProfile = await db.userProfile.findFirst({
    where: {
      userId: sessionUser?.id,
    },
  });

  console.log(userProfile);
  return (
    <>
      <div className="relative flex items-center justify-center">
        <Image
          src={AllMatches}
          alt="Main Image"
          width={1920}
          height={312}
          className="-mt-5"
        />
        <div className="absolute text-center">
          <p className="text-[48px] text-[#fff] font-bold">
            The biggest and most trusted Matrimony service for Tamils!
          </p>
        </div>
      </div>
      <MainDetails profile={userProfile} />
      <PhotosCarousel profile={userProfile} />
      <div className="relative w-[800px] left-32 flex flex-col">
        <AboutAndBasic profile={userProfile} />
        {/* <BasicDetails user={userProfile} /> */}
      </div>
      <OtherDetails user={userProfile} />
      {/* <LocationDetails user={userProfile} /> */}
      <ProfessionalDetails user={userProfile} />
      <FamilyDetails user={userProfile} />
    </>
  );
};

export default DashboardPage;
