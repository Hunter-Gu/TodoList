/*
 * @HUnter
 * 主要处理 api 请求，如 get post 等
 */

const fs = require('fs')

const apiServer = (request) => {
  let { url, method, context } = request

  return new Promise((resolve, reject) => {

    let apiMap = {
      '/data.action': './data/data.json',
      '/getlabel.action': './data/label.json'
    }

    method = method.toLowerCase()
    if (method === 'get') {
      if (url.match('action')) {
        fs.readFile(apiMap[url], (err, data) => {
          resolve(data)
        })
      }else {
        resolve()
      }
    } else {
        resolve(context.body)
    }
  })
}

module.exports = apiServer
