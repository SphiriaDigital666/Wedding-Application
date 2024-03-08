'use client';
import { Button } from '@/components/ui/button';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { FC } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

interface SocialProps {}

const Social: FC<SocialProps> = ({}) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  const onClick = (provider: 'google' | 'github') => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className='flex items-center justify-center w-full '>
      <div className='w-full px-6'>
        <div className='flex items-center gap-2 py-3'>
          <div className='w-full h-[1px] bg-[#a0a0a0]'></div>
          <p className='text-center text-[14px]'>OR</p>
          <div className='w-full h-[1px] bg-[#a0a0a0]'></div>
        </div>

        <div className='flex justify-center'>
          <Button
            size='lg'
            className='w-max bg-transparent'
            variant='outline'
            onClick={() => onClick('google')}
          >
            <FcGoogle className='h-5 w-5' />
          </Button>
        </div>

        {/* <Button
        size='lg'
        className='w-full'
        variant='outline'
        onClick={() => onClick('github')}
      >
        <FaGithub className='h-5 w-5' />
      </Button> */}
      </div>
    </div>
  );
};

export default Social;
