process.env.NODE_ENV = 'production'

const { buildLib: build } = require('kuan-pack-vue')
const { resolve } = require('./utils.js')

build({
  entry: resolve('src'),
  distPath: resolve('lib')
})
