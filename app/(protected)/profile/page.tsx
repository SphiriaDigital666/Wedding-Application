import db from '@/lib/db';
import { currentUser } from '@/lib/auth';
import Image from 'next/image';
import AllMatches from '@/public/allMatches/all-matches-img.png';
import MainDetails from './_components/main-details';
import PhotosCarousel from './_components/photos-carousel';
import AboutAndBasic from './_components/about-me';
import Verification from './_components/verification';
import OtherDetails from './_components/other-details';

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
      <div className="flex flex-col container ">
        <div className="flex items-center justify-center">
          <Image
            src={AllMatches}
            alt="Main Image"
            width={1920}
            height={312}
            className="rounded-md"
          />
          <div className="absolute text-center">
            <p className="text-[35px] text-[#fff] font-bold">
              The biggest and most trusted Matrimony service for Tamils!
            </p>
          </div>
        </div>

        <MainDetails profile={userProfile} />
        <PhotosCarousel profile={userProfile} />

        <div className="flex gap-5">
          <div className="w-full">
            <AboutAndBasic profile={userProfile} />
          </div>
          <div className="w-full">
            <Verification profile={userProfile} />
          </div>
        </div>
        <OtherDetails profile={userProfile} />
      </div>
    </>
  );
};

export default DashboardPage;
