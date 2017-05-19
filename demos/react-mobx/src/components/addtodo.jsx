import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'

@observer
class AddTodo extends Component {
  render () {
    let { val, handlerChange, addAction, inputLength } = this.props.store

    return (
      <div>
        <input
          value={val}
          onChange={handlerChange.bind(this.props.store)}
          onKeyDown={addAction}
        />
        <span>{val}</span>
        <p>{inputLength}/10</p>
      </div>
    )
  }
}

AddTodo.propTypes = {
  val: PropTypes.node,
  handlerChange: PropTypes.func
}

export default AddTodo
