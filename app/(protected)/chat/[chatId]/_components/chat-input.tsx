"use client";

import { sendMessage } from "@/actions/messages/send-message";
import { Button } from "@/components/ui/button";
import { User } from "@prisma/client";
import { FC, startTransition, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { MdOutlineSend } from "react-icons/md";
interface ChatInputProps {
  chatPartner: User;
  chatId: string;
}

const ChatInput: FC<ChatInputProps> = ({ chatPartner, chatId }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");

  const handleSendMessage = (text: string, chatId: string) => {
    if (!input) return;
    startTransition(() => {
      sendMessage(text, chatId).then((data) => {
        setInput("");
        textareaRef.current?.focus();
      });
    });
  };

  return (
    <div className="border-t border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
      <div className="relative flex-1 overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 ">
        <TextareaAutosize
          ref={textareaRef}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage(input, chatId);
            }
          }}
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message ${chatPartner.name}`}
          className="block w-full resize-none  bg-transparent text-gray-900 placeholder:text-gray-400 sm:py-1.5 sm:text-sm sm:leading-6 py-3 px-3"
        />

        <div
          onClick={() => textareaRef.current?.focus()}
          className="py-2"
          aria-hidden="true"
        >
          <div className="py-px">
            <div className="h-9" />
          </div>
        </div>

        <div className="absolute right-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
          <div className="flex items-center">
            {/* <Button
              onClick={() => handleSendMessage(input, chatId)}
              type="submit"
            >
              Post 
            </Button> */}
            <MdOutlineSend
              onClick={() => handleSendMessage(input, chatId)}
              type="submit"
              className="text-[24px] text-[#adadad] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
