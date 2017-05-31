import React, { Component } from 'react'
import '../styles/navbar.scss'

class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      val: ''
    }
  }
  handlerChange (event) {
    this.setState({
      val: event.target.value
    })
  }
  render () {
    let { val, handlerChange } = this.state
    let { setVisibility } = this.props
    return (
      <div className="nav-bar">
        <p className="name">
          <a href="/">HUnter</a>
        </p>
        <input type="text"
          value={val}
          onChange={handlerChange.bind(this)}
        />
        <button className="add-btn" onClick={() => {setVisibility(true)}}>添加</button>
      </div>
    )
  }
}

export default Nav
