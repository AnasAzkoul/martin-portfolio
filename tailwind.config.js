/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F9F7F6',
        secondary: '#014656',
        secondaryLight: '#00A2AD',
        mustard: '#FDD65D',
        orange: '#F6A801',
      },
      fontSize: {
        main_logo: 'clamp(1.6rem, 2vw, 2rem)', 
        
      }
    },
  },
  plugins: [],
};
