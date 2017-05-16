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
  @action addAction (event) {
    console.log(this)
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

  @observable val = 'abc'
  @action handlerChange (event) {
    console.log(this)
    this.val = event.target.value
    console.log(this.val)
  }
}

export default Store
