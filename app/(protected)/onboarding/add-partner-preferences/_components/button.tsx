'use client';

import { updateNewUserStatus } from '@/actions/auth/update-new-user.ts';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

export const GoToProfileButton = () => {
  const router = useRouter();

  const handleClick = () => {
    startTransition(() => {
      updateNewUserStatus().then((data) => {
        if (data?.error) {
          console.log(data.error);
        }

        if (data?.success) {
          router.push('/profile');
        }
      });
    });
  };

  return (
    <Button onClick={handleClick} className='mt-5 mb-10 ml-12'>
      Go to Profile
    </Button>
  );
};
