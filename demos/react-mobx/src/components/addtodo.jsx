import React, { Component, PropTypes } from 'react'

const AddTodo = ({ val, handlerChange }) => (
  <div>
    <input
      defaultValue={val}
      onChange={handlerChange}
    >
  </div>
)

AddTodo.propTypes = {
  val: PropTYpes.node,
  handlerChange: PropTypes.func.isRequired
}

export default AddTodo
