import { observable, computed, action } from 'mobx'

class Store {
  @observable todos = [
    {
      text: '1',
      completed: true
    },
    {
      text: '2',
      completed: false
    }
  ]
  @observable val = 'abc'
  @computed get inputLength () {
    return this.val.length
  }
  @action addAction (event) {
    // if (event.keyCode !== 13) {
    //   return false
    // } else {
    //   let newData = {
    //     text: event.target.value,
    //     completed: false
    //   }
    //   this.todos.push(newData)
    //   this.val = ''
    // }
  }
  @action handlerChange (event) {
    this.val = event.target.value
  }
}

export default Store
