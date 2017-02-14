const path = require('path');

module.exports = [
  {
    test: /\.js$/,
    loader: 'babel',
    include: [path.resolve(__dirname, '../src')],
    exclude: [/joi-browser/],
    query: { cacheDirectory: true },
  },
  {
    test: /\.css$/,
    loaders: [
      'style?sourceMap',
      'css?sourceMap',
    ],
  },
  {
    test: /\.scss$/,
    loaders: [
      'style?sourceMap',
      'css?sourceMap',
      'sass?sourceMap',
    ],
    include: [path.resolve(__dirname, '../src')],
  },
  {
    test: /\.(png|jpg|jpeg|gif|woff|woff2|otf)$/,
    loader: 'url-loader',
    query: {
      name: '[path][name].[ext]?[hash]',
      limit: 10000,
    },
  },
  {
    test: /.svg$/,
    loader: 'spr-svg-loader!raw-loader',
  }
];
