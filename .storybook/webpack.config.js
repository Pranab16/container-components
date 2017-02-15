const path = require('path');
const webpack = require('webpack');
const I18nPlugin = require('i18n-webpack-plugin');

const languages = require('../languages');

module.exports = Object.keys(languages).map(language => ({
  name: language,
  plugins: [
    new I18nPlugin(languages[language]),
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
}));
