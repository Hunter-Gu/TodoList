const reducers = (state = {
  val: 'Hunter',
  data: [1,2,3,4,45,5,5,6]
}, action) => {
  switch (action.type) {
    case "CHANGE":
      return Object.assign({}, state, {
        val: action.val
      })
    default: 
      return state
  }
}

module.exports = reducers
