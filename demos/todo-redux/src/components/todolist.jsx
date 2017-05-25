import React from 'react'

const TodoList = ({ listData }) => (
  <ul>
    {
      listData.map(el =>
        <li>{el}</li>
      )
    }
  </ul>
)

export default TodoList
