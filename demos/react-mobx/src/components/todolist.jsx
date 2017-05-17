import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'

@observer
class TodoList extends Component{
  render () {
    let { todos } = this.props.store
    return (
      <ul>
        {
          todos.map((todo, idx) => 
            <li key={idx}>
              {todo.text}
            </li>
          )
        }
      </ul> 
    )
  }
}

export default TodoList
