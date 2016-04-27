const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './main.elm',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'Lib',
    libraryTarget: 'umd'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.elm']
  },
  module: {
    loaders: [
      { test: /\.elm$/, loader: 'elm', exclude: [/elm-stuff/, /node_modules/] }
    ],
    noParse: [/\.elm$/]
  }
}
