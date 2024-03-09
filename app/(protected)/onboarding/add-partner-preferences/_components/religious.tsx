'use client';
import { caste, ethnicities, religions } from '@/constants';
import { Preference } from '@prisma/client';
import { FC, useState } from 'react';
import { EditablePreference } from './editable-preference';
import { useSectionInView } from '@/hooks/useSectionInView';

interface ReligiousPreferencesProps {
  preference: Preference | null;
}

const ReligiousPreferences: FC<ReligiousPreferencesProps> = ({
  preference,
}) => {
  const [formData, setFormData] = useState({
    religion: preference?.religion || undefined,
    ethnicity: preference?.ethnicity || undefined,
    caste: preference?.caste || undefined,
  });

  const { ref } = useSectionInView("Religion");

  return (
    <section id='religion' className='p-5' ref={ref}>
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
    </section>
  );
};

export default ReligiousPreferences;
