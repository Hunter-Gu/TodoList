import { connect } from 'react-redux'
import Add_Todo from '../components/addtodo.jsx'

const mapStateToProps = (state) => {
  return {
    inputVal: state.inputVal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlerChange (e) {
      return dispatch({
        type: 'CHANGE',
        inputVal: e.target.value
      })
    }
  }
}

const AddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Add_Todo)

export default AddTodo
