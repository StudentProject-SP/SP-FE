import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      colors: {
        'soup-point': '#ffa600',
        'soup-sub': '#eae6dc',
        'soup-important': '#ff0000',
        'text-dark': '#3d382f',
        'text-light': '#9f9c95',
        'dash-board': '#ffffff',
        'main-board': '#fdfdfd',
        'share-like': '#f5f4f1',
        'dash-board-border': '#dad4cf',
        'notice-section': '#ffd993',
        'vote-section': '#f8f1e3',
        'free-section': '#ededed',
        'peer-review-section': '#f8f1e3',
        'planer-section': '#f1f0ee',
      },
    },
  },
  plugins: [],
};
export default config;
