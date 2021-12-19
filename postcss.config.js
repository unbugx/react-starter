/* eslint-disable global-require, @typescript-eslint/no-var-requires */

module.exports = (options) => ({
  plugins: [
    require('postcss-omit-import-tilde'),
    require('postcss-import'),
    require('postcss-partial-import'),
    require('precss'),
    require('autoprefixer'),
    require('postcss-nested'),
    require('postcss-nesting'),
    options.mode === 'production'
      ? require('cssnano')({
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
              svgo: false,
            },
          ],
        })
      : false,
  ],
})
