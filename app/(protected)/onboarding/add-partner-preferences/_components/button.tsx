'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export const GoToProfileButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/profile');
  };

  return (
    <Button onClick={handleClick} className="mt-5 mb-10 ml-12">
      Go to Profile
    </Button>
  );
};
