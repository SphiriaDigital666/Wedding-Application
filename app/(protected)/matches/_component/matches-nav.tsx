'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface MatchesNavProps {}

export const MatchesNav: FC<MatchesNavProps> = ({}) => {
  const pathname = usePathname();
  return (
    <div className='container mx-auto mt-[-25px]'>
      <div className='bg-[#FFFFFF] drop-shadow-lg mb-12 flex gap-12 items-center justify-center py-3 rounded-lg px-10 text-[#6A6868] text-[20px]'>
        <Link
          href='/matches/all-matches'
          className={pathname.includes('/all-matches') ? 'text-[#5bade3]' : ''}
        >
          All Matches
        </Link>
        <Link
          href='/matches/newly-joined'
          className={pathname.includes('/newly-joined') ? 'text-[#5bade3]' : ''}
        >
          Newly Joined
        </Link>
        <Link
          href='/matches/nearby-matches'
          className={
            pathname.includes('/nearby-matches') ? 'text-[#5bade3]' : ''
          }
        >
          Nearby Matches
        </Link>

        <Link
          href='/matches/shortlisted-by-you'
          className={
            pathname.includes('/shortlisted-by-you') ? 'text-[#5bade3]' : ''
          }
        >
          Shortlisted By You
        </Link>
      </div>
    </div>
  );
};
