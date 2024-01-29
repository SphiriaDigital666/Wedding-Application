import AboutMe from './components/about-me';
import BasicDetails from './components/basic-details';
import PhotosCarousel from './components/photos-carousel';

const DashboardPage = () => {
  return (
    <>
      <BasicDetails />
      <PhotosCarousel />
      <AboutMe />
    </>
  );
};

export default DashboardPage;
