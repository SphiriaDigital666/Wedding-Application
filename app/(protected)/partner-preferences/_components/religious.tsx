'use client';
import { caste, ethnicities, religions } from '@/constants';
import { Preference } from '@prisma/client';
import { FC, useState } from 'react';
import { EditablePreference } from './editable-preference';

interface ReligiousPreferencesProps {
  preference: Preference;
}

const ReligiousPreferences: FC<ReligiousPreferencesProps> = ({
  preference,
}) => {
  const [formData, setFormData] = useState({
    agestart: preference?.agestart || undefined,
    ageTo: preference?.ageTo || undefined,
    languages: preference?.languages || [],
    heightFrom: preference?.heightFrom || undefined,
    heightTo: preference?.heightTo || undefined,
    bodyType: preference?.bodyType || undefined,
    physicalStatus: preference?.physicalStatus || undefined,
    maritalStatus: preference?.maritalStatus || undefined,
    eatingHabits: preference?.eatingHabits || undefined,
    drinkingHabits: preference?.drinkingHabits || undefined,
    smokingHabits: preference?.smokingHabits || undefined,
    religion: preference?.religion || undefined,
    ethnicity: preference?.ethnicity || undefined,
    caste: preference?.caste || undefined,
    education: preference?.education || undefined,
    employedIn: preference?.employedIn || undefined,
    occupation: preference?.occupation || undefined,
    annualIncome: preference?.annualIncome || undefined,
    country: preference?.country || undefined,
    city: preference?.city || undefined,
    state: preference?.state || undefined,
  });
  return (
    <div className='p-5'>
      <span className='text-2xl'>Religious Preferences</span>
      <div className='flex flex-col gap-4 mt-5'>
        <EditablePreference
          label='Religion'
          value={formData.religion}
          onValueChange={(event: any) =>
            setFormData({ ...formData, religion: event })
          }
          options={religions}
          formData={formData}
        />

        <EditablePreference
          label='Ethnicity'
          value={formData.ethnicity}
          onValueChange={(event: any) =>
            setFormData({ ...formData, ethnicity: event })
          }
          options={ethnicities}
          formData={formData}
        />

        <EditablePreference
          label='Caste'
          value={formData.caste}
          onValueChange={(event: any) =>
            setFormData({ ...formData, caste: event })
          }
          options={caste}
          formData={formData}
        />
      </div>
    </div>
  );
};

export default ReligiousPreferences;
