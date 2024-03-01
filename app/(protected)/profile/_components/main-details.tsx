'use client';

import React, { ChangeEvent, FC, useRef, useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { UserProfile } from '@prisma/client';
import { Card, CardContent } from '@/components/ui/card';
import { removeProfilePhoto } from '@/actions/profile/update-profile';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

interface MainDetailsProps {
  profile: UserProfile;
}

const MainDetails: FC<MainDetailsProps> = ({ profile }) => {
  const router = useRouter();

  const [isHovered, setIsHovered] = useState(false);

  const [isPending, startTransition] = useTransition();

  const handleDeletePhoto = async () => {
    startTransition(() => {
      try {
        removeProfilePhoto();
        router.refresh();
      } catch (error) {
        console.error('Error deleting profile image:', error);
      }
    });
  };

  return (
    <div className="container p-5 mt-10 shadow-md rounded-md">
      <div className="flex justify-between items-center p-10">
        <div className="flex flex-row items-center relative gap-5">
          <Card className="w-48 h-48 relative">
            <CardContent
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex aspect-square items-center justify-center"
            >
              {profile?.profileImage ? (
                <div className="relative">
                  <Image
                    src={profile.profileImage}
                    alt="Image"
                    width={200}
                    height={200}
                    className="mt-6 rounded-md"
                  />
                  {isHovered && (
                    <div className="absolute top-0 right-0 m-2">
                      <button
                        onClick={() => handleDeletePhoto()}
                        className="flex items-center bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      >
                        {isPending && (
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <p>No image</p>
              )}
            </CardContent>
          </Card>
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
