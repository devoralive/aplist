import store from './store'
import socketIOClient from 'socket.io-client'

const socket = socketIOClient(endpoint);

socket.on('income_method', method => {
  store.dispatch('', { method });
});
socket.on('income_path', path => {
  setState({ path });
});
socket.on('income_headers', headers => {
  setState({ headers });
});
socket.on('income_body', body => {
  setState({ body });
});