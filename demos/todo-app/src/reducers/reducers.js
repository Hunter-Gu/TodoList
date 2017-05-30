const reducers = (state = {
  val: 'Hunter',
  valLabel: '',
  valUrl: '',
  data: [1,2,3,4,45,5,5,6,1,2,3,4,45,5,5,6],
  visible: false
}, action) => {
  switch (action.type) {
    case "CHANGE":
      return Object.assign({}, state, {
        val: action.val
      })
    case "CHANGE_URL":
      return Object.assign({}, state, {
        valUrl: action.valUrl
      })
    case "CHANGE_LABEL":
      return Object.assign({}, state, {
        valLabel: action.valLabel
      })
    case "DIALOGVISIBLE":
      return Object.assign({}, state, {
        visible: action.visible
      })
    default: 
      return state
  }
}

module.exports = reducers
