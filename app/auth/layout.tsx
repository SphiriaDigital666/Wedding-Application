import Image from 'next/image';
import BG_IMG from '@/public/login/login_bg_img.png';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-screen flex items-center justify-center bg-[#c94c8a] w-full'>
      <div className='md:grid grid-cols-2 bg-[#c94c8a]'>
        <div className='flex'>
          <div className='md:w-[370px] md:h-[537px] lg:w-[400px] hidden md:block'>
            <Image
              src={BG_IMG}
              alt='Login page image'
              className='rounded-l-lg md:w-[370px] md:h-[537px] lg:w-[400px]'
            />
          </div>
        </div>

        <div className='bg-[#ffb9db] rounded-r-lg '>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
