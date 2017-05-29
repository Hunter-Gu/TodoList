import React from 'react'
import Navbar from '../containers/navbar.js'
import TodoList from '../containers/todolist.js'
import LabelList from './label.jsx'
import Dialog from './dialog.jsx'

const App = () => (
  <div className="app">
    <Navbar />
    <TodoList />
    <LabelList />
    <Dialog />
  </div>
)

export default App
