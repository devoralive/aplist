import React, {Fragment} from 'react'
import Response from './response'
import Request from './request'
import History from './history'
import logo from './../assets/images/logo.gif'
import './../assets/styles/app.css'

const endpoint = "http://localhost:8080"

const App = () => (
  <div className="wrapper">
    <div className="logo">
      <img src={logo} className="logo-img" />
    </div>
    <div className="history">
      <History />
    </div>
    <div className="request">
      <Request />
    </div>
    <div className="response">
      <Response />
    </div>
  </div>
)

export default App;
