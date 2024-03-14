import db from '@/lib/db';
import { FC } from 'react';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';

interface OtherImagesProps {
  params: {
    profileId: string;
  };
}

const OtherImages: FC<OtherImagesProps> = async ({ params }) => {
  const userProfile = await db.userProfile.findUnique({
    where: {
      id: params?.profileId,
    },
  });

  return (
    <div className="container p-5 shadow-md rounded-md">
      <div className="p-5">
        <div className="flex gap-3 overflow-y-auto">
          {userProfile?.images.map((image, index) => (
            <div key={index} className="">
              <DirectionAwareHover imageUrl={image}>
                <p className="font-bold text-xl">{userProfile.name}</p>
                <p className="font-normal text-sm">{userProfile.age} years</p>
              </DirectionAwareHover>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherImages;
