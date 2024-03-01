'use client';
import { ActiveIndicator } from '@/components/active-indicator';
import useActiveList from '@/hooks/useActiveList';
import { User } from '@prisma/client';
import Image from 'next/image';
import { FC } from 'react';

interface ChatHeaderProps {
  chatPartner: User;
}

export const ChatHeader: FC<ChatHeaderProps> = ({ chatPartner }) => {
  const { members } = useActiveList();
  const isActive = members.indexOf(chatPartner?.email!) !== -1;

  // const statusText = useMemo(() => {
  //   return isActive ? 'Active' : 'Offline';
  // }, [, isActive]);

  return (
    <div className='flex sm:items-center justify-between py-3 border-b-2 border-gray-200'>
      <div className='relative flex items-center space-x-4'>
        <div className='relative'>
          <div className='relative w-8 sm:w-12 h-8 sm:h-12'>
            <Image
              fill
              referrerPolicy='no-referrer'
              src={chatPartner?.image! || ''}
              alt={`${chatPartner?.name} profile picture`}
              className='rounded-full'
            />
            <ActiveIndicator isActive={isActive} />
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
  );
};

export default ChatHeader;
