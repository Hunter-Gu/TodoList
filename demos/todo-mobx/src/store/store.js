import { observable, computed, action } from 'mobx'

class Store {
  @observable todoData = [1,2,3,4]
  @observable defaultVal = 'abc'

  @computed get getInputLength () {
    return this.defaultVal.length
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
}

export default Store
