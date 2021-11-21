import path from 'path';
import ESLintPlugin from 'eslint-webpack-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import AssetsPlugin from 'assets-webpack-plugin';

const isDev = !process.argv.includes('--release');
const mode = isDev ? 'development' : 'production';

const plugins = [
  isDev
    ? new ESLintPlugin({
      extensions: ['.ts', 'tsx'],
    })
    : null,
].filter(Boolean);

const config: any = () => ({
  context: path.resolve(__dirname, '../../src'),
  resolve: {
    modules: [path.resolve(__dirname, '../../src'), 'node_modules'],
    extensions: ['.js', '.ts', '.tsx', '.css'],
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
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
            include: [
              path.resolve(__dirname, '../../src'),
              path.resolve(__dirname, '../../cypress'),
            ],
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
        include: [
          path.resolve(__dirname, '../../src'),
          path.resolve(__dirname, '../../cypress'),
        ],
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
    timings: true,
  },
});

const clientConfig: any = {
  ...config('client'),
  name: 'client',
  devtool: isDev ? 'source-map' : false,
  entry: {
    client: ['@babel/polyfill', path.resolve(__dirname, '../../src/client.ts')],
  },
  output: {
    path: path.resolve(__dirname, '../../build/public'),
    publicPath: 'assets',
    filename: '[name].[hash:8].bundle.js',
  },
  plugins: [
    ...plugins,
    isDev
      ? new webpack.HotModuleReplacementPlugin()
      : null,
    new webpack.DefinePlugin({
      'process.env.BROWSER': true,
    }),
    process.argv.includes('--stats')
      ? new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerHost: '127.0.0.1',
        analyzerPort: 12345,
        logLevel: 'info',
      })
      : null,
    new AssetsPlugin({
      path: path.resolve(__dirname, '../../build'),
      filename: 'assets.js',
      entrypoints: true,
      processOutput: (assets) => `module.exports = ${JSON.stringify(assets, null, 2)};`,
    }),
  ].filter(Boolean),
  optimization: {
    runtimeChunk: 'single',
    moduleIds: 'deterministic',
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 400000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'all',
          enforce: true,
        },
        common: {
          minChunks: 2,
          priority: -20,
          maxInitialRequests: 70,
          maxAsyncRequests: 70,
          reuseExistingChunk: true,
          chunks: 'all',
        },
      },
    },
  },
};

const serverConfig = {
  ...config('server'),
  name: 'server',
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
    /^\.\/assets$/,
  ],
  node: {
    global: false,
    __filename: false,
    __dirname: false,
  },
};

export default [clientConfig, serverConfig];
