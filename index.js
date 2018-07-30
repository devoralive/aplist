const express = require('express')
const app = express()
const http = require('http').Server(app);
const pug = require('pug');
const io = require('socket.io')(http);
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser')

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

io.on('connection', function(socket){
  console.log('a user connected');
});

// app.use (function(req, res, next) {
//   let data = '';
//   req.setEncoding('utf8');
//   req.on('data', function(chunk) { 
//      data = data + chunk;
//   });

//   req.on('end', function() {
//       req.body = data;
//       next();
//   });
// });

app.all('/*', function (req, res) {
  io.emit('income_method', req.method)
  io.emit('income_path', req.path)
  io.emit('income_headers', req.headers)
  io.emit('income_body', req.body)

  console.log(req.body)
  res.send('Ok !')
})

http.listen(port, () => console.log(`Example app listening on port ${port}!`))