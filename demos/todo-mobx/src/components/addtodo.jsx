import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class AddTodo extends Component {
  render () {
    let { store } = this.props

    return (
      <div>
        <input
          className="input"
          placeholder="记录你的 todo 吧..."
          value={store.defaultVal}
          onChange={store.handlerChange}
          onKeyDown={store.addTodo}
        />
        <p></p>
      </div>
    )
  }
}

export default AddTodo
