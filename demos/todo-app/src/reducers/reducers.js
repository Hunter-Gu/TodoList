import { DIALOGVISIBLE, SEARCH, ADD_DATA } from '../actions/actions.js'

const dataList = [{valLabel: 'a', valUrl: 'a'},{valLabel: 'b', valUrl: 'b'},{valLabel: 'c', valUrl: 'c'},{valLabel: 'd', valUrl: 'd'},{valLabel: 'a', valUrl: 'a'},{valLabel: 'b', valUrl: 'b'},{valLabel: 'c', valUrl: 'c'},{valLabel: 'd', valUrl: 'd'},{valLabel: 'a', valUrl: 'a'},{valLabel: 'b', valUrl: 'b'},{valLabel: 'c', valUrl: 'c'},{valLabel: 'd', valUrl: 'd'},{valLabel: 'a', valUrl: 'a'},{valLabel: 'b', valUrl: 'b'},{valLabel: 'c', valUrl: 'c'},{valLabel: 'd', valUrl: 'd'},{valLabel: 'a', valUrl: 'a'},{valLabel: 'b', valUrl: 'b'},{valLabel: 'c', valUrl: 'c'},{valLabel: 'd', valUrl: 'd'}]

const reducers = (state = {
  data: dataList,
  visible: false
}, action) => {
  switch (action.type) {
    case DIALOGVISIBLE:
      return Object.assign({}, state, {
        visible: action.visible
      })
    case SEARCH:
      let dataArr = []
      dataList.forEach(el => {
        if (el.valLabel.toString().match(action.target)) {
          dataArr.push(el)
        }
      })
      return Object.assign({}, state, {
        data: dataArr
      })
    case ADD_DATA:
      let arr = JSON.parse(JSON.stringify(state.data))
      arr.push(action.data)
      return Object.assign({}, state, {
        data: arr,
        visible: false
      })
    default: 
      return state
  }
}

module.exports = reducers
