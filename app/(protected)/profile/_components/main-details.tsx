import React, { FC } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { UserProfile } from '@prisma/client';

interface MainDetailsProps {
  profile: UserProfile ;
}

const MainDetails: FC<MainDetailsProps> = ({ profile }) => {
  return (
    <div className="container p-5 mt-10 shadow-md rounded-md">
      <div className="flex justify-between p-10">
        <div className="flex flex-row">
          <div className="mr-8">
            <Image
              src={profile?.profileImage!}
              alt="Image"
              width={150}
              height={150}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Jon Doe</h1>
            <span>25 Years, 5 Ft 7 In / 170 Cms</span>
            <span>Buddhist, (Caste No Bar)</span>
            <span>Kandy, Central Province, Sri Lanka</span>
            <span>B.Sc IT/ Computer Science, Software Engineer</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Button variant="secondary" size="lg">
            Preview
          </Button>
          <span className="text-gray-400">
            How your profile looks to others
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainDetails;
