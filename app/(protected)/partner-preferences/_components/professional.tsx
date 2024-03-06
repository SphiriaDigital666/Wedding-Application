'use client';
import {
  annualIncomes,
  educationalQualifications,
  employeeSectors,
  occupations,
} from '@/constants';
import { Preference } from '@prisma/client';
import { FC, useState } from 'react';
import { EditablePreference } from './editable-preference';

interface ProfessionalPreferencesProps {
  preference: Preference | null;
}

const ProfessionalPreferences: FC<ProfessionalPreferencesProps> = ({
  preference,
}) => {
  const [formData, setFormData] = useState({
    education: preference?.education || undefined,
    employedIn: preference?.employedIn || undefined,
    occupation: preference?.occupation || undefined,
    jobTitle: preference?.jobTitle || undefined,
    annualIncome: preference?.annualIncome || undefined,
  });
  return (
    <div className='p-5'>
      <span className='text-2xl'>Professional Preferences</span>
      <div className='flex flex-col gap-4 mt-5'>
        <EditablePreference
          label='Education'
          value={formData.education}
          onValueChange={(event: any) =>
            setFormData({ ...formData, education: event })
          }
          options={educationalQualifications}
          formData={formData}
        />

        <EditablePreference
          label='Employed In'
          value={formData.employedIn}
          onValueChange={(event: any) =>
            setFormData({ ...formData, employedIn: event })
          }
          options={employeeSectors}
          formData={formData}
        />

        <EditablePreference
          label='Occupation'
          value={formData.jobTitle}
          onValueChange={(event: any) =>
            setFormData({ ...formData, jobTitle: event })
          }
          options={occupations}
          formData={formData}
        />

        <EditablePreference
          label='Annual Income'
          value={formData.annualIncome}
          onValueChange={(event: any) =>
            setFormData({ ...formData, annualIncome: event })
          }
          options={annualIncomes}
          formData={formData}
        />
      </div>
    </div>
  );
};

export default ProfessionalPreferences;
