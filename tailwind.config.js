/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "koh-santheap": ['Koh Santepheap'],
        "inter": ['Inter']
      },
      colors: {
        nav: {
          100: '#0A0A3C'
        },
        "custom-gray": {
          100: '#D9D9D9'
        },
      }
    },
  },
  plugins: [],
}

