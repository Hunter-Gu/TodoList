import React from 'react'

const TodoList = ({ todos }) => (
  <ul>
    {
      todos.map(todo =>
        <li>
          {todo.text}
        </li>
      )
    }
  </ul>
)

export default TodoList
