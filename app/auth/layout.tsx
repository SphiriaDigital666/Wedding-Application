import Image from 'next/image';
import BG_IMG from '@/public/login/login_bg_img.png';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-screen flex items-center justify-center bg-[#c94c8a] w-full'>
      <div className='md:grid grid-cols-2 '>
        <div className='flex'>
          <div className='hidden md:block'>
            <Image
              src={BG_IMG}
              alt='Login page image'
              className='rounded-l-lg h-full'
            />
          </div>
        </div>

        <div className='bg-[#fff] border-none'>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
