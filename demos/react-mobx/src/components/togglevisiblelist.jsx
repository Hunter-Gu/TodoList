import React, { Component, PropTypes } from 'react'

const ToggleVisibleTodoList = ({ toggleList }) => (
  <div>
    show completed:
    <input 
      type="checkbox"
      onClick={toggleList}
    />
  </div>
)

ToggleVisibleTodoList.propTypes = {
  toggleList: PropTypes.func
}

export default ToggleVisibleTodoList
