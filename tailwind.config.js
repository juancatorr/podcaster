/** @type {import('tailwindcss').Config} */


const colors = require('./src/utils/colors')


export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
}

