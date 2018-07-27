const express = require('express')
const app = express()
const http = require('http').Server(app);
const pug = require('pug');
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/show', (req, res) => {
  res.send(pug.renderFile('tpl/index.pug'))
})

io.on('connection', function(socket){
  console.log('a user connected');
});

app.use (function(req, res, next) {
  let data='';
  req.setEncoding('utf8');
  req.on('data', function(chunk) { 
     data += chunk;
  });

  req.on('end', function() {
      req.body = data;
      next();
  });
});

app.all('/*', function (req, res) {
  io.emit('income_method', req.method)
  io.emit('income_path', req.path)
  io.emit('income_headers', JSON.stringify(req.headers))
  io.emit('income_body', req.body)

  res.send('Ok !')
})

http.listen(port, () => console.log(`Example app listening on port ${port}!`))