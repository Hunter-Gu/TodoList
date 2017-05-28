const http = require('http')
const PORT = 4300
const app = require('./app/app.js')

http.createServer(app.initServer()).listen(PORT, () => {
  console.log(`server started on prot ${PORT}`)
})
