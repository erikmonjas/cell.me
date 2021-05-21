import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import App from './components/App/App.container'
import { persistor, store } from './state/store'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
