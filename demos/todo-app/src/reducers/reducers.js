import { REQUEST_POST, RECEIVE_POST, DIALOGVISIBLE, SEARCH, ADD_DATA_RECEIVE, ADD_DATA_REQUEST, DELETE_DATA_REQUEST, DELETE_DATA_RECEIVE, GET_LABEL_REQUEST, GET_LABEL_RECEIVE } from '../actions/actions.js'

let dataList = []
let labelData = []

const reducers = (state = {
  data: [],
  visible: false,
  labelData: []
}, action) => {
  switch (action.type) {
    case REQUEST_POST:
      return Object.assign({}, state)
    case RECEIVE_POST:
      dataList = action.dataObj
      return Object.assign({}, state, {
        data: action.dataObj
      })
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
    case ADD_DATA_REQUEST:
      let arr = JSON.parse(JSON.stringify(state.data))
      arr.push(action.data)
      dataList.push(action.data)
      return Object.assign({}, state, {
        data: arr,
        visible: false
      })
    case ADD_DATA_RECEIVE:
      return Object.assign({}, state)
    case DELETE_DATA_REQUEST:
      let dataObj = JSON.parse(JSON.stringify(state.data))
      dataObj.splice(action.data, 1)
      return Object.assign({}, state, {
        data: dataObj
      })
    case DELETE_DATA_RECEIVE:
      return Object.assign({}, state)
    case GET_LABEL_REQUEST:
      return Object.assign({}, state)
    case GET_LABEL_RECEIVE:
      labelData = action.labelData
      return Object.assign({}, state, {
        labelData: action.labelData
      })
    default: 
      return state
  }
}

module.exports = reducers
