import React, { Fragment as _ } from 'react'

const History = ({ history }) => {
  console.log(history)
  return (
  <ul>
    { history.map(traffic => (<_>{ traffic.request.path && <li className="traffic">{ traffic.request.path }</li> }</_>)) }
  </ul>
)}

export default History