module.exports = {
  plugins: [
    require('postcss-omit-import-tilde'),
    require('postcss-import'),
    require('postcss-partial-import'),
    require('precss'),
    require('autoprefixer'),
    require('postcss-nested'),
    require('postcss-nesting'),
  ]
};
