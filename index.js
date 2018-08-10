const express = require('express')
const app = express()
const http = require('http').Server(app)
const pug = require('pug')
const io = require('socket.io')(http)
const port = process.env.PORT || 1337
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
  io.emit('new')
  io.emit('outcome', { method, path, headers, body })

  const cheatedHeaders = headers;
  delete(cheatedHeaders.host)
  delete(cheatedHeaders.origin)
  delete(cheatedHeaders.referer)
  const url = 'https://www.linkedin.com/' + path
  console.log(cheatedHeaders)

  request({ method, 'rejectUnauthorized': false, url }, (err, response, body) => {
    const cheatedBody = body.replace('</body>', `<script>alert("coucou blank");//setTimeout(function() { window.location.href = "${url}"}, 500)</script></body>`)
    
    io.emit('income', { response: response.statusCode, headers: response.headers, body })
    res.writeHead(response.statusCode, response.header)
    res.write(cheatedBody)
    res.end()
  })
})

http.listen(port, () => console.log(`Example app listening on port ${port}!`))
