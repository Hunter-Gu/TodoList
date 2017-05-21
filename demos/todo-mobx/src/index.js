import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.jsx'
import Store from './store/store.js'

import './style/index.scss'

let store = new Store()

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
)
