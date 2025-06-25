/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c605f5',
        secondary: 'rgb(37, 150, 190)',
        accent: 'rgba(251,210,196,255)',
        purple: 'rgba(149,20,251,255)',
        pink: 'rgba(181,71,183,255)',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}