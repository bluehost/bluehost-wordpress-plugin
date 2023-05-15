const yoastPreset = require("@yoast/tailwindcss-preset");
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [yoastPreset],
  content: [
    ...yoastPreset.content,
    "./node_modules/@newfold-labs/**/*.js",
    "./vendor/newfold-labs/**/*.js",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F15A2B",
          dark: "#E6410F",
          light: "#F47D59",
          lighter: "#FFDACE",
        },
        secondary: {
          DEFAULT: "#103E6C",
          dark: "#09233D",
          light: "#1B67B3",
          lighter: "#DAE8F8", 
        },
        title: "#0F172A",
        body: "#4A5567",
        link: "#2271B1",
        line: "#E2E8F0",
        white: "#FFFFFF",
        offWhite: "#F0F0F5",
        black: "#000000",
        canvas: "#F1F5F9",
      },
    },
  },
  plugins: [],
}

