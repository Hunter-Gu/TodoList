/*
 * @HUnter
 * 主要用来处理 post 请求，通过 context 将请求结果在 apiServer 中返回
 */

const urlParse = (request) => {
  return new Promise((resolve, reject) => {
    let { method, url, context } = request

    method = method.toLowerCase()
    if (method === 'post') {
      let data = ''
      request.on('data', (chunk) => {
        data += chunk
      }).on('end', () => {
        context.body = data
        resolve()
      })
    } else {
      resolve()
    }
      
  })
}

module.exports = urlParse
