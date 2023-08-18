import img1 from '@/temp/assets/reply__image_1.png';
import img2 from '@/temp/assets/reply__image_2.png';
import img3 from '@/temp/assets/reply__image_3.png';
import img4 from '@/temp/assets/reply__image_4.png';
import profile from '@/public/assets/images/profile.jpeg';

import { TMessage, THistory } from '@/types';

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
const consentData = [
  {
    PDataAndWeb: 'Text Here',
    Definition: 'Text Here',
    Companies: 'Text Here',
    Use: 'Text Here',
    Consent: 'false',
  },
  {
    PDataAndWeb: 'Text Here',
    Definition: 'Text Here',
    Companies: 'Text Here',
    Use: 'Text Here',
    Consent: 'true',
  },
  {
    PDataAndWeb: 'Text Here',
    Definition: 'Text Here',
    Companies: 'Text Here',
    Use: 'Text Here',
    Consent: 'false',
  },
  {
    PDataAndWeb: 'Text Here',
    Definition: 'Text Here',
    Companies: 'Text Here',
    Use: 'Text Here',
    Consent: 'false',
  },
  {
    PDataAndWeb: 'Text Here',
    Definition: 'Text Here',
    Companies: 'Text Here',
    Use: 'Text Here',
    Consent: 'true',
  },
  {
    PDataAndWeb: 'Text Here',
    Definition: 'Text Here',
    Companies: 'Text Here',
    Use: 'Text Here',
    Consent: 'false',
  },
  {
    PDataAndWeb: 'Text Here',
    Definition: 'Text Here',
    Companies: 'Text Here',
    Use: 'Text Here',
    Consent: 'true',
  },
  {
    PDataAndWeb: 'Text Here',
    Definition: 'Text Here',
    Companies: 'Text Here',
    Use: 'Text Here',
    Consent: 'false',
  },
  {
    PDataAndWeb: 'Text Here',
    Definition: 'Text Here',
    Companies: 'Text Here',
    Use: 'Text Here',
    Consent: 'true',
  },
];
const rewardsData = [
  {
    PDataAndScreen: 'Text Here',
    Consent: 'false',
    PDefinedValue: 2.5,
    OtherCompValue: 2.5,
  },
  {
    PDataAndScreen: 'Text Here',
    Consent: 'true',
    PDefinedValue: 2.5,
    OtherCompValue: 2.5,
  },
  {
    PDataAndScreen: 'Text Here',
    Consent: 'false',
    PDefinedValue: 2.5,
    OtherCompValue: 2.5,
  },
  {
    PDataAndScreen: 'Text Here',
    Consent: 'false',
    PDefinedValue: 2.5,
    OtherCompValue: 2.5,
  },
  {
    PDataAndScreen: 'Text Here',
    Consent: 'true',
    PDefinedValue: 2.5,
    OtherCompValue: 2.5,
  },
  {
    PDataAndScreen: 'Text Here',
    Consent: 'false',
    PDefinedValue: 2.5,
    OtherCompValue: 2.5,
  },
  {
    PDataAndScreen: 'Text Here',
    Consent: 'true',
    PDefinedValue: 2.5,
    OtherCompValue: 2.5,
  },
  {
    PDataAndScreen: 'Text Here',
    Consent: 'false',
    PDefinedValue: 2.5,
    OtherCompValue: 2.5,
  },
  {
    PDataAndScreen: 'Text Here',
    Consent: 'true',
    PDefinedValue: 2.5,
    OtherCompValue: 2.5,
  },
];
const personalData = [
  {
    date: '08-18-2023',
    highTemp: 53,
    lowTemp: 35,
    weatherType: 'sunny',
    emotions: ['sad', 'heavy', 'anxious'],
    emotionOverall: 'Down',
    relFinanceStatus: 'Neutral',
    exerciseTime: 1.5,
  },
  {
    date: '08-18-2023',
    highTemp: 53,
    lowTemp: 35,
    weatherType: 'sunny',
    emotions: ['sad', 'heavy', 'anxious'],
    emotionOverall: 'Down',
    relFinanceStatus: 'Neutral',
    exerciseTime: 1.5,
  },
  {
    date: '08-18-2023',
    highTemp: 53,
    lowTemp: 35,
    weatherType: 'sunny',
    emotions: ['sad', 'heavy', 'anxious'],
    emotionOverall: 'Down',
    relFinanceStatus: 'Neutral',
    exerciseTime: 1.5,
  },
  {
    date: '08-18-2023',
    highTemp: 53,
    lowTemp: 35,
    weatherType: 'sunny',
    emotions: ['sad', 'heavy', 'anxious'],
    emotionOverall: 'Down',
    relFinanceStatus: 'Neutral',
    exerciseTime: 1.5,
  },
  {
    date: '08-18-2023',
    highTemp: 53,
    lowTemp: 35,
    weatherType: 'sunny',
    emotions: ['sad', 'heavy', 'anxious'],
    emotionOverall: 'Down',
    relFinanceStatus: 'Neutral',
    exerciseTime: 1.5,
  },
];
export { messages, history, profile, consentData, rewardsData, personalData };
