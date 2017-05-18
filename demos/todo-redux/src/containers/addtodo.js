import { connect } from 'react-redux'
import AddToDo from '../components/addtodo.jsx'

const mapStateToProps = (state) => {
  return {
    val: state.addTodo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlerChange (e) {
      return dispatch({
        type: "CHANGE_VAL",
        val: e.target.value
      })
    }
  }
}

const AddTodoCon = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToDo)

export default AddTodoCon
