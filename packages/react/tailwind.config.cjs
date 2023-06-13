const { violet, zinc } = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: violet,

        base: {
          100: zinc[700],
          200: zinc[800],
          300: zinc[900],
          content: zinc[50],
        },
      },
    },
  },
  plugins: [],
  presets: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
