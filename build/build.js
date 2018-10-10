process.env.NODE_ENV = 'production'

const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

const baseConfig = require('./webpack.config')

const { resolve } = require('./utils')

const libName = 'kuan-wordcloud'
const distPath = resolve('lib')

// build config
const webpackConfig = merge(baseConfig, {
  entry: resolve('src'),
  output: {
    path: distPath,
    filename: `${libName}.js`,
    library: libName,
    libraryTarget: 'commonjs2'
  },
  mode: 'production',
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({}), new UglifyJsPlugin()]
  },
  externals: [nodeExternals()],
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${libName}.css`
    }),
    new CleanWebpackPlugin([distPath], {
      root: process.cwd()
    })
  ]
})

// 开始编译
webpack(webpackConfig, (err, stats) => {
  const message = `${stats.toString({ colors: true })} \n`
  if (err || stats.hasErrors()) {
    console.log(err || message)
    if (onFail) {
      onFail({
        err,
        stats
      })
    }
    process.exit(1)
  }
  console.log(message)
})
