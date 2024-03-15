'use client';
import { Card, CardContent } from '@/components/ui/card';
import { UserProfile } from '@prisma/client';
import Image from 'next/image';
import { convertHeight } from '@/helpers/convert-height';
import { FC } from 'react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

interface MainDetailsProps {
  profile: UserProfile | null;
}

const MainDetails: FC<MainDetailsProps> = ({ profile }) => {
  return (
    <div className="container shadow-md m-10 rounded-md p-5">
      <div className="flex items-center gap-10">
        <div>
          <Card>
            <CardContent className="flex aspect-square items-center justify-center ">
              <div className="flex items-center justify-center m-auto">
                <Image
                  src={profile?.profileImage!}
                  alt="Image"
                  height={400}
                  width={400}
                  className="rounded-md object-cover max-w-[300px] max-h-[350px] mt-5"
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold">{profile?.name}</h1>
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
          <Separator className="w-[600px] mt-36" />
          <div className="flex gap-5 items-center">
            <div>
              <p>Interested in her?</p>
              <p className="text-gray-500">Connect now</p>
            </div>
            <div className="flex gap-3">
              <Button variant={'outline'} className="gap-2 ">
                <X /> Dont Show
              </Button>
              <Button className="gap-2">
                <Check /> Send Interest
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDetails;
