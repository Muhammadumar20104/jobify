/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 'inter': ['Inter ', 'sans-serif'] }
    },
    screens: {
      'xs': '220px',
      'sm': '320px',
      '4sm': '400px',
      '5sm': '500px',
      'md': '768px',
      'xmd':'900px',
      'lg': '1024px',
      'slg': '1100px',
      'xlg': '1200px',
      'xll': '1300px',
      '2xl': '1440px',
    },
  },
  plugins: [],
}