'use server';
import { auth } from '@/auth';
import db from '@/lib/db';
import * as z from 'zod';

export const acceptFriend = async (idToAdd: string) => {
  try {
    const session = await auth();

    if (!session) {
      return { error: 'Unauthorized' };
    }

    // const { id: idToAdd } = z.object({ id: z.string() }).parse(id);
    // console.log(idToAdd);

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
