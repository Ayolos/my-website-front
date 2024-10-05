/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'background': '#1C1B22',
        'background-light': '#28282D',
        'item': {
          '50': '#edfff7',
          '100': '#d5ffef',
          '200': '#aeffdf',
          '300': '#70ffc7',
          '400': '#2bfda8',
          '500': '#01ff99',
          '600': '#00c06e',
          '700': '#00965a',
          '800': '#06754a',
          '900': '#07603e',
          '950': '#003722',
        }
      },
      fontFamily: {
        'sans': ['JetBrains Mono', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

