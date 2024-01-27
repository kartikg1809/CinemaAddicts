/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.{js,jsx,ts,tsx}', // Include your JS/JSX files
  './public/index.html', // Include your HTML file
];
export const theme = {
  extend: {
    fontFamily: {
      mukta: ['Mukta', 'sans-serif'],
      'nunito-sans': ['Nunito Sans', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    spacing: {
      '5px': '5px',
    }
  },
};
export const plugins = [];

