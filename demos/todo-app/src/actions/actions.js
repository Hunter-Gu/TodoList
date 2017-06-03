const RECEIVE_POST = "RECEIVE_POST"

let receivePost = (dataObj) => {
  return {
    type: RECEIVE_POST,
    dataObj
  }
}

exports.RECEIVE_POST = RECEIVE_POST
exports.receivePost = receivePost

const REQUEST_POST = "REQUEST_POST"

let requestPost = (dataObj) => {
  return {
    type: REQUEST_POST,
    dataObj
  }
}


exports.REQUEST_POST = REQUEST_POST
exports.requestPost = requestPost

const DIALOGVISIBLE = "DIALOGVISIBLE"

let setVisibility = (boolean) => {
  return {
    type: DIALOGVISIBLE,
    visible: boolean
  }
}

exports.DIALOGVISIBLE = DIALOGVISIBLE
exports.setVisibility = setVisibility

const SEARCH = "SEARCH"

let search = (str) => {
  return {
    type: SEARCH,
    target: str
  }
}
exports.SEARCH = SEARCH
exports.search = search

let ADD_DATA_REQUEST = "ADD_DATA_REQUEST"

let addDataRequest = (obj) => {
  return {
    type: ADD_DATA_REQUEST,
    data: obj
  }
}

exports.ADD_DATA_REQUEST = ADD_DATA_REQUEST
exports.addDataRequest = addDataRequest

let ADD_DATA_RECEIVE = "ADD_DATA_RECEIVE"

let addDataReceive = (obj) => {
  return {
    type: ADD_DATA_RECEIVE,
    data: obj
  }
}

exports.ADD_DATA_RECEIVE = ADD_DATA_RECEIVE
exports.addDataReceive = addDataReceive
