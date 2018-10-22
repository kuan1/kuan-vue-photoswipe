process.env.NODE_ENV = 'production'
process.env.EXTRACT_CSS = '0'
process.env.DISCARD_HTML = '0'

const { buildLib: build } = require('kuan-pack')
const { resolve } = reuqire('./utils.js')

build({
  entry: resolve({
    entry: resolve('src')
  })
})
