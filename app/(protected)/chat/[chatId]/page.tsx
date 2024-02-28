import { auth } from '@/auth';
import db from '@/lib/db';
import { MessageSchema } from '@/schemas';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FC } from 'react';
import * as z from 'zod';
import ChatInput from './_components/chat-input';
import Messages from './_components/messages';
import { User } from '@prisma/client';

export const messageArrayValidator = z.array(MessageSchema);

export type Message = z.infer<typeof MessageSchema>;

interface pageProps {
  params: {
    chatId: string;
  };
}

const page: FC<pageProps> = async ({ params }) => {
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
      <div className='flex sm:items-center justify-between py-3 border-b-2 border-gray-200'>
        <div className='relative flex items-center space-x-4'>
          <div className='relative'>
            <div className='relative w-8 sm:w-12 h-8 sm:h-12'>
              <Image
                fill
                referrerPolicy='no-referrer'
                src={chatPartner?.image!}
                alt={`${chatPartner?.name} profile picture`}
                className='rounded-full'
              />
            </div>
          </div>

          <div className='flex flex-col leading-tight'>
            <div className='text-xl flex items-center'>
              <span className='text-gray-700 mr-3 font-semibold'>
                {chatPartner?.name}
              </span>
            </div>

            <span className='text-sm text-gray-600'>{chatPartner?.email}</span>
          </div>
        </div>
      </div>

      <Messages
        chatId={chatId}
        chatPartner={chatPartner as User}
        sessionImg={session.user.image}
        sessionId={session.user.id!}
        initialMessages={initialMessages}
      />
      <ChatInput chatId={chatId} chatPartner={chatPartner as User} />
    </div>
  );
};

export default page;
