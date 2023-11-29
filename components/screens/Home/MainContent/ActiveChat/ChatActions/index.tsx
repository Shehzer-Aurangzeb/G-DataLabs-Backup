import React, { useEffect, useState } from 'react';
import IconButton from '@/components/UI/IconButton';
import { copy, like_outlined, check, like_filled } from '@/public/assets';

type TProps = {
  show: boolean;
  messageId: number;
  choice: string | null | undefined;
  giveFeedback: (payload: { responseId: number; feedback: boolean }) => Promise<void>;
  messageContent: string;
};

function ChatActions({ show, choice, messageId, giveFeedback, messageContent }: TProps) {
  const [messageCopied, setMessageCopied] = useState(false);
  useEffect(() => {
    if (!messageCopied) return;
    const timer = setTimeout(() => {
      setMessageCopied(false);
    }, 2000);

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(timer);
  }, [messageCopied]);
  return (
    <div
      className={`flex gap-x-4 items-center transition duration-400 absolute top-[26px] right-5 ${
        show ? 'translate-y-0 opacity-1' : '-translate-y-20 opacity-0'
      }`}
    >
      <IconButton
        src={choice === null || choice === undefined || choice === 'false' ? like_outlined : like_filled}
        className="relative h-[20px] w-[20px] mobile:w-[15px] mobile:h-[15px] dark:invert-[1]"
        disabled={choice === 'true'}
        onClick={() => {
          if (choice === 'true') return;
          giveFeedback({ responseId: messageId, feedback: true });
        }}
      />
      <IconButton
        src={choice === null || choice === undefined || choice === 'true' ? like_outlined : like_filled}
        className="relative h-[20px] w-[20px] mobile:w-[15px] mobile:h-[15px] dark:filter-invert(1) dark:invert-[1] rotate-180 "
        disabled={choice === 'false'}
        onClick={() => {
          if (choice === 'false') return;
          giveFeedback({ responseId: messageId, feedback: false });
        }}
      />
      <IconButton
        src={messageCopied ? check : copy}
        className="relative h-[20px] w-[20px] mobile:w-[15px] mobile:h-[15px] dark:invert-[1]"
        disabled={messageCopied}
        onClick={() => {
          navigator.clipboard.writeText(messageContent);
          setMessageCopied(true);
        }}
      />
    </div>
  );
}

export default ChatActions;
