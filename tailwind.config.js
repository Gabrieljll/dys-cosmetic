/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", ],
  theme: {


    extend: {

      fontFamily: {
        "principal": ['"Be Vietnam Pro"', 'sans-serif']
      },

      colors: {
        "bright-red": "hsl(12, 88%, 59%)",
        "dark-blue": "hsl(228, 39%, 23%)",
        "dark-grayish-blue": "hsl(227, 12%, 61%)",
        "very-dark-blue": "hsl(233, 12%, 13%)",
        "very-pale-red": "hsl(13, 100%, 96%)",
        "vary-light-gray": "hsl(0, 0%, 98%)",
      },

      backgroundImage: {
        "close-menu": "url('../../public/images/icon-close.svg')",
        "open-menu": "url('../../public/images/2190974_circle_hamburger_list_menu_navigation_icon.svg')"
      }

    },
  },
  plugins: [],
}