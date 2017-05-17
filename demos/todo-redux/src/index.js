import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.jsx'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'

let store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
