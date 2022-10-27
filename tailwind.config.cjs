/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
      colors:{
        gray:{
          200: "#E1E1E6",
          800: "#202024",
          900: "#121214",
        },

      }
    },
  },
  plugins: [],
}
