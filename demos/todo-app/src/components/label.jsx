import React, { Component } from 'react'
import LabelFn from './label/labelfn.jsx'
import '../styles/label.scss'

class LabelList extends Component {
  render () {
    return (
      <div className="label">
        <LabelFn />
        <ul className='label-list'>
          <li>abc</li>
          <li>abc</li>
          <li>abc</li>
          <li>abc</li>
          <li>abc</li>
          <li>abc</li>
          <li>abc</li>
          <li>abc</li>
          <li>abc</li>
          <li>abc</li>
          <li>abc</li>
          <li>abc</li>
        </ul>
      </div>
    )
  }
}

export default LabelList
