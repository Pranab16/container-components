const path = require('path');
const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      __iconPrefix__: '"icon"',
      'process.env.BROWSER': true,
    }),
  ],
  resolve: {
    alias: {
      joi: path.resolve(__dirname, '../node_modules/joi-browser'),
    },
  },
  module: {
    loaders: [require('../.build/webpack.loaders')],
  },
};
