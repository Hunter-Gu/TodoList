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
    let dataObj = JSON.parse(obj)
    let comments = JSON.parse(data)
    let receiveData = Object.assign({
      id: comments.length
    }, dataObj)
    comments.push(receiveData)
    fs.writeFile('./data/data.json', JSON.stringify(comments), (err) => {
      context.body = comments
      resolve()
    })
  })
}

const deleteData = (context, index, resolve) => {
  fs.readFile('./data/data.json', 'utf8', (err, data) => {
    if (err) {
      process.exit(1)
    }
    let comments = JSON.parse(data)
    let newComments = []
    let idx = JSON.parse(index).idx
    comments.forEach(el => {
      if (el.id !== idx) {
        newComments.push(el)
      }
    })
    fs.writeFile('./data/data.json', JSON.stringify(newComments), (err) => {
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
          if (url.match('add')) {
            writeFile(context, data, resolve)
          } else if (url.match('delete')) {
            deleteData(context, data, resolve)
          }
        })
    } else {
      resolve()
    }
  })
}

module.exports = urlParse
