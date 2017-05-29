import List from '../components/list.jsx'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {

//   }
// }

const TodoList = connect(
  mapStateToProps
  // mapDispatchToProps
)(List)

export default TodoList
