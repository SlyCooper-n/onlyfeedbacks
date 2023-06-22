const { sky, zinc } = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@onlys/feedbacks/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "of-brand": sky,

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
