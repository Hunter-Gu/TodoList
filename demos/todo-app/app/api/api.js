/*
 * @HUnter
 * 主要处理 api 请求，如 get post 等
 */

const apiServer = (request) => {
  let { url, method, context } = request

  method = method.toLowerCase()
  if (method === 'get') {
    return Promise.resolve()
  } else {
    return Promise.resolve(context.body)
  }
}

module.exports = apiServer
