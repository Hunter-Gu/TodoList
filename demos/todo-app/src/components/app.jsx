import React, { Component } from 'react'
import Navbar from '../containers/navbar.js'
import TodoList from '../containers/todolist.js'
import LabelWrap from '../containers/labelwrap.js'
import DialogWrap from '../containers/dialogwrap.js'

class App extends Component {
  render () {
    return (
      <div className="app">
        <Navbar />
        <TodoList />
        {/*<LabelWrap />*/}
        <DialogWrap />
      </div>
    )
  }
}

export default App
