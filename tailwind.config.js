/** @type {import('tailwindcss').Config} */


const colors = require('./src/utils/colors')
const fontFamily = require('./src/utils/typography')
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors,
      fontFamily,
    },
  },
  plugins: [],
}

