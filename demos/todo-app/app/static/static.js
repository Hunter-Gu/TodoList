/*
 * @HUnter
 * 处理静态资源请求，本质上是 fs 模块的使用
 */


const fs = require('fs')
const path = require('path')

const getPath = url => path.resolve(process.cwd(), './src', `.${url}`)

const staticServer = (request) => {
  let { url } = request
  let sourceMap = {
    '/': '/index.html'
  }
  url = sourceMap[url] || url

  return new Promise((resolve, reject) => {
    fs.readFile(getPath(url), (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

module.exports = staticServer
