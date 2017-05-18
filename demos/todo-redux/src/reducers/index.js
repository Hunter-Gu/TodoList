import { combineReducers } from 'redux'

const addTodo = (state = "123", action) => {
  switch (action.type) {
    case 'CHANGE_VAL': 
      return action.val
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

const todoList = (state = data, action) => {
  switch (action.type) {
    case "ADD_TODO": 
      return state.concat({
        id: data.length,
        text: action.text
      })
    default: return state
  }
}

const reducer = combineReducers({
  addTodo, 
  todoList
})

export default reducer
