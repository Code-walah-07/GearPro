/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svg}",
  ],
  theme: {
    extend: {
      colors: {
      electricBlue: '#1E90FF',
      charcoalBlack: '#2E2E2E',
      limeGreen: '#32CD32',
      brightOrange: '#FF8C00',
      coolGray: '#E6E6E6',
      darkNavy: '#1B1F3B',
    },},
  },
  plugins: [],
}

