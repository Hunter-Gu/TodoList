import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'

@observer
class TodoList extends Component{
  constructor(...props) {
    super(props);
  }
  render () {
    let { todos } = this.props.store
    return (
      <ul>
        {
          todos.map(todo => 
            <li key={todo.text}>
              {todo.text}
            </li>
          )
        }
      </ul> 
    )
  }
}

// TodoList.propTypes = {
//   todos: PropTypes.arr
// }

export default TodoList
