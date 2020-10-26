const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('kuan-vue-photoswipe', path.resolve(__dirname, 'src'))

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => Object.assign(options, { limit: 10240 }))
  },
  css: {
    extract: false,
  },
}
