import React, { Component } from 'react'
import '../../styles/dropdown.scss'

class DropDown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false,
      val: ''
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
  componentWillMount () {
    window.addEventListener('click', (e)=> {
      if (e.target.className === 'drop-content') {
        this.props.getValue(e.target.innerHTML)
        this.setState({
          val: e.target.innerHTML
        })
      }
      if (e.target.className !== 'drop-text') {
        this.state.visible = true
        this.addAnimation()
        this.setState({
          visible: !this.state.visible
        })
      }
    })
  }
  render () {
    let style = this.state.visible ? {} : {display: 'none'}
    let { labelData } = this.props
    return (
      <div className="drop-down">
        <div className="drop-text" onClick={this.setvisible.bind(this)}>
          {this.state.val}
          <span className="icon" ref="icon"></span>
        </div>
        <ul className="drop-select" style={style}>
          {
            labelData.map(el => {
              return <li key={el}>{el}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

module.exports = DropDown
