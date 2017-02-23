const path = require('path');

const sassLoader = {
  includePaths: [
    path.resolve(__dirname, '../node_modules/spr-web-components/')
  ]
};

const sassPaths = sassLoader
  .includePaths
  .map((sassPath)=>`includePaths[]=${sassPath}`)
  .join('&');

module.exports = [
  {
    test: /\.js$/,
    loader: 'babel',
    include: [
      path.resolve(__dirname, '../src'),
      path.resolve(__dirname, '../node_modules/spr-web-components/src')
    ],
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
      `sass?sourceMap&${sassPaths}`
    ],
    include: [
      path.resolve(__dirname, '../src'),
      path.resolve(__dirname, '../node_modules/spr-web-components/src')
    ]
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
    test: /\.svg$/,
    loader: 'svg-inline',
  }
];
