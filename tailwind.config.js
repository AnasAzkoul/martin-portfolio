/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#EFE9E7',
        secondary: '#017482',
        secondaryLight: '#00A2AD',
        mustard: '#FDD65D',
        orange: '#F6A801',
      },
      fontSize: {
        main_heading: 'clamp(4rem, 2.5vw, 3.5rem)',
        main_hello: 'clamp(4.8rem, 3vw, 3.7rem)',
        main_logo: 'clamp(1.8rem, 2vw, 2rem)',
      },
      keyframes: {
        fadeFromLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeFromLeft: 'fadeFromLeft 2s ease-in-out',
      },
    },
  },
  plugins: [],
};
