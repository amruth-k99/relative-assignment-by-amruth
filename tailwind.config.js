/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        primary: {
          bg: "#14172B",
          gradient: "linear-gradient(90deg, #626A88 10%, #2E3149 10%)",
          text: "#ECF0FF",
          "text-dark": "#737BAE",
          "text-dark-2": "#5A5F7D",
          green: "#00FFA3",
          border: "#2E3149",
          red: "#FF4D4D",
        },
      },
    },
  },
  plugins: [],
};
