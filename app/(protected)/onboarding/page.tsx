import React from 'react';
import { OnboardingForm } from './_components/form';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const Onboarding = async () => {
  const session = await auth();

  // if (!session?.user.isNewUser) {
  //   redirect('/dashboard');
  // }
  return <OnboardingForm />;
};

export default Onboarding;
