import { DIALOGVISIBLE, SEARCH, ADD_DATA } from '../actions/actions.js'

const checkUrl = (url) => {
  let patt = /^http:\/\//
  if (patt.test(url)) {
    throw new Error('链接 expected starting with "http://"')
  }
}
const checkEmpty = (target) => {
  console.log(target)
}

const reducers = (state = {
  data: [{valLabel: 'a', valUrl: 'b'},{valLabel: 'a', valUrl: 'b'},{valLabel: 'a', valUrl: 'b'},{valLabel: 'a', valUrl: 'b'}],
  visible: false
}, action) => {
  switch (action.type) {
    case DIALOGVISIBLE:
      return Object.assign({}, state, {
        visible: action.visible
      })
    case SEARCH:
      debugger
      let dataArr = []
      state.data.forEach(el => {
        if (el.valLabel.toString().match(action.target)) {
          dataArr.push(el)
        }
      })
      debugger
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
