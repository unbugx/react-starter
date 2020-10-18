import path from 'path';
import ESLintPlugin from 'eslint-webpack-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const isDev = !process.argv.includes('--release');
const mode = isDev ? 'development' : 'production';

const plugins = [
  isDev
    ? new ESLintPlugin({
      extensions: ['.ts', 'tsx'],
    })
    : null,
].filter(Boolean);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const config: any = (name: 'client' | 'server') => ({
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
              // !isDev && name === 'client' ? MiniCssExtractPlugin.loader : null,
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
            ].filter(Boolean),
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, '../../src')],
        use: [
          'cache-loader',
          'babel-loader',
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
    timings: true,
    // chunks: isVerbose,
    // chunkModules: isVerbose,
    // cached: isVerbose,
    // cachedAssets: isVerbose,
  },
});

const clientConfig: any = {
  ...config('client'),
  name: 'client',
  devtool: isDev ? '#source-map' : false,
  entry: {
    client: ['@babel/polyfill', path.resolve(__dirname, '../../src/client.ts')],
  },
  output: {
    path: path.resolve(__dirname, '../../build/public'),
    publicPath: '/',
    filename: '[name].bundle.js',
  },
  plugins: [
    ...plugins,
    isDev
      ? new webpack.HotModuleReplacementPlugin()
      : null,
    new webpack.DefinePlugin({
      'process.env.BROWSER': true,
    }),
    // !isDev
    //   ? new MiniCssExtractPlugin({
    //     filename: '[name].css',
    //   })
    //   : null,
    process.argv.includes('--stats')
      ? new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerHost: '127.0.0.1',
        analyzerPort: 12345,
        logLevel: 'info',
      })
      : null,
  ].filter(Boolean),
};

const serverConfig = {
  ...config('server'),
  name: 'server',
  devtool: isDev ? 'cheap-module-source-map' : false,
  entry: {
    server: ['@babel/polyfill', path.resolve(__dirname, '../../src/server.ts')],
  },
  output: {
    path: path.resolve(__dirname, '../../build'),
    publicPath: '/',
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  plugins: [
    ...plugins,
    new webpack.DefinePlugin({
      'process.env.BROWSER': false,
    }),
  ],
  target: 'node',
  externals: [
    'express',
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
