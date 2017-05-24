import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.jsx'
import store from './store/store.js'

import './style/index.scss'
import './style/addtodo.scss'
import './style/todolist.scss'
import './style/togglelist.scss'

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
)
