const yoastPreset = require("@yoast/tailwindcss-preset");
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [yoastPreset],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#d1e1f8",
          100: "#d1e1f8",
          200: "#a3c4f2",
          300: "#4789e5",
          400: "#196bde",
          500: "#196bde",
          600: "#1456b2",
          700: "#1456b2",
          800: "#0a2b59",
          900: "#0a2b59",
        },
      },
    },
  },
  content: [
    ...yoastPreset.content,
    "./node_modules/@newfold-labs/**/**/*.js",
    "./vendor/newfold-labs/**/**/*.js",
    "./src/**/*.js",
  ],
};
