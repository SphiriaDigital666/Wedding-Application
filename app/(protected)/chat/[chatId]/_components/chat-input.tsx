'use client';

import { sendMessage } from '@/actions/messages/send-message';
import EmojiPicker from '@/components/emoji-picker';
import { useModal } from '@/hooks/useModalStore';
import { User } from '@prisma/client';
import { Camera } from 'lucide-react';
import { FC, startTransition, useRef, useState } from 'react';
import { MdOutlineSend } from 'react-icons/md';
import TextareaAutosize from 'react-textarea-autosize';
interface ChatInputProps {
  chatPartner: User;
  chatId: string;
}

const ChatInput: FC<ChatInputProps> = ({ chatPartner, chatId }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [input, setInput] = useState<string>('');

  const { onOpen } = useModal();

  const handleSendMessage = (chatId: string, text: string) => {
    if (!input) return;
    startTransition(() => {
      sendMessage(chatId, text, '').then((data) => {
        setInput('');
        textareaRef.current?.focus();
      });
    });
  };

  return (
    <>
      <div className='border-t border-gray-200 px-4 pt-4 mb-2 sm:mb-0 flex'>
        <button
          type='button'
          onClick={() => onOpen('messageFile', { chatId })}
          className=' h-[24px] w-[24px] bg-zinc-500 dark:bg-zinc-400 hover:bg-zinc-600 dark:hover:bg-zinc-300 transition rounded-full p-1 flex items-center justify-center'
        >
          <Camera className='text-white dark:text-[#313338]' />
        </button>
        <div className='relative flex-1 overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 '>
          <TextareaAutosize
            ref={textareaRef}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage(chatId, input);
              }
            }}
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message ${chatPartner.name}`}
            className='block w-full h-full resize-none  bg-transparent text-gray-900 placeholder:text-gray-400 sm:py-1.5 sm:text-sm sm:leading-6 py-3 px-3'
          />

          <div
            onClick={() => textareaRef.current?.focus()}
            className='py-2'
            aria-hidden='true'
          >
            <div className='py-px'>
              <div className='h-9' />
            </div>
          </div>

          <div className='absolute right-0 bottom-0 flex justify-between py-2 pl-3 pr-2'>
            <div className='flex items-center'>
              <MdOutlineSend
                onClick={() => handleSendMessage(chatId, input)}
                type='submit'
                className='text-[24px] text-[#adadad] cursor-pointer'
              />
            </div>
          </div>
        </div>
        <div className=''>
          <EmojiPicker
            onChange={(emoji: string) => setInput((prev) => prev + emoji)}
          />
        </div>
      </div>
    </>
  );
};

export default ChatInput;
