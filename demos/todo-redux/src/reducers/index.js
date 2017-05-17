import { combineReducers } from 'redux'

const addTodo = (state = {
  val: "123"
}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        val: action.val
      }
    case 'CHANGE_VAL': 
      return {
        val: action.val
      }
    default: return state
  }
}

let data = [
    {
      id: 1,
      text: 'a'
    },
    {
      id: 2,
      text: 'b'
    },
    {
      id: 3,
      text: 'c'
    }
  ]

const todoList = (state = {
  todos: data
}, action) => {
  switch (action.type) {
    case "ADD_TODO": 
      return Object.assign({}, state, {
        id: state.todos.lenght,
        text: action.text
      })
    default: return state
  }
}

const reducer = combineReducers({addTodo, todoList})

export default reducer
