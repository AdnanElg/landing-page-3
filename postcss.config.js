module.exports = {
  parser: "postcss-scss",
  plugins: [
    require("postcss-import"),
    require("postcss-nested"),
    require("tailwindcss"),
    require("autoprefixer"),
    require("cssnano"),
  ],
};
