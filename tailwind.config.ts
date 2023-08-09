import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {},
      backgroundImage: {},
      textColor: {},
      borderColor: {},
      fontFamily: {
        sans: ['var(--font-plus-jakarta)'],
        space: ['var(--font-space-grotesk)'],
        chivo: ['var(--font-chivo)'],
      },
      fontSize: {},
      boxShadow: {},
      borderRadius: {},
    },
    screens: {
      mobile: { max: '640px' },
      // => @media (max-width: 640px) { ... }

      tablet: { min: '640px', max: '1024px' },
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1500px',
      // => @media (min-width: 1280px) { ... }
    },
  },

  plugins: [],
};
export default config;
