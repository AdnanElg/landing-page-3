module.exports = {
  parser: "postcss-scss",
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("cssnano"),
  ],
};
