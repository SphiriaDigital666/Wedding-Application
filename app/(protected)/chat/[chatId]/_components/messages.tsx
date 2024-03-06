'use client';

import { pusherClient } from '@/lib/pusher';
import { cn, toPusherKey } from '@/lib/utils';
import { Message, User } from '@prisma/client';
import { format } from 'date-fns';
import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';
import { ImageModal } from './image-modal';

interface MessagesProps {
  initialMessages: Message[];
  sessionId: string;
  chatId: string;
  sessionImg: string | null | undefined;
  chatPartner: User;
}

const Messages: FC<MessagesProps> = ({
  initialMessages,
  sessionId,
  chatId,
  chatPartner,
  sessionImg,
}) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [imageModalOpen, setImageModalOpen] = useState(false);

  useEffect(() => {
    pusherClient.subscribe(toPusherKey(`chat:${chatId}`));

    const messageHandler = (message: Message) => {
      setMessages((prev) => [message, ...prev]);
    };

    pusherClient.bind('incoming-message', messageHandler);

    return () => {
      pusherClient.unsubscribe(toPusherKey(`chat:${chatId}`));
      pusherClient.unbind('incoming-message', messageHandler);
    };
  }, [chatId]);

  const scrollDownRef = useRef<HTMLDivElement | null>(null);

  const formatTimestamp = (timestamp: number) => {
    return format(timestamp, 'HH:mm');
  };

  return (
    <div
      id='messages'
      className='flex h-full flex-1 flex-col-reverse gap-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch'
    >
      <div ref={scrollDownRef} />

      {messages.map((message, index) => {
        const isCurrentUser = message.senderId === sessionId;

        const hasNextMessageFromSameUser =
          messages[index - 1]?.senderId === messages[index].senderId;

        return (
          //       <div
          //         className='chat-message'
          //         key={`${message.id}-${message}`}
          //       >
          //         <div
          //           className={cn('flex items-end', {
          //             'justify-end': isCurrentUser,
          //           })}
          //         >
          //           <div
          //             className={cn(
          //               'flex flex-col space-y-2 text-base max-w-xs mx-2',
          //               {
          //                 'order-1 items-end': isCurrentUser,
          //                 'order-2 items-start': !isCurrentUser,
          //               }
          //             )}
          //           >
          //             <span
          //               className={cn('px-4 py-2 rounded-lg inline-block', {
          //                 'bg-indigo-600 text-white': isCurrentUser,
          //                 'bg-gray-200 text-gray-900': !isCurrentUser,
          //                 'rounded-br-none':
          //                   !hasNextMessageFromSameUser && isCurrentUser,
          //                 'rounded-bl-none':
          //                   !hasNextMessageFromSameUser && !isCurrentUser,
          //               })}
          //             >
          //               {message.text}{' '}
          //               <span className='ml-2 text-xs text-gray-400'>
          //                 {formatTimestamp(message.createdAt as unknown as number)}
          //               </span>
          //             </span>
          //           </div>

          //           <div
          //             className={cn('relative w-6 h-6', {
          //               'order-2': isCurrentUser,
          //               'order-1': !isCurrentUser,
          //               invisible: hasNextMessageFromSameUser,
          //             })}
          //           >
          //             <Image
          //               fill
          //               src={
          //                 isCurrentUser
          //                   ? (sessionImg as string)
          //                   : chatPartner.image || ''
          //               }
          //               alt='Profile picture'
          //               referrerPolicy='no-referrer'
          //               className='rounded-full'
          //             />
          //           </div>
          //         </div>
          //       </div>
          //     );
          //   })}
          // </div>
          <div className='chat-message' key={`${message.id}-${message}`}>
            <div
              className={cn('flex items-end', {
                'justify-end': isCurrentUser,
              })}
            >
              <div
                className={cn(
                  'flex flex-col space-y-2 text-base max-w-xs mx-2',
                  {
                    'order-1 items-end': isCurrentUser,
                    'order-2 items-start': !isCurrentUser,
                  }
                )}
              >
                <ImageModal
                  src={message.fileUrl}
                  isOpen={imageModalOpen}
                  onClose={() => setImageModalOpen(false)}
                />
                {/* Displaying image if fileUrl is available */}
                {message.fileUrl ? (
                  <Image
                    src={message.fileUrl}
                    alt='Attached Image'
                    className='rounded-md max-w-xs cursor-pointer'
                    width={200}
                    height={200}
                    onClick={() => setImageModalOpen(true)}
                  />
                ) : (
                  <span
                    className={cn('px-4 py-2 rounded-lg inline-block', {
                      'bg-indigo-600 text-white': isCurrentUser,
                      'bg-gray-200 text-gray-900': !isCurrentUser,
                      'rounded-br-none':
                        !hasNextMessageFromSameUser && isCurrentUser,
                      'rounded-bl-none':
                        !hasNextMessageFromSameUser && !isCurrentUser,
                    })}
                  >
                    {message.text}{' '}
                    <span className='ml-2 text-xs text-gray-400'>
                      {formatTimestamp(message.createdAt as unknown as number)}
                    </span>
                  </span>
                )}
              </div>

              <div
                className={cn('relative w-6 h-6', {
                  'order-2': isCurrentUser,
                  'order-1': !isCurrentUser,
                  invisible: hasNextMessageFromSameUser,
                })}
              >
                <Image
                  fill
                  src={
                    isCurrentUser
                      ? (sessionImg as string)
                      : chatPartner.image || ''
                  }
                  alt='Profile picture'
                  referrerPolicy='no-referrer'
                  className='rounded-full'
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Messages;
