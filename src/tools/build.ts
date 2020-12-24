/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from './webpack.config';

function build() {
  return new Promise<void>((resolve, reject) => {
    webpack(webpackConfig).run((error, stats) => {
      if (error) {
        return reject(error);
      }

      if (stats) {
        console.log(stats.toString({
          chunks: false,
          colors: true,
        }));
      }

      return resolve();
    });
  });
}

build();
