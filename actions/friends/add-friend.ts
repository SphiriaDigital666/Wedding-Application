'use server';
import { auth } from '@/auth';
import { getUserByEmail } from '@/data/user';
import db from '@/lib/db';
import { AddFriendSchema } from '@/schemas';
import * as z from 'zod';

export const addFriend = async (email: z.infer<typeof AddFriendSchema>) => {
  const session = await auth();
  const validatedFields = AddFriendSchema.safeParse(email);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const { email: EmailtoAdd } = validatedFields.data;

  const existingUser = await getUserByEmail(EmailtoAdd);

  if (!existingUser) {
    return { error: 'This person does not exist' };
  }

  if (existingUser.id === session?.user.id) {
    return { error: 'You cannot add yourself as a friend' };
  }

  // check if user is already added
  const isAlreadyAdded = await db.friendRequest.findMany({
    where: {
      senderId: session?.user.id!,
      receiverId: existingUser.id,
    },
  });

  if (isAlreadyAdded.length !== 0) {
    return { error: 'Already added this user' };
  }

  // check if user is already friends
  const isAlreadyFriends = await db.user.findFirst({
    where: {
      id: session?.user.id!,
      friends: {
        some: {
          friendId: existingUser.id,
        },
      },
    },
  });
  console.log("🚀 ~ addFriend ~ isAlreadyFriends:", isAlreadyFriends)

  if (isAlreadyFriends) {
    return { error: 'Already friends with this user' };
  }

  // Create a friend request
  await db.friendRequest.create({
    data: {
      senderId: session?.user.id!,
      receiverId: existingUser.id,
    },
  });

  return { success: 'Friend request sent!' };
};
