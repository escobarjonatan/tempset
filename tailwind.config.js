const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "Arial", "sans-serif"],
        mono: ["Ethnocen", "Arial", "sans-serif"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      teal: {
        500: "#00fffd",
        600: "#00dcda",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
