/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // colors: {
      //   darkBackground: '#1a202c',
      //   darkText: '#cbd5e0',
      // },
      fontFamily: { 'inter': ['Inter ', 'sans-serif'] }
    },
    screens: {
      'xs': '220px',
      'sm': '320px',
      '4sm': '400px',
      '5sm': '500px',
      '6sm': '600px',
      'md': '768px',
      'xmd':'900px',
      'lg': '1024px',
      'slg': '1100px',
      'xlg': '1200px',
      'xll': '1300px',
      '2xl': '1440px',
    },
    keyframes:{
      'Tup':{
        '0% , 100%':{transform:'translateY(10px)'},
        '50%':{transform:'translateX(0)'},
      },
      'Tright':{
        '0% , 100%':{transform:'translateX(10px)'},
        '50%':{transform:'translateX(0)'},
      }
    },
    animation:{
      'Tup':'Tup 4.5s ease-in-out infinite',
      'Tright':'Tright 4.5s ease-in-out infinite '
    }

  },
  plugins: [],
}