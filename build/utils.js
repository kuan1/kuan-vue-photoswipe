const fs = require('fs')
const path = require('path')

// 获取绝对路径
function resolve(dir) {
  const basePath = process.cwd()
  return path.join(basePath, dir)
}

// 日志
function log(data) {
  // console.log(data)
  if (process.env.NODE_ENV === 'production') return
  const logPath = path.resolve(__dirname, 'log.json')
  try {
    fs.writeFileSync(logPath, JSON.stringify(data, null, 2), 'utf-8')
    console.log('- 已经保存日志')
  } catch (e) {
    console.log('失败', e)
  }
}

module.exports = {
  log,
  resolve
}