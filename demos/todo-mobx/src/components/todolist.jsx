import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class TodoList extends Component {

  render () {
    let { store } = this.props

    return (
      <ul className="todo-list">
        {
          store.getListData.map((todo, i) =>
            <li key={i}>{ todo.data }</li>
          )
        }
      </ul>
    )
  }
}

export default TodoList
