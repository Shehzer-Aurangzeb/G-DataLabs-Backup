import React, { Fragment, memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Chat, TGroupedChatHistory } from '@/state/chats/types';
import Image from '@/components/UI/StyledImage';
import { chat } from '@/constants/assets';

interface IProps {
  groupedChatHistory: TGroupedChatHistory;
  openPreviousChats: (payload: Chat[]) => void;
}
function ChatHistory({ groupedChatHistory, openPreviousChats }: IProps) {
  return (
    <div className="mt-8 flex flex-col gap-y-4 flex-1">
      {Object.entries(groupedChatHistory).map(([key, value]) => (
        <Fragment key={uuidv4()}>
          <p className="text-primary font-raleway font-semibold text-lg mt-2">{key}</p>
          {value.map((msg) => (
            <button
              type="button"
              className="flex flex-row gap-x-4 px-3 py-4 bg-chat"
              key={uuidv4()}
              onClick={() => {
                openPreviousChats(msg.messages);
              }}
            >
              <Image src={chat} alt="chat-icon" className="w-[24px] h-[24px]" />
              <p className="text-primary font-raleway font-semibold text-lg">{msg.title}</p>
            </button>
          ))}
        </Fragment>
      ))}
    </div>
  );
}

export default memo(ChatHistory);
