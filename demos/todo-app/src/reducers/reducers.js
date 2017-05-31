import { DIALOGVISIBLE, SEARCH } from '../actions/actions.js'

const reducers = (state = {
  data: [1,2,3,4,45,5,5,6,1,2,3,4,45,5,5,6],
  visible: false
}, action) => {
  switch (action.type) {
    case DIALOGVISIBLE:
      return Object.assign({}, state, {
        visible: action.visible
      })
    case SEARCH:
      let dataArr = []
      state.data.forEach(el => {
        if (el.toString().match(action.target)) {
          dataArr.push(el)
        }
      })
      return Object.assign({}, state, {
        data: dataArr
      })
    default: 
      return state
  }
}

module.exports = reducers
