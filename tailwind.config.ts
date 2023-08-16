import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',

  theme: {
    extend: {
      backgroundColor: {
        main: '#333',
        active: '#e4e4e31a',
        yellow: '#FBE576',
        gray: '#454545',
        dark: '#1C1C1C',
        light: '#e4e4e3',
        chat: '#D9D9D9',
      },
      backgroundImage: {
        chatBg: 'linear-gradient(180deg,rgba(53,55,64,0),#d9d9d9 58.85%)',
      },
      textColor: {
        main: '#e4e4e4',
        active: '#e4e4e3',
        inactive: '#e1e1e1',
        primary: '#333',
      },

      borderColor: {
        main: '#333',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)'],
        raleway: ['var(--font-raleway)'],
      },
      dropShadow: {
        container: '0px 4px 25px rgba(0, 0, 0, 0.25)',
      },
      fontSize: {},
      boxShadow: {},
      borderRadius: {
        xl: '10px',
      },
      maxWidth: {
        sidebarItem: '297px',
      },
    },
    screens: {
      mobile: { max: '767px' },
      tablet: { max: '1280px' },
      laptop: { max: '1499px' },
    },
  },

  plugins: [],
};
export default config;
