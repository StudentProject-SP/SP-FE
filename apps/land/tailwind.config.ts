import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
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
      },
    },
  },
  plugins: [],
};
export default config;
