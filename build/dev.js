process.env.NODE_ENV = 'development'

const { dev } = require('kuan-pack')
const { resolve } = require('./utils')

dev({
  entry: resolve('test')
})
