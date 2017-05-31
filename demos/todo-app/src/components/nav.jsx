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
    let { val } = this.state
    let { handlerChange } = this
    let { setVisibility, search } = this.props
    return (
      <div className="nav-bar">
        <p className="name">
          <a href="/">HUnter</a>
        </p>
        <input type="text"
          value={val}
          onChange={handlerChange.bind(this)}
          onKeyDown={search}
        />
        <button className="add-btn" onClick={() => {setVisibility(true)}}>添加</button>
      </div>
    )
  }
}

export default Nav
