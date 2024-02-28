// import { fetchRedis } from '@/helpers/redis';
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
   include:{
    sender: {
      select:{
        name: true
      }
    }
   }
 });

  // (await fetchRedis(
  //   'smembers',
  //   `user:${session.user.id}:incoming_friend_requests`
  // )) as string[];

  // const incomingFriendRequests = await Promise.all(
  //   incomingSenderIds.map(async (senderId) => {
  //     const sender = (await fetchRedis('get', `user:${senderId}`)) as string;
  //     const senderParsed = JSON.parse(sender) as User;

  //     return {
  //       senderId,
  //       senderEmail: senderParsed.email,
  //     };
  //   })
  // );

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
