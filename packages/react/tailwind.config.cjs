const { zinc, violet } = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "of-brand": violet,

        "of-base": {
          100: zinc[700],
          200: zinc[800],
          300: zinc[900],
          content: zinc[50],
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
