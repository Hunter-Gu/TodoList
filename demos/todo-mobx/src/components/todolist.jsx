import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class TodoList extends Component {

  render () {
    let { store } = this.props

    return (
      <ul className="todo-list">
        {
          store.todoData.map((todo, i) =>
            <li key={i}>{ todo }</li>
          )
        }
      </ul>
    )
  }
}

export default TodoList
