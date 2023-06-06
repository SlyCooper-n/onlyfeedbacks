const { violet } = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: violet,
      },
    },
  },
  plugins: [],
  presets: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
