/** @type {import('tailwindcss').Config} */
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
       
      }
    },
  },
  plugins: [],
}

