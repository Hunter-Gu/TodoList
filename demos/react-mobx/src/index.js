import React from 'react'
import ReactDOM from 'react-dom'
import AddTodo from './components/addtodo.jsx'
import TodoList from './components/todolist.jsx'
import ToggleVisibleTodoList from './components/togglevisiblelist.jsx'

import Store from './store/store'

let store = new Store()

ReactDOM.render(
  (
    <div>
      <AddTodo store={store} />
      <ToggleVisibleTodoList store={store} />
      <TodoList store={store} />
    </div>
  ),
  document.getElementById('root')
)
