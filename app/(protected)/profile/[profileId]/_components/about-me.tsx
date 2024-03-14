'use client';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { UserProfile } from '@prisma/client';
import { FC } from 'react';

interface AboutProps {
  profile: UserProfile | null;
}

const About: FC<AboutProps> = ({ profile }) => {
  return (
    <div className="p-5 mt-10 shadow-md rounded-md">
      <div className="p-5">
        <div className="flex justify-between">
          <span className="text-2xl">About Me</span>
        </div>
        <div className="flex gap-5 mt-4">
          <TextGenerateEffect
            words="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quos
          repudiandae excepturi, dolorum laboriosam ducimus, nulla voluptatem,
          labore expedita ea quas porro architecto nesciunt veritatis unde quod
          perferendis aspernatur voluptatibus?"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
