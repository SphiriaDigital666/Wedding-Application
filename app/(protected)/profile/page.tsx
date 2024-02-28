import db from '@/lib/db';
import AboutMe from './_components/about-me';
import BasicDetails from './_components/basic-details';
import FamilyDetails from './_components/family-details';
import LocationDetails from './_components/location-details';
import MainDetails from './_components/main-details';
import PhotosCarousel from './_components/photos-carousel';
import ProfessionalDetails from './_components/professional-details';
import ReligionDetails from './_components/religion-details';
import { currentUser } from '@/lib/auth';

const DashboardPage = async() => {

  const sessionUser = await currentUser()

  const userProfile = await db.userProfile.findFirst({
    where:{
      userId: sessionUser?.id,
    }
  })

  console.log(userProfile)
  return (
    <>
      <MainDetails profile={userProfile}/>
      <PhotosCarousel />
      <AboutMe />
      <BasicDetails user={userProfile} />
      <ReligionDetails user={userProfile} />
      <LocationDetails user={userProfile} />
      <ProfessionalDetails user={userProfile} />
      <FamilyDetails user={userProfile} />
    </>
  );
};

export default DashboardPage;
