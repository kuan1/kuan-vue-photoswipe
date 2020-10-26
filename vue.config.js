const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('kuan-vue-photoswipe', path.resolve(__dirname, 'src'))
  },
  css: {
    extract: false,
  },
}
