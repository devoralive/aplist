const express = require('express')
const app = express()
const http = require('http').Server(app)
const pug = require('pug')
const io = require('socket.io')(http)
const port = process.env.PORT || 8080
const bodyParser = require('body-parser')
const request = require('request')

// parse forms
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())
// parse an HTML body into a string
app.use(bodyParser.text())
// parse some custom thing into a Buffer
app.use(bodyParser.raw())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

io.on('connection', function (socket) {
  console.log('a user connected')
  io.emit('server_running', `http://localhost:${port}`)
})

app.all('/*', function ({ method, path, headers, body, ...req }, res) {
  io.emit('outcome', { method, path, headers, body })

  request({
    method,
    url: 'http://calapi.inadiutorium.cz/' + path
  },
  (err, response, body) => {
    io.emit('income', { response: response.statusCode, header: response.header, body })
    res.writeHead(response.statusCode, response.header)
    res.write(body)
    res.end()
  //  res.send(body)
  })
//  request[method.toLowerCase()]({ url:'http://calapi.inadiutorium.cz/' + path }, (err, response, body) => {
//    console.log(err)
//    io.emit('income', { response: response.statusCode, header: response.header, body })
//    res.writeHead(response.statusCode, response.header)
//    res.send(body)
//  })
})

http.listen(port, () => console.log(`Example app listening on port ${port}!`))
