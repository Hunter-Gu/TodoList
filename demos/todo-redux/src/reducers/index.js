const reducer = (state = {
  inputVal: 'HUnter Gu',
  listData: [1,2,3]
}, action) => {
  switch (action.type) {
    case "CHANGE":
      return Object.assign({}, state, {
        inputVal: action.inputVal
      })
    default:
      return state
  }
}

export default reducer
