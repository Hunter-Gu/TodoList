import React from 'react'

const Todo_List = ({ listData }) => (
  <ul>
    {
      listData.map((el, i) =>
        <li key={i}>{el}</li>
      )
    }
  </ul>
)

export default Todo_List
