import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import WriteFilePlugin from 'write-file-webpack-plugin';
import webpackConfig from './webpack.config';
import runServer from './runServer';

const nodeEnv = process.env.NODE_ENV || 'development';
const isDev = nodeEnv === 'development';

const [clientConfig] = webpackConfig;

async function start() {
  await new Promise((resolve) => {
    // Save the server-side bundle on after compilation
    // https://github.com/webpack/webpack-dev-server/issues/62
    webpackConfig.find(x => x.target === 'node').plugins.push(new WriteFilePlugin({ log: false }));

    // Hot Module Replacement (HMR) + React Hot Reload
    if (isDev) {
      // tslint:disable-next-line:max-line-length
      // clientConfig.entry.client = ['react-hot-loader/patch', 'webpack-hot-middleware/client'].concat(clientConfig.entry.client);
      // config.output.filename = config.output.filename.replace('[chunkhash', '[hash')
      // config.output.chunkFilename = config.output.chunkFilename.replace('[chunkhash', '[hash')

      // config.plugins.push(new webpack.HotModuleReplacementPlugin())
      // config.plugins.push(new webpack.NoEmitOnErrorsPlugin())
    }

    const compiler = webpack(webpackConfig);

    /*compiler.run((err, stats) => { // Stats Object
      if (err) {
        console.error(err);
        return;
      }

      console.log(stats.toString({
        chunks: false,  // Makes the build much quieter
        colors: true,    // Shows colors in the console
      }));
    });*/

    webpackDevMiddleware(compiler, {
      // IMPORTANT: webpack middleware can't access config,
      // so we should provide publicPath by ourselves
      publicPath: clientConfig.output.publicPath,

      // Pretty colored output
      stats: clientConfig.stats,
      // stats: 'normal',

      // Write extra assets to disk
      writeToDisk: filePath => /inlinedRuntime|client/.test(filePath),

      // For other settings see
      // https://webpack.github.io/docs/webpack-dev-middleware
    });

    const handleBundleComplete = async (stats: any, a: any) => {
      await runServer();
      resolve();
    };

    compiler.hooks.done.tap('doneTapPlugin', handleBundleComplete);
  });
}

start();
