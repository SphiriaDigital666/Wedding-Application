import { auth } from '@/auth';
import db from '@/lib/db';
import { notFound } from 'next/navigation';
import { FC } from 'react';
import FriendRequests from './_components/friend-requests';

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const session = await auth();
  if (!session) notFound();

  // ids of people who sent current logged in user a friend requests
  const friendRequests = await db.friendRequest.findMany({
    where: {
      receiverId: session?.user.id!,
    },
    include: {
      sender: {
        select: {
          name: true,
        },
      },
    },
  });

  return (
    <main className='pt-8'>
      <h1 className='font-bold text-5xl mb-8'>Add a friend</h1>
      <div className='flex flex-col gap-4'>
        <FriendRequests
          // @ts-ignore
          incomingFriendRequests={friendRequests}
          sessionId={session.user.id!}
        />
      </div>
    </main>
  );
};

export default page;
