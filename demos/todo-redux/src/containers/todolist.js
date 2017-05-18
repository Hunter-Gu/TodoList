import { connect } from "react-redux"
import TodoList from '../components/todolist.jsx'

const mapStateToProps = (state) => {
  return {
    todos: state.todoList
  }
}

const TodoListCon = connect(
  mapStateToProps
)(TodoList)

export default TodoListCon
