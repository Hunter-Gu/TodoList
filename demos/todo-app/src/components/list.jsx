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
    let { data, deleteIdx } = this.props
    return (
      <ul className="list">
        {
          data.map((el,i) => {
            return (
              <li key={i}>
                <div>
                  <span>{i+1}.</span>
                  <a href={el.valUrl} target>{el.valLabel}</a>
                </div>
                <a className="btn" href="javascript:void(0)"
                  onClick={()=>deleteIdx(el.id, i)}
                >DELETE</a>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default List
