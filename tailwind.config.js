/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      font: ['Nunito', 'sans-serif'],
      open: ['"Open Sans"', 'sans-serif'],
    },
    colors: {
      black: '#313131',
      blue: '#3B5998',
      darkgrey: '#333333',
      purple: '#492B7C',
      pink: '#E8D7F8',
      light: '#F9F4FD',
      white: '#FFFFFF',
      red: '#FF4D4F',
      deepred:'#FF0000',
      green: '#52C41A',
      grey: '#969599',
      gray: 'rgba(150, 149, 153, 0.5)',
      darkgray: '#847979',
      lightergrey: '#C1C1C1',
      lightgrey: '#D3D0D9',
      lightpink: '#F5F5F5',
      deepgreen: '#008000',
      verylightgrey: '#FCFBFE',
      teagreen: '#18B368',
      dark: '292D32',
    },
  },
  plugins: [],
}