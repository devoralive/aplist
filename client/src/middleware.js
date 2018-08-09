import store from './store'
import socketIOClient from 'socket.io-client'
import { addOutcome, addIncome } from './actions/middleware'

const socket = socketIOClient('http://localhost:8080')

socket.on('outcome', req => {
  console.log(req)
  store.dispatch(addOutcome(req))
})

socket.on('income', resp => {
  console.log(resp)
  store.dispatch(addIncome(resp))
})
