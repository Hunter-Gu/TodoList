import React from 'react'

const AddTodo = ({ val, handlerChange, addTodoAction }) => (
  <div className="add-todo">
    <input
      value={val}
      onChange={handlerChange}
    />
    <p>{val}</p>
  </div>
)

export default AddTodo