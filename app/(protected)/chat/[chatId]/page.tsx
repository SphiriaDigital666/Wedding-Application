import { auth } from '@/auth';
import db from '@/lib/db';
import { MessageSchema } from '@/schemas';
import { User } from '@prisma/client';
import { notFound } from 'next/navigation';
import { FC } from 'react';
import * as z from 'zod';
import ChatHeader from './_components/chat-header';
import ChatInput from './_components/chat-input';
import Messages from './_components/messages';

export const messageArrayValidator = z.array(MessageSchema);

export type Message = z.infer<typeof MessageSchema>;

interface pageProps {
  params: {
    chatId: string;
  };
}

const Page: FC<pageProps> = async ({ params }) => {
  const { chatId } = params;

  const session = await auth();
  if (!session) notFound();

  const { user } = session;

  const [userId1, userId2] = chatId.split('--');

  if (user.id !== userId1 && user.id !== userId2) {
    notFound();
  }

  const chatPartnerId = user.id === userId1 ? userId2 : userId1;

  const chatPartner = await db.user.findUnique({
    where: { id: chatPartnerId },
    select: { id: true, name: true, email: true, image: true },
  });

  const initialMessages = await db.message.findMany({
    where: { chatId: chatId },
    orderBy: { createdAt: 'desc' }, // Adjust the order based on your requirements
  });

  return (
    <div className='flex-1 justify-between flex flex-col h-full max-h-[calc(100vh-6rem)]'>
      <ChatHeader chatPartner={chatPartner} />

      <Messages
        chatId={chatId}
        chatPartner={chatPartner as User}
        sessionImg={session.user.image || ''}
        sessionId={session.user.id!}
        initialMessages={initialMessages}
      />
      <ChatInput chatId={chatId} chatPartner={chatPartner as User} />
      {/* <Awaiting_response /> */}
    </div>
  );
};

export default Page;
