import { observable, computed, action } from 'mobx'

class Store {
  constructor () {
    this.addAction = this.addAction.bind(this)
    this.handlerChange = this.handlerChange.bind(this)
  }
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
    console.log(this)
    console.log(1)
    return this.val.lenght
  }
  @action addAction (event) {
    if (event.keyCode !== 13) {
      return false
    } else {
      let newData = {
        text: event.target.value,
        completed: false
      }
      this.todos.push(newData)
      this.val = ''
    }
  }
  @action handlerChange (event) {
    this.val = event.target.value
  }
}

export default Store
