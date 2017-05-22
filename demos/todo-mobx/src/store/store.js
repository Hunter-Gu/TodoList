import { observable, computed, action } from 'mobx'

import data from './data.js'

class Store {
  @observable todoData = data
  @observable defaultVal = 'abc'
  @observable checked = true

  @computed get getInputLength () {
    return this.defaultVal.length
  }
  @computed get getListData () {
    if (this.checked) {
      return this.todoData
    } else {
      let val = []
      this.todoData.forEach(el => {
        if (el.status) {
          val.push(el)
        }
      })
      return val
    }
  }

  @action.bound handlerChange (event) {
    this.defaultVal = event.target.value
  }
  @action.bound addTodo (event) {
    if (event.keyCode === 13) {
      this.todoData.push(event.target.value)
      this.defaultVal = ''
    } else {
      return false
    }
  }
  @action.bound handerToggle (event) {
    console.log(event.target.checked)
    debugger
    if (event.target.checked) {
      return
    }
    this.checked = !this.checked
  } 
}

export default Store
