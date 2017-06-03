/*
 * @HUnter
 * 主要用来处理 post 请求，通过 context 将请求结果在 apiServer 中返回
 */

const fs = require('fs')

const writeFile = (context, obj, resolve) => {
  fs.readFile('./data/data.json', 'utf8', (err, data) => {
    if (err) {
      process.exit(1)
    }
    let comments = JSON.parse(data)
    comments.push(JSON.parse(obj))
    fs.writeFile('./data/data.json', JSON.stringify(comments), (err) => {
      context.body = comments
      resolve()
    })
  })
}

const urlParse = (request) => {
  return new Promise((resolve, reject) => {
    let { method, url, context } = request

    method = method.toLowerCase()
    if (method === 'post') {
      let data = ''
      request.on('data', (chunk) => {
        data += chunk
      }).on('end', () => {
        // context.body = data
        writeFile(context, data, resolve)
      })
    } else {
      resolve()
    }
  })
}

module.exports = urlParse
