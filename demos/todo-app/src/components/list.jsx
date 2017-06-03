import React, { Component } from 'react'
import '../styles/list.scss'

class List extends Component {
  constructor (props) {
    super(props)
  }
  componentWillMount () {
    let { fetchData } = this.props
    fetchData()
  }
  render () {
    let { data } = this.props
    return (
      <ul className="list">
        {
          data.map((el,i) => {
            return <li key={i}>
              <a href={el.valUrl}>{el.valLabel}</a>
            </li>
          })
        }
      </ul>
    )
  }
}

export default List
