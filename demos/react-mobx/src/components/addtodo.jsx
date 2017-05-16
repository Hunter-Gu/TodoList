import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'

@observer
class AddTodo extends Component {
  constructor(...props) {
    super(props);
  }
  render () {
    let { val, handlerChange, addAction } = this.props.store
    return (
      <div>
        <input
          defaultValue={val}
          onChange={handlerChange}
          onKeyDown={addAction}
        />
        <p>{val}</p>
      </div>
    )
  }
}

AddTodo.propTypes = {
  val: PropTypes.node,
  handlerChange: PropTypes.func
}

export default AddTodo
