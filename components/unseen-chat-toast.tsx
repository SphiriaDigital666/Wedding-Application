'use client';

import UnseenChatToast from '@/app/(protected)/chat/_components/unseen-chat-toast';
import { pusherClient } from '@/lib/pusher';
import { chatHrefConstructor, toPusherKey } from '@/lib/utils';
import { Message, User } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface ExtendedMessage extends Message {
  senderImg: string;
  senderName: string;
}

export const UnseenChatToastProvider = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [unseenMessages, setUnseenMessages] = useState<Message[]>([]);
  const [playNotificationSound, setPlayNotificationSound] = useState(false);

  const session = useSession();
  const sessionId = session.data?.user.id!;

  useEffect(() => {
    pusherClient.subscribe(toPusherKey(`user:${sessionId}:chats`));
    pusherClient.subscribe(toPusherKey(`user:${sessionId}:friends`));

    const newFriendHandler = (newFriend: User) => {
      console.log('received new user', newFriend);
      // @ts-ignore
      setActiveChats((prev) => [...prev, newFriend]);
    };

    const audio = new Audio('/notification.mp3');

    const chatHandler = (message: ExtendedMessage) => {
      const shouldNotify =
        pathname !==
        `/chat/${chatHrefConstructor(sessionId, message.senderId)}`;

      if (!shouldNotify) return;

      // should be notified
      toast.custom((t) => (
        <UnseenChatToast
          t={t}
          sessionId={sessionId}
          senderId={message.senderId}
          senderImg={message.senderImg}
          senderMessage={message.text!}
          senderName={message.senderName}
        />
      ));

      setUnseenMessages((prev) => [...prev, message]);
      setPlayNotificationSound(true);
    };

    pusherClient.bind('new_message', chatHandler);
    pusherClient.bind('new_friend', newFriendHandler);

    if (playNotificationSound) {
      audio.play();
      // Reset the state to stop continuous playing
      setPlayNotificationSound(false);
    }

    return () => {
      pusherClient.unsubscribe(toPusherKey(`user:${sessionId}:chats`));
      pusherClient.unsubscribe(toPusherKey(`user:${sessionId}:friends`));
      pusherClient.unbind('new_message', chatHandler);
      pusherClient.unbind('new_friend', newFriendHandler);
    };
  }, [pathname, sessionId, router, playNotificationSound]);
  return null;
};
