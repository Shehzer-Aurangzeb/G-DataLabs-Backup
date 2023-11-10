import React from 'react';
import IconButton from '@/components/UI/IconButton';
import { dislike, like } from '@/constants/assets';

type TProps = {
  show: boolean;
  messageId: number;
  choice: boolean | null | undefined;
  giveFeedback: (payload: { responseId: number; feedback: boolean }) => Promise<void>;
};

function FeedbackAction({ show, choice, messageId, giveFeedback }: TProps) {
  return (
    <div
      className={`flex gap-x-4 items-center transition duration-400 absolute top-[26px] right-5 ${
        show ? 'translate-y-0 opacity-1' : '-translate-y-20 opacity-0'
      }`}
    >
      <IconButton
        src={like}
        className="relative h-[20px] w-[20px] mobile:w-[15px] mobile:h-[15px] dark:invert-[1]"
        onClick={() => {
          if (choice) return;
          giveFeedback({ responseId: messageId, feedback: true });
        }}
      />
      <IconButton
        src={dislike}
        className="relative h-[20px] w-[20px] mobile:w-[15px] mobile:h-[15px] dark:filter-invert(1) dark:invert-[1]"
        onClick={() => {
          if (!choice) return;
          giveFeedback({ responseId: messageId, feedback: false });
        }}
      />
    </div>
  );
}

export default FeedbackAction;
