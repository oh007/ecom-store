/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#3B5D4F',
        ctaButton:'#FABA3F',
        prodButton:"#2E302F",
        
      },
    },
  },
  plugins: [],
}