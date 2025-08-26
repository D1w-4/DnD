const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    entry: path.resolve(__dirname, 'src', 'main.tsx'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProd ? 'assets/[name].[contenthash].js' : 'assets/[name].js',
      chunkFilename: isProd ? 'assets/[name].[contenthash].js' : 'assets/[name].js',
      clean: true,
      publicPath: '/',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: { sourceMap: !isProd },
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: !isProd },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
    ],
    devServer: {

      historyApiFallback: true,
      compress: true,
      port: 8080,
      open: false,
      hot: true,
    },
    optimization: {
      splitChunks: { chunks: 'all' },
      runtimeChunk: 'single',
    },
    performance: {
      hints: false,
    },
  };
};
