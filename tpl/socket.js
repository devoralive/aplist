import JSONFormatter from './vendor/json-formatter-js/dist/json-formatter.js'
const socket = io();

socket.on('income_method', method => {
  $('#method').html(method)
})
socket.on('income_path', path => {
  $('#path').html(path)
})
socket.on('income_headers', headers => {
  $('#headers').html(headers)
})
socket.on('income_body', body => {
  $('#body').html(body)
})