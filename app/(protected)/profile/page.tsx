import AboutMe from './components/about-me';
import BasicDetails from './components/basic-details';
import MainDetails from './components/main-details';
import PhotosCarousel from './components/photos-carousel';

const DashboardPage = ({user}) => {
  return (
    <>
      <MainDetails />
      <PhotosCarousel />
      <AboutMe />
      <BasicDetails user={user} />
    </>
  );
};

export default DashboardPage;
