import webpack from 'webpack';
import webpackConfig from './webpack.config';

function build() {
  return new Promise((resolve, reject) => {
    webpack(webpackConfig).run((error, stats) => {
      if (error) {
        return reject(error);
      }

      // eslint-disable-next-line no-console
      console.log(stats.toString({
        chunks: false,
        colors: true,
      }));

      return resolve();
    });
  });
}

build();
