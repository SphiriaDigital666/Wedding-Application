'use client';

import { acceptFriend } from '@/actions/friends/accept-friend';
import { denyFriend } from '@/actions/friends/deny-friend';
import { pusherClient } from '@/lib/pusher';
import { toPusherKey } from '@/lib/utils';
import { FriendRequest, User } from '@prisma/client';
import { Check, UserPlus, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC, startTransition, useEffect, useState } from 'react';

type FriendRequestWithUser = FriendRequest & {
  sender: User;
};

interface FriendRequestsProps {
  incomingFriendRequests: FriendRequestWithUser[];
  sessionId: string;
}

const FriendRequests: FC<FriendRequestsProps> = ({
  incomingFriendRequests,
  sessionId,
}) => {
  const router = useRouter();
  const [friendRequests, setFriendRequests] = useState<FriendRequest[]>(
    incomingFriendRequests
  );

  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  useEffect(() => {
    pusherClient.subscribe(
      toPusherKey(`user:${sessionId}:incoming_friend_requests`)
    );
    console.log('listening to ', `user:${sessionId}:incoming_friend_requests`);

    const friendRequestHandler = ({
      senderId,
      senderEmail,
    }: IncomingFriendRequest) => {
      console.log('function got called');
      // @ts-ignore
      setFriendRequests((prev) => [...prev, { senderId, senderEmail }]);
    };

    pusherClient.bind('incoming_friend_requests', friendRequestHandler);

    return () => {
      pusherClient.unsubscribe(
        toPusherKey(`user:${sessionId}:incoming_friend_requests`)
      );
      pusherClient.unbind('incoming_friend_requests', friendRequestHandler);
    };
  }, [sessionId]);

  const acceptFriendRequest = (id: string) => {
    startTransition(() => {
      acceptFriend(id).then((data) => {
        setError(data.error);
        if (data.success) {
          setSuccess(data.success);
          setFriendRequests((prev) =>
            prev.filter((request) => request.senderId !== id)
          );
          router.refresh();
        }
      });
    });
  };

  const denyFriendRequest = (senderId: string) => {
    startTransition(() => {
      denyFriend(senderId).then((data) => {
        setError(data.error);
        if (data.success) {
          setFriendRequests((prev) =>
            prev.filter((request) => request.senderId !== senderId)
          );
          router.refresh();
        }
      });
    });
  };

  return (
    <>
      {friendRequests.length === 0 ? (
        <p className='text-sm text-zinc-500'>Nothing to show here...</p>
      ) : (
        friendRequests.map((request) => (
          <div key={request.senderId} className='flex gap-4 items-center'>
            <UserPlus className='text-black' />
            {/* @ts-ignore */}
            <p className='font-medium text-lg'>{request.sender.name}</p>
            <button
              onClick={() => acceptFriendRequest(request.senderId)}
              aria-label='accept friend'
              className='w-8 h-8 bg-indigo-600 hover:bg-indigo-700 grid place-items-center rounded-full transition hover:shadow-md'
            >
              <Check className='font-semibold text-white w-3/4 h-3/4' />
            </button>

            <button
              onClick={() => denyFriendRequest(request.senderId)}
              aria-label='deny friend'
              className='w-8 h-8 bg-red-600 hover:bg-red-700 grid place-items-center rounded-full transition hover:shadow-md'
            >
              <X className='font-semibold text-white w-3/4 h-3/4' />
            </button>
          </div>
        ))
      )}
    </>
  );
};

export default FriendRequests;
