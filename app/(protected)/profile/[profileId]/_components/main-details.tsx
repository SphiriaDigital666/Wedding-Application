'use client';
import {
  removeShortlist,
  shortlistMatch,
} from '@/actions/matches/shortlist-matches';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { convertHeight } from '@/helpers/convert-height';
import { UserProfile } from '@prisma/client';
import { Check, Star, X } from 'lucide-react';
import Image from 'next/image';
import { FC, startTransition, useState } from 'react';
import { toast } from 'sonner';

interface MainDetailsProps {
  profile: UserProfile | null;
  isShortlisted: boolean;
}

const MainDetails: FC<MainDetailsProps> = ({ profile, isShortlisted }) => {
  const [isShortlistedState, setIsShortlistedState] = useState(isShortlisted);

  const handleShortlist = (id: string) => {
    startTransition(() => {
      if (isShortlistedState) {
        removeShortlist(id).then((data) => {
          if (data.error) {
            toast.error(data.error);
          } else {
            setIsShortlistedState(false);
            toast.success('Removed from shortlist successfully');
          }
        });
      } else {
        shortlistMatch(id).then((data) => {
          if (data.error) {
            toast.error(data.error);
          } else {
            setIsShortlistedState(true);
            toast.success('Added to shortlist successfully');
          }
        });
      }
    });
  };

  return (
    <div className='container shadow-md m-10 rounded-md p-5'>
      <div className='flex items-start gap-10'>
        <div>
          <Card>
            <CardContent className='flex aspect-square items-center justify-center '>
              <div className='flex items-center justify-center m-auto'>
                <Image
                  src={profile?.profileImage!}
                  alt='Image'
                  height={400}
                  width={400}
                  className='rounded-md object-cover max-w-[300px] max-h-[350px] mt-5'
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className='text-2xl font-semibold'>{profile?.name}</h1>
          <span>
            Age: {profile?.age}, Height: {convertHeight(profile?.height!)}
          </span>
          <span>
            {profile?.religion}, {profile?.caste}
          </span>
          <span>
            {profile?.city}, {profile?.state}, {profile?.country}
          </span>
          <span>{profile?.education}</span>
          <Separator className='w-[600px] mt-36' />
          <div className='flex gap-5 items-center'>
            <div>
              <p>Interested in her?</p>
              <p className='text-gray-500'>Connect now</p>
            </div>
            <div className='flex gap-3'>
              <Button variant={'outline'} className='gap-2 '>
                <X /> Dont Show
              </Button>
              <Button className='gap-2'>
                <Check /> Send Interest
              </Button>
            </div>
          </div>
        </div>
        <Button
          variant={'outline'}
          className='ml-20 gap-3'
          onClick={() => handleShortlist(profile?.id!)}
        >
          {isShortlistedState ? (
            <Check className='text-green-500' />
            ) : (
              <Star className='text-yellow-500' />
          )}
          {isShortlistedState ? 'Shortlisted' : 'Shortlist'}
        </Button>
      </div>
    </div>
  );
};

export default MainDetails;
