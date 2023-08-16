'use client';

import React, { useRef, useState } from 'react';
import Image from 'components/UI/StyledImage';
import { send } from '@/constants/assets';
import { useAutosizeTextArea } from '@/hooks/useAutoSizeTextArea';
import PromptResponseTypes from '@/components/screens/Home/PromptResponseTypes';
import { PROMPTRESPONSEOPTIONS } from '@/constants';
import { TPROPTION } from '@/types';

function PromptInputBox() {
  const [prompt, setPrompt] = useState('');
  const [selectedResponseType, setSelectedResponseType] = useState(PROMPTRESPONSEOPTIONS[0]);

  const handleResponseTypeChange = (responseType: TPROPTION) => {
    setSelectedResponseType(responseType);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useAutosizeTextArea(textAreaRef.current, prompt);
  return (
    <div className="w-full flex flex-col absolute bottom-0 left-0 px-10 bg-chatBg pb-10">
      <div className="flex items-center w-full pl-4 py-4 bg-chat border-main border rounded-xl relative textarea-container">
        <textarea
          className="resize-none w-full bg-transparent overflow-hidden focus:outline-none pr-12 max-h-[200px] overflow-y-auto h-[24px]"
          value={prompt}
          ref={textAreaRef}
          name="prompt"
          onChange={handleInputChange}
        />
        <button
          type="button"
          className="absolute bottom-1 right-5 bg-transparent focus:shadow-none focus:outline-none "
        >
          <Image src={send} alt="send-icon" className="w-[40px] h-[40px]" />
        </button>
      </div>
      <PromptResponseTypes
        selectedResponseType={selectedResponseType}
        setSelectedResponseType={handleResponseTypeChange}
      />
    </div>
  );
}
export default PromptInputBox;
