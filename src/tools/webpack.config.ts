import path from 'path';
// import webpack, { Configuration } from 'webpack';
// import nodeExternals from 'webpack-node-externals';
// import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
// import HtmlWebpackPlugin from 'html-webpack-plugin';

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';
const isDev = nodeEnv === 'development';
const mode = isDev ? 'development' : 'production';
// const isVerbose = false;

const plugins = [
  new ForkTsCheckerWebpackPlugin({
    typescript: {
      configFile: path.resolve(__dirname, '../../tsconfig.json'),
    },
  }),
];

const config: any = {
  context: path.resolve(__dirname, '../../src'),
  resolve: {
    modules: [path.resolve(__dirname, '../../src'), 'node_modules'],
    extensions: ['.js', '.ts', '.tsx', '.css'],
    alias: {},
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /global\.css$/,
            use: ['isomorphic-style-loader', 'postcss-loader'],
          },
          {
            test: /\.css$/,
            include: [path.resolve(__dirname, '../../src')],
            use: [
              'isomorphic-style-loader',
              {
                loader: 'css-loader',
                options: {
                  url: true,
                  importLoaders: 2,
                  esModule: false,
                  modules: {
                    mode: 'local',
                    localIdentName: isDev ? '[name]-[local]-[hash:base64:5]' : '[hash:base64:5]',
                  },
                },
              },
              'postcss-loader',
            ],
          },
        ],
      },
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        include: [path.resolve(__dirname, '../../src')],
        use: [
          {
            loader: 'tslint-loader',
            options: {
              configFile: path.resolve(__dirname, '../../tslint.json'),
              tsConfigFile: path.resolve(__dirname, '../../tsconfig.json'),
              failOnHint: false,
              emitErrors: true,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, '../../src')],
        use: [
          'cache-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              configFile: path.resolve(__dirname, '../../tsconfig.json'),
            },
          },
        ],
      },
    ],
  },
  mode,
  stats: {
    colors: true,
    // reasons: isDev,
    // hash: isVerbose,
    // version: isVerbose,
    // timings: true,
    // chunks: isVerbose,
    // chunkModules: isVerbose,
    // cached: isVerbose,
    // cachedAssets: isVerbose,
  },
};

const clientConfig: any = {
  ...config,
  devtool: !isProduction ? '#source-map' : false,
  entry: {
    client: path.resolve(__dirname, '../../src/client.ts'),
  },
  output: {
    path: path.resolve(__dirname, '../../build/public'),
    publicPath: '/',
    filename: '[name].bundle.js',
  },
  plugins: [...plugins],
};

const serverConfig = {
  ...config,
  devtool: !isProduction ? 'cheap-module-source-map' : false,
  entry: {
    server: path.resolve(__dirname, '../../src/server.ts'),
  },
  output: {
    path: path.resolve(__dirname, '../../build'),
    publicPath: '/',
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  plugins: [...plugins],
  target: 'node',
  externals: [
    'express',
    // /^\.\/inlinedRuntime\.html$/,
  ],
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
};

export default [clientConfig, serverConfig];
