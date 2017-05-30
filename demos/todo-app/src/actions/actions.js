const CHANGE = "CHANGE"

const DIALOGVISIBLE = "DIALOGVISIBLE"

let handlerChangeAction = (val) => {
  return {
    type: CHANGE,
    val
  }
}

let setVisibility = (boolean) => {
  return {
    type: DIALOGVISIBLE,
    visible: boolean
  }
}

module.exports = {
  handlerChangeAction,
  setVisibility
}
