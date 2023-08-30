import React from 'react';
import Image from '@/components/UI/StyledImage';
import { myGData as logo } from '@/constants/assets';
import { profile } from '@/temp';
import Loader from '@/components/screens/Home/MainContent/ActiveChat/Loader';

interface IProps {
  isBotResponse?: boolean;
  children: React.ReactNode;
  isLoading?: boolean;
}
function Chat({ isBotResponse = false, isLoading = false, children }: IProps) {
  return (
    <div className="bg-chat flex flex-row gap-x-8 items-center justify-start py-5 px-8 font-raleway text-primary text-xl font-semibold mb-4 mobile:px-2 mobile:text-base">
      <Image src={isBotResponse ? logo : profile} alt="profile" className="w-12 h-12 self-start min-w-[3rem]" rounded />
      <div>
        {isLoading && <Loader />}
        {children}
      </div>
    </div>
  );
}

export default Chat;
