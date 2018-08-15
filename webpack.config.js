const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  context: __dirname,
  devtool: 'source-map',
  entry: './src/js/index.js',
  output: {
    filename: 'readium-js-viewer.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'mustache-loader',
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
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
