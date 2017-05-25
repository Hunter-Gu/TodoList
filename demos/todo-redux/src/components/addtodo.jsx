import React from 'react'

const AddTodo = ({ val, handlerChange }) => {
  return (
    <div className="add-todo">
      <input type="text"
        value={val}
        onChange={handlerChange}
      />
    </div>
  )
}

export default AddTodo
