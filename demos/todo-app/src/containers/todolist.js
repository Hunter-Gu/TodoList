import List from '../components/list.jsx'
import { receivePost, requestPost } from '../actions/actions' 
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData () {
      dispatch(requestPost())

      return fetch('/data.action', {
        method: "GET"
      })
        .then(res => {
          res.json().then(res => {
            dispatch(receivePost(res))
          })
        })
        .catch(err => {
          console.log(err.message)
        })
    }
  }
}

const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default TodoList
