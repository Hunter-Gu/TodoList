/*
 * @HUnter
 * 处理所有 http 请求，包括 静态资源请求，api 请求等
 */
const staticServer = require('./static/static.js')
const apiServer = require('./api/api.js')
const urlParse = require('./parse/parse.js')

class App {
  constructor () {

  }
  initServer () {
    return (request, response) => {
      request.context = {
        method: 'get',
        query: '',
        body: ''
      }

      urlParse(request).then(data => {
        return apiServer(request)
      })
      .then(data => {
        if (!data) {
          return staticServer(request)
        } else {
          return data
        }
      })
      .then(data => {
        let body = ''
        let baseHeader = {
          'X-powered-by': 'node.js'
        }

        if (data instanceof Buffer) {
          body = data
        } else {
          body = JSON.stringify(data)
          Object.assign(baseHeader, {
            'Content-Type': 'application/json'
          })
        }
        response.writeHead('200', 'ok resolve', baseHeader)
        response.end(body)
      })
    }
  }
}

module.exports = new App()
