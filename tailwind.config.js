/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        squid: ['Game Of Squids', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
