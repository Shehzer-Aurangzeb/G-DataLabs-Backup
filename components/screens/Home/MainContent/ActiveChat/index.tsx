import React, { memo, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Chat as TMessage } from '@/state/chats/types';
import Image from '@/components/UI/StyledImage';
import Chat from './Chat';

type TProps = {
  chats: TMessage[];
};

function ActiveChat({ chats }: TProps) {
  const messagesRef = useRef<HTMLDivElement>(null);
  //* scroll to bottom whenever new message is added
  useEffect(() => {
    if (!messagesRef.current) return;
    messagesRef.current.scrollBy({
      top: messagesRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [chats]);
  return (
    <div className="px-10 pt-10 pb-12 overflow-y-auto h-[calc(100%_-_150px)] mobile:px-2 " ref={messagesRef}>
      {chats.map((msg) => (
        <Chat key={msg.messageID} isBotResponse={msg.isBotResponse} isLoading={msg.isLoading}>
          {msg.content.text.length > 0 && <p>{msg.content.text}</p>}
          {msg.content.images.length > 0 && (
            <div className="flex flex-row max-w-[60%] gap-2 flex-wrap mt-6  mobile:max-w-[70%] mobile:py-2 mobile:gap-0">
              {msg.content.images.map((img) => (
                <Image
                  key={uuidv4()}
                  src={img}
                  alt="img"
                  className="w-[160px] h-[160px] laptop:w-[130px] laptop:h-[130px] mobile:w-[100px] mobile:h-[100px]"
                />
              ))}
            </div>
          )}
        </Chat>
      ))}
    </div>
  );
}
export default memo(ActiveChat);
