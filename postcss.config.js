module.exports = {
    plugins: [
      require("postcss-import"),
      require("tailwindcss/nesting"),
      require("tailwindcss"),
      ...require("@wordpress/postcss-plugins-preset"),
    ],
  };