import React, { memo, useCallback, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Typed from 'react-typed';
import { StaticImageData } from 'next/image';
import logo from '@/public/assets/images/logo.png';
import logo_dark from '@/public/assets/images/logo-dark.png';
import logo_dark_gif from '@/public/assets/images/logo_dark.gif';
import logo_gif from '@/public/assets/images/logo.gif';
import Image from '@/components/UI/StyledImage';
import { Chat as TMessage } from '@/state/chats/types';
import { useTheme } from '@/context/ThemeProvider';
import { Theme } from '@/types';
import ResponseFeedback from './FeedbackAction';
import Chat from './Chat';

type TProps = {
  chats: TMessage[];
  userProfile: string | StaticImageData;
  isLoggedIn: boolean;
};

function ActiveChat({ chats, userProfile, isLoggedIn }: TProps) {
  const messagesRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const profile = useCallback(
    (isLoading: boolean) => {
      if (isLoading && theme === Theme.LIGHT) return logo_gif;
      if (isLoading && theme === Theme.DARK) return logo_dark_gif;
      if (!isLoading && theme === Theme.DARK) return logo_dark;

      return logo;
    },
    [theme],
  );
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
        <Chat
          key={msg.messageID}
          isLoading={msg.isLoading}
          profile={msg.isBotResponse ? profile(msg.isLoading) : userProfile}
        >
          {msg.content.text !== null &&
            msg.content.text.length > 0 &&
            msg.messageID !== chats[chats.length - 1].messageID && <div>{msg.content.text}</div>}
          {msg.content.text !== null &&
            msg.content.text.length > 0 &&
            msg.messageID === chats[chats.length - 1].messageID && (
              <Typed strings={[msg.content.text]} typeSpeed={30} showCursor={false} />
              // eslint-disable-next-line @typescript-eslint/indent
            )}

          {msg.content.images.length > 0 && (
            <div className="flex flex-row max-w-[60%] gap-2 flex-wrap mt-6  mobile:max-w-[70%] mobile:py-2 mobile:gap-0 dark:bg-darkChat">
              {msg.content.images.map((img) => (
                <Image
                  key={uuidv4()}
                  src={img}
                  alt="img"
                  className="w-[150px] h-[160px] laptop:w-[120px] laptop:h-[130px] mobile:w-[95px] mobile:h-[100px]"
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
