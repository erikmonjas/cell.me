import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import { Provider } from 'react-redux'

import App from './components/App/App.container'
import store from './state/store'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
