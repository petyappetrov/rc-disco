const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const base = require('./config.base')

const config = merge(base, {
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    port: 8888
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})

module.exports = config
