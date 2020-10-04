import path from 'path';
import ESLintPlugin from 'eslint-webpack-plugin';

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';
const isDev = nodeEnv === 'development';
const mode = isDev ? 'development' : 'production';

const plugins = [
  new ESLintPlugin({
    extensions: ['.ts', 'tsx'],
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
};

const clientConfig: any = {
  ...config,
  name: 'client',
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
  name: 'server',
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
