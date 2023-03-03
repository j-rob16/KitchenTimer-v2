/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#77d04f',
        yellow: '#ffd966',
        red: '#e52e2e',
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans"]
      }
    },
  },
  plugins: [],
}