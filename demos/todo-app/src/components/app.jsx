import React, { Component } from 'react'
import Navbar from '../containers/navbar.js'
import TodoList from '../containers/todolist.js'
import LabelList from './label.jsx'
import DialogWrap from '../containers/dialogwrap.js'

class App extends Component {
  render () {
    return (
      <div className="app">
        <Navbar />
        <TodoList />
        <LabelList />
        <DialogWrap />
      </div>
    )
  }
}

export default App
