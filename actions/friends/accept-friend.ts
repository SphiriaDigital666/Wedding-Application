'use server';
import { auth } from '@/auth';
import db from '@/lib/db';
import { pusherServer } from '@/lib/pusher';
import { toPusherKey } from '@/lib/utils';
import * as z from 'zod';

export const acceptFriend = async (idToAdd: string) => {
  try {
    const session = await auth();

    if (!session) {
      return { error: 'Unauthorized' };
    }

    const user = await db.user.findFirst({
      where: {
        id: session?.user.id,
      },
    });

    const friend = await db.user.findFirst({
      where: {
        id: idToAdd,
      },
    });

    if (!user || !friend) {
      return { error: 'User not found' };
    }


    const isAlreadyFriends = await db.user.findFirst({
      where: {
        id: session?.user.id,
        friends: {
          some: {
            userId: idToAdd,
          },
        },
      },
    });

    if (isAlreadyFriends) {
      return { error: 'Already friends with this user' };
    }

    const hasFriendRequest = await db.friendRequest.findFirst({
      where: {
        senderId: idToAdd,
        receiverId: session?.user.id,
      },
    });

    if (!hasFriendRequest) {
      return { error: 'No friend request' };
    }

    // notify added user
    await Promise.all([
      pusherServer.trigger(
        toPusherKey(`user:${idToAdd}:friends`),
        'new_friend',
        user
      ),
      pusherServer.trigger(
        toPusherKey(`user:${session.user.id}:friends`),
        'new_friend',
        friend
      ),
    ]);

    // Add friends
    await db.$transaction([
      db.friend.create({
        data: {
          userId: session?.user.id!,
          friendId: idToAdd,
        },
      }),
      db.friend.create({
        data: {
          userId: idToAdd,
          friendId: session?.user.id!,
        },
      }),
      db.friendRequest.delete({
        where: {
          id: hasFriendRequest.id,
          senderId: idToAdd,
          receiverId: session?.user.id,
        },
      }),
    ]);

    return { success: 'Added as a friend!' };
  } catch (error) {
    console.error('Error in acceptFriend:', error);

    if (error instanceof z.ZodError) {
      return { error: 'Invalid request payload' };
    }

    return { error: 'Invalid request' };
  }
};
