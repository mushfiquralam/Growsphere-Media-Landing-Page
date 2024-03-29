/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandColor: '#1754B2', 
      },
      fontFamily: {
        brandFont: ['Montserrat'],
      },
    },
  },
  plugins: [],
}
