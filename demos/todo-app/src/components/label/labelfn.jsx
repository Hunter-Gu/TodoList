import React, { Component } from 'react'

class LabelFn extends Component {
  constructor (props) {
    super(props)
    this.state = {
      val: ''
    }
  }
  handlerChange (e) {
    this.setState({
      val: e.target.value
    })
  }
  render () {
    let { val } = this.state
    let { handlerChange } = this
    return (
      <div className="label-fn">
        <button>搜索</button>
        <input type="text"
          value={val}
          onChange={handlerChange.bind(this)}
        />
        <button>添加</button>
      </div>
    )
  }
}

export default LabelFn
