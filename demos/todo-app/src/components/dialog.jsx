import React, { Component } from 'react'
import DialogRow from './dialog/dialogrow.jsx'
import DropDown from './dropdown/dropdown.jsx'
import '../styles/dialog.scss'

class Dialog extends Component {
  constructor (props) {
    super(props)
    this.state = {
      valLabel: '',
      valUrl: '',
      label: ''
    }
  }
  handlerChange (target, event) {
    let state = {}
    state[target] = event.target.value
    this.setState(state)
  }
  getValue (str) {
    this.setState({
      label: str
    })
  }
  setVisible () {
    let { setVisibility } = this.props
    setVisibility(false)
  }
  addData (valLabel, valUrl) {
    let { addData } = this.props
    addData({valLabel, valUrl})
    this.setState({
      valLabel: '',
      valUrl: '',
    })
  }
  render () {
    let { visible, labelData } = this.props
    let { valLabel, valUrl, label } = this.state
    let { handlerChange, getValue, addData, setVisible } = this
    let style = (() => {
      if (!visible) {
        return {
          display: 'none'
        }
      } else {
        return {

        }
      }
    })()
    return (
      <div className="dialog" style={style}>
        <div className="dialog-content">
          <a className="close" href="javascript:void(0)" onClick={setVisible.bind(this)}>X</a>
          {/*<DialogRow title="标签">
            <DropDown getValue={getValue.bind(this)} labelData={labelData}/>
          </DialogRow>*/}
          <DialogRow title="标题" val={valLabel} placeholder="请输入标题" handlerChange={handlerChange.bind(this, 'valLabel')} />
          <DialogRow title="链接" val={valUrl} placeholder="请输入链接" handlerChange={handlerChange.bind(this, 'valUrl')} />      
          <div className="dialog-btn">
            <button onClick={setVisible.bind(this)}>取消</button>
            <button className="ensure" onClick={addData.bind(this, valLabel, valUrl)}>添加</button>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Dialog
