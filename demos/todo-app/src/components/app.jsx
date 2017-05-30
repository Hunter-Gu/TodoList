import React, { Component } from 'react'
import Navbar from '../containers/navbar.js'
import TodoList from '../containers/todolist.js'
import LabelList from './label.jsx'
import Dialog from './dialog.jsx'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: true
    }
  }
  setVisibilityHidden () {
    this.setState({
      visible: false
    })
  }
  setVisibilityVisible () {
    this.setState({
      visible: true
    })
  }
  render () {
    return (
      <div className="app">
        <Navbar setVisibilityVisible={this.setVisibilityVisible.bind(this)} />
        <TodoList />
        <LabelList />
        <Dialog visible={this.state.visible} setVisibilityHidden={this.setVisibilityHidden.bind(this)} />
      </div>
    )
  }
}

export default App
