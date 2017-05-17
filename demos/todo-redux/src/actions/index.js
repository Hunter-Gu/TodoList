export const CHANGE_VAL = "CHANGE_VAL"

export const ADD_ACTION = "ADD_ACTION"

export const changeVal = (text) => ({
  type: CHANGE_VAL,
  text
})

export const addAction = (text) => ({
  type: ADD_ACTION,
  text
})
