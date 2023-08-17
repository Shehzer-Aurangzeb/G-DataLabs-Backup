import React from 'react';
import { TMessage } from '@/types';
import Image from '@/components/UI/StyledImage';
import Chat from './Chat';

type TProps = {
  chats: TMessage[];
};

function ActiveChat({ chats }: TProps) {
  return (
    <div className="px-10 pt-10 pb-12 overflow-y-auto h-[calc(100%_-_150px)]">
      {chats.map((msg) => (
        <Chat key={msg.messageID} isBotResponse={msg.isBotResponse}>
          {msg.content.text.length > 0 && <p>{msg.content.text}</p>}
          {msg.content.images.length > 0 && (
            <div className="flex flex-row max-w-[60%] gap-2 flex-wrap mt-6">
              {msg.content.images.map((img) => (
                <Image src={img} alt="img" className="w-[170px] h-[170px] laptop:w-[140px] laptop:h-[140px]" />
              ))}
            </div>
          )}
        </Chat>
      ))}
    </div>
  );
}
export default ActiveChat;
