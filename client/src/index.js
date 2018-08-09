import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import App from './components/app.jsx'
import { Provider } from 'react-redux'
import Store from './store'
import './middleware'

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
