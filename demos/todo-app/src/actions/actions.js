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

let ADD_DATA = "ADD_DATA"

let addData = (obj) => {
  return {
    type: ADD_DATA,
    data: obj
  }
}

exports.ADD_DATA = ADD_DATA
exports.addData = addData
