import Image from 'next/image';
import BG_IMG from '@/public/login/login_bg_img.png';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-screen flex items-center justify-center bg-[#c94c8a]'>
      <div className='grid grid-cols-2'>
        <div>
          <div className=''>
            <Image src={BG_IMG} alt='Main Image' className='rounded-l-lg' />
          </div>
        </div>

        <div className='bg-[#ffb9db] rounded-r-lg'>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
