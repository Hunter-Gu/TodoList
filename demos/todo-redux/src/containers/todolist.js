import { connect } from 'react-redux'
import Todo_List from '../components/todolist.jsx'

const mapStateToProps = (state) => {
  return {
    listData: state.listData
  }
}

const TodoList = connect(
  mapStateToProps
)(Todo_List)

export default TodoList
