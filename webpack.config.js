const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  context: __dirname,
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'readium-js-viewer.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    publicPath: '/dist',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'mustache-loader',
          },
          {
            loader: 'html-loader',
            options: {
              interpolate: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|ttf|woff|woff2|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]'
            }
          },
        ],
      },
    ],
  },
  externals: {
    libxmljs: 'void 0',
  },
  resolve: {
    alias: {
      i18nStrings$: path.resolve(__dirname, 'src/i18n/Strings.js'),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].css`,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
};
