import React, { memo, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Typed from 'react-typed';
import { StaticImageData } from 'next/image';
import { Chat as TMessage } from '@/state/chats/types';
import logo from '@/public/assets/images/logo.svg';
import Image from '@/components/UI/StyledImage';
import Chat from './Chat';
import ResponseFeedback from './FeedbackAction';

type TProps = {
  chats: TMessage[];
  userProfile: string | StaticImageData;
  isLoggedIn: boolean;
};

function ActiveChat({ chats, userProfile, isLoggedIn }: TProps) {
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
        <Chat key={msg.messageID} isLoading={msg.isLoading} profile={msg.isBotResponse ? logo : userProfile}>
          {msg.content.text.length > 0 && msg.messageID !== chats[chats.length - 1].messageID && (
            <div>{msg.content.text}</div>
          )}
          {msg.content.text.length > 0 && msg.messageID === chats[chats.length - 1].messageID && (
            <Typed strings={[msg.content.text]} typeSpeed={30} showCursor={false} />
          )}

          {msg.content.images.length > 0 && (
            <div className="flex flex-row max-w-[60%] gap-2 flex-wrap mt-6  mobile:max-w-[70%] mobile:py-2 mobile:gap-0 dark:bg-darkChat">
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
          {isLoggedIn && msg.isBotResponse && <ResponseFeedback show={!msg.isLoading} />}
        </Chat>
      ))}
    </div>
  );
}
export default memo(ActiveChat);
