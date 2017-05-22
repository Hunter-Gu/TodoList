import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class AddTodo extends Component {
  render () {
    let { store } = this.props

    return (
      <div className="add-todo">
        <input
          className="input"
          placeholder="记录你的 todo 吧..."
          value={store.defaultVal}
          onChange={store.handlerChange}
          onKeyDown={store.addTodo}
        />
        <span className="input-length">{store.getInputLength}</span>
        <p className="input-review">{store.defaultVal}</p>
      </div>
    )
  }
}

export default AddTodo
