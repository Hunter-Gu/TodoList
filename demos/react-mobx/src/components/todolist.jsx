import React, { Component, PropTypes } from 'react'

const TodoList = (todos) => (
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

TodoList.propTypes = {
  todo: PropTypes.node
}

export default TodoList
