import React, { Component } from 'react'
import LabelFn from './label/labelfn.jsx'
import '../styles/label.scss'

class Label extends Component {
  constructor (props) {
    super(props)
  }
  componentWillMount () {
    let { getLabel } = this.props
    getLabel()
  }
  render () {
    let { labelData } = this.props
    return (
      <div className="label">
        <LabelFn />
        <ul className='label-list'>
          {
            labelData.map((el, i) => {
              return (
                <li key={i}>{el}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Label
