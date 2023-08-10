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
      },
      backgroundImage: {},
      textColor: {
        main: '#e4e4e4',
        active: '#e4e4e3',
        inactive: '#e1e1e1',
      },

      borderColor: {},
      fontFamily: {
        sans: ['var(--font-dm-sans)'],
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
      // => @media (max-width: 767px) { ... }
      laptop: { max: '1280px' },

      desktop: '767px',
      // => @media (min-width: 1280px) { ... }
    },
  },

  plugins: [],
};
export default config;
