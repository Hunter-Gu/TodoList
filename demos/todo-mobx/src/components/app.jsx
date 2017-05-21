import React, { Component } from 'react'
import AddTodo from './addtodo.jsx'
import ToggleList from './togglelist.jsx'
import TodoList from './todolist.jsx'

const App = ({ store }) => (
  <div>
    <AddTodo store={store} />
    <ToggleList store={store} />
    <TodoList store={store} />
  </div>
)

export default App
