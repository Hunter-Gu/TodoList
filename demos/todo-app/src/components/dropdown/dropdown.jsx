import React, { Component } from 'react'
import '../../styles/dropdown.scss'

class DropDown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  setvisible () {
    this.addAnimation()
    this.setState({
      visible: !this.state.visible
    })
  }
  addAnimation () {
    this.refs.icon.className = 'icon'
    if (!this.state.visible) {
      this.refs.icon.className += ' rotate-show'
    } else {
      this.refs.icon.className += ' rotate-hide'
    }
  }
  render () {
    let style = this.state.visible ? {} : {display: 'none'}
    return (
      <div className="drop-down">
        <div className="drop-text" onClick={this.setvisible.bind(this)}>
          abc
          <span className="icon" ref="icon"></span>
        </div>
        <ul className="drop-select" style={style}>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>      
        </ul>
      </div>
    )
  }
}

module.exports = DropDown
