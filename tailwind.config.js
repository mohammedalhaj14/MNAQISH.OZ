/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: '#2D3E2F',
        clay: '#D97706',
      },
    },
  },
  plugins: [],
}