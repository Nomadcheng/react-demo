const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const root = __dirname;

module.exports = {
  entry: path.resolve(root, './src/js/App.js'),

  output: {
    filename: 'bundle.js',
    path: path.resolve(root, 'dist')
  },
  //loaders
  module: {
    rules: [
      {test: /\.jsx?$/, use: ['babel-loader'], exclude: /node_modules/}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Demo',
      template: path.resolve(root, './public/index.html'),
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin(), //热替换插件
    new webpack.NamedModulesPlugin() //执行热替换时打印模块名字
  ],
  devServer: {
    hot: true, //激活服务器HMR
    contentBase: path.resolve(root, 'dist'),
    publicPath: '/',
    port: 8080,
    historyApiFallback: true
  },
}
