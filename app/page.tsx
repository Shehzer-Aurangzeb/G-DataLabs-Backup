import React from 'react';
import Container from '@/components/UI/Containers';
import MessageWrapper from '@/components/screens/Home/MessageWrapper';
import { img1, img2, img3, img4 } from '@/temp';
import Image from '@/components/UI/StyledImage';
import PromptInputBox from '@/components/screens/Home/PromptInputBox';
import { groupMessagesByDate } from '@/lib';
import { THistory, TMessage } from '@/types';
import ChatHistory from '@/components/screens/Home/ChatHistory';

export default function Home() {
  const messages: TMessage[] = [
    {
      isBotResponse: false,
      messageID: '1',
      content: {
        text: 'What is 2+2?',
        images: [],
      },
    },
    {
      isBotResponse: true,
      messageID: '2',
      content: {
        text: 'The sum of 2+2 is 4',
        images: [img1, img2, img3, img4],
      },
    },
    {
      isBotResponse: false,
      messageID: '1',
      content: {
        text: 'What is 3+2?',
        images: [],
      },
    },
    {
      isBotResponse: true,
      messageID: '2',
      content: {
        text: 'The sum of 3+2 is 5',
        images: [img1, img2, img3, img4],
      },
    },
  ];
  const history: THistory[] = [
    {
      title: 'Search Text Heading Here',
      date: '08-11-2023',
      messages: [
        {
          isBotResponse: false,
          messageID: '1',
          content: {
            text: 'What is 2+2?',
            images: [],
          },
        },
        {
          isBotResponse: true,
          messageID: '2',
          content: {
            text: 'The sum of 2+2 is 4',
            images: [img1, img2, img3, img4],
          },
        },
      ],
    },
    {
      title: 'Search Text Heading Here',
      date: '08-06-2023',
      messages: [
        {
          isBotResponse: false,
          messageID: '1',
          content: {
            text: 'What is 2+2?',
            images: [],
          },
        },
        {
          isBotResponse: true,
          messageID: '2',
          content: {
            text: 'The sum of 2+2 is 4',
            images: [img1, img2, img3, img4],
          },
        },
      ],
    },
    {
      title: 'Search Text Heading Here',
      date: '08-04-2023',
      messages: [
        {
          isBotResponse: false,
          messageID: '1',
          content: {
            text: 'What is 2+2?',
            images: [],
          },
        },
        {
          isBotResponse: true,
          messageID: '2',
          content: {
            text: 'The sum of 2+2 is 4',
            images: [img1, img2, img3, img4],
          },
        },
      ],
    },
    {
      title: 'Search Text Heading Here',
      date: '08-01-2023',
      messages: [
        {
          isBotResponse: false,
          messageID: '1',
          content: {
            text: 'What is 2+2?',
            images: [],
          },
        },
        {
          isBotResponse: true,
          messageID: '2',
          content: {
            text: 'The sum of 2+2 is 4',
            images: [img1, img2, img3, img4],
          },
        },
      ],
    },
    {
      title: 'Search Text Heading Here',
      date: '07-28-2023',
      messages: [
        {
          isBotResponse: false,
          messageID: '1',
          content: {
            text: 'What is 2+2?',
            images: [],
          },
        },
        {
          isBotResponse: true,
          messageID: '2',
          content: {
            text: 'The sum of 2+2 is 4',
            images: [img1, img2, img3, img4],
          },
        },
      ],
    },
    {
      title: 'Search Text Heading Here',
      date: '06-18-2023',
      messages: [
        {
          isBotResponse: false,
          messageID: '1',
          content: {
            text: 'What is 2+2?',
            images: [],
          },
        },
        {
          isBotResponse: true,
          messageID: '2',
          content: {
            text: 'The sum of 2+2 is 4',
            images: [img1, img2, img3, img4],
          },
        },
      ],
    },
  ];

  const groupedChatHistory = groupMessagesByDate(history);
  return (
    <>
      <Container type="main">
        <div className="px-10 pt-10 pb-12 overflow-y-auto h-[calc(100%_-_150px)]">
          {messages.map((msg) => (
            <MessageWrapper key={msg.messageID} isBotResponse={msg.isBotResponse}>
              {msg.content.text.length > 0 && <p>{msg.content.text}</p>}
              {msg.content.images.length > 0 && (
                <div className="flex flex-row max-w-[60%] gap-2 flex-wrap mt-6">
                  {msg.content.images.map((img) => (
                    <Image src={img} alt="img" className="w-[170px] h-[170px] laptop:w-[140px] laptop:h-[140px]" />
                  ))}
                </div>
              )}
            </MessageWrapper>
          ))}
        </div>

        <PromptInputBox />
      </Container>
      <Container type="side" className="pr-3">
        <h3 className="font-sans text-xl text-primary font-bold px-7 pt-8">Recent Chat History</h3>
        <ChatHistory groupedChatHistory={groupedChatHistory} />
      </Container>
    </>
  );
}
