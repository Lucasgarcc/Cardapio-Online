/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'Poppins': ['Poppins', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        "home": "url('../img/bg.jpeg')",
      }
    },
  },
  plugins: [],
}

