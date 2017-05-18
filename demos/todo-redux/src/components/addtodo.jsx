import React from 'react'

const AddTodo = ({ val, handlerChange }) => (
  <div className="add-todo">
    <input
      value={val}
      onChange={handlerChange}
    />
    <p>{val}</p>
  </div>
)

export default AddTodo