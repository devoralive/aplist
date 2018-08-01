import store from './store'
import socketIOClient from 'socket.io-client'
import { addOutcome, addIncome } from './actions/middleware'

const socket = socketIOClient(endpoint);

socket.on('outcome', req => {
  
  store.dispatch(addOutcome(req));
});
socket.on('income', resp => {
  store.dispatch(addIncome(resp));
});
