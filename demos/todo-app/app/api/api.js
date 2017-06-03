/*
 * @HUnter
 * 主要处理 api 请求，如 get post 等
 */

const apiServer = (request) => {
  let { url, method, context } = request

  let apiMap = {
    '/data.action': [{valLabel: 'a', valUrl: 'a'},{valLabel: 'b', valUrl: 'b'},{valLabel: 'c', valUrl: 'c'},{valLabel: 'd', valUrl: 'd'},{valLabel: 'a', valUrl: 'a'},{valLabel: 'b', valUrl: 'b'},{valLabel: 'c', valUrl: 'c'},{valLabel: 'd', valUrl: 'd'},{valLabel: 'a', valUrl: 'a'},{valLabel: 'b', valUrl: 'b'},{valLabel: 'c', valUrl: 'c'},{valLabel: 'd', valUrl: 'd'},{valLabel: 'a', valUrl: 'a'},{valLabel: 'b', valUrl: 'b'},{valLabel: 'c', valUrl: 'c'},{valLabel: 'd', valUrl: 'd'},{valLabel: 'a', valUrl: 'a'},{valLabel: 'b', valUrl: 'b'},{valLabel: 'c', valUrl: 'c'},{valLabel: 'd', valUrl: 'd'}]
  }

  method = method.toLowerCase()
  if (method === 'get') {
    return Promise.resolve(apiMap[url])
  } else {
    return Promise.resolve(context.body)
  }
}

module.exports = apiServer
