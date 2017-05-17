import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'

@observer
class AddTodo extends Component {
  render () {
    let { val, handlerChange, addAction, getInputLength } = this.props.store
    
    return (
      <div>
        <input
          value={val}
          onChange={handlerChange}
          onKeyDown={addAction}
        />
        <span>{val}</span>
        <p>{getInputLength}/10</p>
      </div>
    )
  }
}

AddTodo.propTypes = {
  val: PropTypes.node,
  handlerChange: PropTypes.func
}

export default AddTodo
