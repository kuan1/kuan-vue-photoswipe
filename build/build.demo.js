process.env.NODE_ENV = 'production'
process.env.EXTRACT_CSS = '0'

const { build } = require('kuan-pack')
const { resolve } = require('./utils.js')

build({
  entry: resolve(resolve('test')),
  distPath: resolve('demo')
})
