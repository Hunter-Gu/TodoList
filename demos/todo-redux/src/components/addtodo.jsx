import React from 'react'

const Add_Todo = ({ inputVal, handlerChange }) => {
  return (
    <div className="add-todo">
      <input type="text"
        value={inputVal}
        onChange={handlerChange}
      />
    </div>
  )
}

export default Add_Todo
