import AllMatches from '@/public/allMatches/all-matches-img.png';
import Image from 'next/image';

import Advertisement01 from '@/public/allMatches/ads/ad1.png';
import Advertisement02 from '@/public/allMatches/ads/ad2.png';
import Advertisement03 from '@/public/allMatches/ads/ad3.png';
import Advertisement04 from '@/public/allMatches/ads/ad4.png';

import Advertisement02_01 from '@/public/allMatches/ads/02ad1.png';
import Advertisement02_02 from '@/public/allMatches/ads/02ad2.png';

import db from '@/lib/db';
import { MatchCard } from './_component/match-card';
import SelectComponent from './_component/selectComponent';

export default async function page() {
  const matches = await db.userProfile.findMany({});
  return (
    <div>
      <div className=''>
        <section>
          <div className='relative flex items-center justify-center'>
            <Image
              src={AllMatches}
              alt='Main Image'
              width={1920}
              height={312}
              className='rounded-lg'
            />
            {/* <img
              src={AllMatches}
              alt="All matches img"
              className="w-full object-scale-down"
            /> */}

            <div className='absolute text-center'>
              <p className='text-[48px] text-[#fff] font-bold'>
                The biggest and most trusted Matrimony service for Tamils!
              </p>
              <p className='text-[16px] text-[#fff] font-medium'>
                Register on TamilMatrimony.com for free by providing necessary
                details. You can also register for free by downloading the Tamil
                <br></br>
                Matrimony app from Play Store.Register on TamilMatrimony.
              </p>
            </div>
          </div>

          <div className='container mx-auto mt-[-25px]'>
            <div className='bg-[#FFFFFF] drop-shadow-lg mb-12 flex gap-12 items-center justify-center py-3 rounded-lg px-10 text-[#6A6868] text-[20px]'>
              <p>All Matches</p>
              <p>newly Joined</p>
              <p>Nearby Matches</p>
              <p>Viewed You</p>
              <p>Shortlisted You</p>
              <p>Viewed By You</p>
              <p>Shortlisted By You</p>
            </div>
          </div>
        </section>

        <div className='grid grid-cols-12 gap-4'>
          <div className='col-span-3'>
            <SelectComponent />
          </div>

          <div className='col-span-6 '>
            {matches.map((match) => (
              <div key={match.id}>
                <MatchCard match={match}/>
              </div>
            ))}
          </div>

          <div className='col-span-3'>
            {/* Side ADS starts here */}
            <section>
              {/* first Advertisement start */}
              <div className='bg-[#fff] shadow-lg mx-12 mb-8 w-[300px] rounded-lg p-4 drop-shadow-lg'>
                <div className='flex items-center justify-center gap-2 mb-4'>
                  <Image
                    src={Advertisement01}
                    alt='Main Image'
                    className='rounded-lg'
                  />
                  <div>
                    <Image
                      src={Advertisement02}
                      alt='Main Image'
                      className='rounded-lg'
                    />
                    <Image
                      src={Advertisement03}
                      alt='Main Image'
                      className='rounded-lg'
                    />
                  </div>
                  <Image
                    src={Advertisement04}
                    alt='Main Image'
                    className='rounded-lg'
                  />
                </div>
                <p className='text-[24px] text-[#445159] font-bold mb-2 '>
                  Wedding venues
                </p>
                <p className='text-[12px] text-[#6A6868] font-medium '>
                  t. It mainly express the tone of your special day. If the
                  venue pick that pretty it might be expensive. To help you out,
                  there are some attractive venues you can select according to
                  your budget
                </p>
              </div>
              {/* first Advertisement ends */}

              {/* Second Advertisement start */}

              <div className='bg-[#fff] shadow-lg mx-12 mb-8 w-[300px] rounded-lg p-4 drop-shadow-lg'>
                <div className='flex items-center justify-center gap-2 mb-4'>
                  <div>
                    <Image
                      src={Advertisement02_01}
                      alt='Main Image'
                      className='rounded-lg'
                    />
                    <p className='text-[14px] text-[#445159] font-bold mb-2'>
                      Wedding Cake
                    </p>
                    <p className='text-[7px] text-[#6A6868] font-medium'>
                      Deciding a wedding venue is<br></br> one of important and
                      <br></br>
                      challenging part. It mainly<br></br> express the tone of
                      your
                    </p>
                  </div>

                  <div>
                    <Image
                      src={Advertisement02_02}
                      alt='Main Image'
                      className='rounded-lg'
                    />
                  </div>
                </div>
              </div>
              {/* Second Advertisement ends */}

              {/* Third Advertisement start */}
              <div className='bg-[#fff] shadow-lg mx-12 w-[300px] rounded-lg p-4 drop-shadow-lg'>
                <div className='flex items-center justify-center gap-2 mb-4'>
                  <Image
                    src={Advertisement01}
                    alt='Main Image'
                    className='rounded-lg'
                  />
                  <div>
                    <Image
                      src={Advertisement02}
                      alt='Main Image'
                      className='rounded-lg mb-5'
                    />
                    <Image
                      src={Advertisement03}
                      alt='Main Image'
                      className='rounded-lg'
                    />
                  </div>
                  <Image
                    src={Advertisement04}
                    alt='Main Image'
                    className='rounded-lg'
                  />
                </div>
                <p className='text-[24px] text-[#445159] font-bold mb-2'>
                  Wedding venues
                </p>
                <p className='text-[12px] text-[#6A6868] font-medium'>
                  Deciding a wedding venue is one of important and challenging
                  part. It mainly express the tone of your special day. If the
                  venue pick that pretty it might be expensive.
                </p>
              </div>
              {/* Third Advertisement ends */}
            </section>
            {/* Side ADS ends here */}
          </div>
        </div>
      </div>
    </div>
  );
}
