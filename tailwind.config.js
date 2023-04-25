/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'font': ['Satoshi-Medium', 'sans-serif'],
        'open': ['Millik', 'sans-serif'],
      },
    },
  
    colors: {
      redorange: '#F79934',
      offwhite: '#EEF6FF',
      blue: '#0550B3',
      black: '#344054',
      green: '#CEFFE2',
      light: '#EFF1F7',
      white: '#FFFFFF',
      yellow: '#FFFFB8',
      skyeblue:'#E6F0FF',
      pink: '#FFD6FF',
      peach: '#FFDBCC',
      dark: '0F0A00',
      darkblue:'#00132D',
      blu: '#004DB3',
      
    },
  },
  plugins: [],
}