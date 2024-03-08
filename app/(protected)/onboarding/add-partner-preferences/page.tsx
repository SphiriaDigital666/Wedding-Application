import { currentUser } from '@/lib/auth';
import db from '@/lib/db';
import BasicPreferences from './_components/basic';
import LocationPreferences from './_components/location';
import ProfessionalPreferences from './_components/professional';
import ReligiousPreferences from './_components/religious';
import SideBar from './_components/sidebar';

const PreferencePage = async () => {
  const user = await currentUser();

  const userPreference = await db.preference.findFirst({
    where: {
      userId: user?.id!,
    },
  });
  return (
    <div className='flex container gap-5'>
      <SideBar />
      <div className='flex container p-5 mt-10 shadow-md rounded-md'>
        <div>
          <div className='p-5'>
            <div className='flex justify-between'>
              <span className='text-2xl'>Partner Preferences</span>
            </div>
            <div className='flex gap-5 mt-4'>
              Matches recommended by us are based on Acceptable matches criteria
              and at times might go slightly beyond your preferences.
            </div>
          </div>

          <div className='flex container'>
            <div className='w-full'>
              <BasicPreferences preference={userPreference} />

              <ReligiousPreferences preference={userPreference} />

              <ProfessionalPreferences preference={userPreference} />

              <LocationPreferences preference={userPreference} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferencePage;
