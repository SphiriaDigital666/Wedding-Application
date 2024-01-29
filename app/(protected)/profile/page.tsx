import AboutMe from './components/about-me';
import BasicDetails from './components/basic-details';
import LocationDetails from './components/location-details';
import MainDetails from './components/main-details';
import PhotosCarousel from './components/photos-carousel';
import ProfessionalDetails from './components/professional-details';
import ReligionDetails from './components/religion-details';

const DashboardPage = ({ user }) => {
  return (
    <>
      <MainDetails />
      <PhotosCarousel />
      <AboutMe />
      <BasicDetails user={user} />
      <ReligionDetails user={user} />
      <LocationDetails user={user} />
      <ProfessionalDetails user={user} />
    </>
  );
};

export default DashboardPage;
