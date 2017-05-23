import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class ToggleList extends Component {
  render () {
    let { store } = this.props
    return (
      <div className="toggle-list">
        <input type="radio" name="allornot" checked={store.checked} onChange={store.handerToggleLeft}/>
        <input type="radio" name="allornot" checked={!store.checked} onChange={store.handerToggleRight}/>
      </div>
    )
  } 
}

export default ToggleList
