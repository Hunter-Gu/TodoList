import React, { Component } from 'react'
import '../styles/list.scss'

class List extends Component {
  render () {
    let data = [1,2,3,4,5,6,7,7,8,7,7,6,1,2,3,4,5,6,7,7,8,7,7,6]
    return (
      <ul className="list">
        {
          data.map((el,i) => {
            return <li key={i}>{el}</li>
          })
        }
      </ul>
    )
  }
}

export default List
