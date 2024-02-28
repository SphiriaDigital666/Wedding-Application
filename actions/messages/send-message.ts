'use server';
import { auth } from '@/auth';
import db from '@/lib/db';
import { nanoid } from 'nanoid';

export const sendMessage = async (text: string, chatId: string) => {
  const session = await auth();

  if (!session) {
    return { error: 'Unauthorized' };
  }

  const [userId1, userId2] = chatId.split('--');

  if (session.user.id !== userId1 && session.user.id !== userId2) {
    return { error: 'Unauthorized' };
  }

  const friendId = session.user.id === userId1 ? userId2 : userId1;

  // Check if the users are friends using Prisma
  const isFriend = await db.friend.findFirst({
    where: {
      userId: session.user.id,
      friendId: friendId,
    },
  });

  if (!isFriend) {
    return new Response('Unauthorized', { status: 401 });
  }

  const sender = await db.user.findUnique({
    where: {
      id: session.user.id,
    },
  });

  const timestamp = new Date();

  const message = {
    id: nanoid(),
    senderId: session.user.id,
    text,
    createdAt: timestamp,
  };

  // Notify all connected chat room clients using Pusher
  // await pusherServer.trigger(
  //   toPusherKey(`chat:${chatId}`),
  //   'incoming-message',
  //   message
  // );

  // await pusherServer.trigger(
  //   toPusherKey(`user:${friendId}:chats`),
  //   'new_message',
  //   {
  //     ...message,
  //     senderImg: sender?.image,
  //     senderName: sender?.name,
  //   }
  // );

  // Save the message to the Prisma database
  await db.message.create({
    data: {
      id: message.id,
      senderId: message.senderId,
      text: message.text,
      chatId: chatId,
    },
  });

  return { success: 'Message sent!' };
};
