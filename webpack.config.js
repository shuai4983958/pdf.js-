var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    'main': './main.js',
    'pdf.worker': 'pdfjs-dist/build/pdf.worker.entry'
  },
  mode: 'none',
  output: {
    path: path.join(__dirname, 'build/webpack'),
    publicPath: 'build/webpack/',
    filename: '[name].bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer : {
    port: 8990,
    host: '0.0.0.0',
    overlay: {
        errors: true
    },
    hot: true
    // open: true
  }
};
 