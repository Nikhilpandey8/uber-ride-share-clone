/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff"
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"]
      }
    },
  },
  plugins: [],
}
