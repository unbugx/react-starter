const webpackPreprocessor = require('@cypress/webpack-preprocessor');

module.exports = (on) => {
  // eslint-disable-next-line global-require
  const config = require('../../src/tools/webpack.config').default[0];
  const options = {
    webpackOptions: {
      ...config,
      optimization: {
        runtimeChunk: undefined,
        splitChunks: undefined,
      },
      plugins: [],
    },
    watchOptions: {},
  };

  on('file:preprocessor', webpackPreprocessor(options));
};
