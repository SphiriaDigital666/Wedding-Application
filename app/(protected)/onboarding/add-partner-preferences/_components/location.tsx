'use client';
import { cities, countries, states } from '@/constants';
import { Preference } from '@prisma/client';
import { FC, useState } from 'react';
import { EditablePreference } from './editable-preference';

interface LocationPreferencesProps {
  preference: Preference | null;
}

const LocationPreferences: FC<LocationPreferencesProps> = ({ preference }) => {
  const [formData, setFormData] = useState({
    country: preference?.country || undefined,
    city: preference?.city || undefined,
    state: preference?.state || undefined,
  });
  return (
    <div className='p-5'>
      <span className='text-2xl'>Location Preferences</span>
      <div className='flex flex-col gap-4 mt-5'>
        <EditablePreference
          label='Country'
          value={formData.country}
          onValueChange={(event: any) =>
            setFormData({ ...formData, country: event })
          }
          options={countries}
          formData={formData}
        />

        <EditablePreference
          label='City'
          value={formData.city}
          onValueChange={(event: any) =>
            setFormData({ ...formData, city: event })
          }
          options={cities}
          formData={formData}
        />

        <EditablePreference
          label='State'
          value={formData.state}
          onValueChange={(event: any) =>
            setFormData({ ...formData, state: event })
          }
          options={states}
          formData={formData}
        />
      </div>
    </div>
  );
};

export default LocationPreferences;
