/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*tsx",
    "./index.html"
  ],
  theme: {
    extend: {
      colors:{
        white:{
          200: "#E1E1E6"
        },
        gray:{
          900: "#121214",
          800: "#202024"
        },
        indigo:{
          500: "#6366F1"
        }

      }
    },
  },
  plugins: [],
}
