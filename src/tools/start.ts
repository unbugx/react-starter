/* eslint-disable no-console */
// libs
import path from 'path';
import express, { Express } from 'express';
import proxy from 'express-http-proxy';
import webpack, { Compiler } from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config';
import runServer from './runServer';

// constants
import { PORT } from 'constants/index';

// const nodeEnv = process.env.NODE_ENV || 'development';
// const isDev = nodeEnv === 'development';

const [clientConfig] = webpackConfig;

const watchOptions = {
  aggregateTimeout: 200,
  poll: 1000,
};

let server: Express;

async function compilerPromise(compiler: Compiler, cb?: () => Promise<unknown>) {
  await new Promise((resolve) => {
    const handleBundleComplete = async () => {
      if (cb) {
        await cb();
      }
      resolve();
    };

    compiler.hooks.done.tap(compiler.name, handleBundleComplete);
  });
}

async function start() {
  if (server) return server;

  server = express();
  server.use(express.static(path.resolve(__dirname, 'public')));

  const multiCompiler = webpack(webpackConfig);

  const clientCompiler = multiCompiler.compilers.find((compiler) => compiler.name === 'client') as Compiler;
  const serverCompiler = multiCompiler.compilers.find((compiler) => compiler.name === 'server') as Compiler;

  const clientPromise = compilerPromise(clientCompiler);
  const serverPromise = compilerPromise(serverCompiler, runServer);

  server.use(
    webpackDevMiddleware(clientCompiler, {
      publicPath: clientConfig.output.publicPath,
      stats: clientConfig.stats,
    }),
  );

  serverCompiler.watch(watchOptions, (error, stats) => {
    if (error) {
      console.error('Compile error:', error);
      return;
    }

    console.log(stats.toString({
      chunks: false,
      colors: true,
    }));
  });

  await clientPromise;
  await serverPromise;

  server.use('*', (req: any, res: any, next: any) => {
    const requestedUrl = `${req.protocol}://${req.get('Host')}:${PORT}${req.url}`;
    proxy(requestedUrl)(req, res, next);
  });

  server.use(() => {
    console.log('handle error here');
  });

  server.listen(PORT + 1, () => {
    console.log(`The server is running at http://localhost:${PORT + 1}/`);
  });
}

start();
