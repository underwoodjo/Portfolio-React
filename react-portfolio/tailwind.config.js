/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          900: '#064E3B'
        },
        stone: {
          50: '#FAFAF9'
        }
       
      },
      screens: {
        'xs': '300px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
}

