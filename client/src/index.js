import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.jsx'
import { Provider } from 'react-redux'
import Store from './store'
import './middleware'
import './assets/styles/index.css'

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
