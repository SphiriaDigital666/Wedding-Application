'use client';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { UserProfile } from '@prisma/client';
import { FC } from 'react';

interface AboutProps {
  profile: UserProfile | null;
}

const About: FC<AboutProps> = ({ profile }) => {
  return (
    <div className="p-5 mt-10 shadow-md rounded-md w-full">
      <div className="p-5">
        <div className="flex justify-between">
          <span className="text-2xl">About {profile?.name}</span>
        </div>
        <div className="flex gap-5 mt-4">
          <p></p>
          {profile?.bio ?? 'Bio is not provided'}
        </div>
      </div>
    </div>
  );
};

export default About;
