const CHANGE = "CHANGE"

let handlerChangeAction = (val) => {
  return {
    type: CHANGE,
    val
  }
}

module.exports = handlerChangeAction
