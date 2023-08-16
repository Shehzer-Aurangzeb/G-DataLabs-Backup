import React from 'react';
import Image from '@/components/UI/StyledImage';
import { profile, myGData as logo } from '@/constants/assets';

interface IProps {
  isBotResponse?: boolean;
  children: React.ReactNode;
}
function MessageWrapper({ isBotResponse = false, children }: IProps) {
  return (
    <div className="bg-chat flex flex-row gap-x-8 items-center justify-start py-5 px-8 font-raleway text-primary text-xl font-semibold mb-4">
      <Image src={isBotResponse ? logo : profile} alt="profile" className="w-12 h-12 self-start" rounded />
      <div>{children}</div>
    </div>
  );
}

export default MessageWrapper;
