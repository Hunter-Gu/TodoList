import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.jsx'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers/reducers.js'
import './styles/index.scss'

let store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)