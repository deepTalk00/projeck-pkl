/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'greentea' : '#319177'
      },
      blur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
