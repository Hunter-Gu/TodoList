import React from 'react'
import DialogRow from './dialog/dialogrow.jsx'
import DropDown from './dropdown/dropdown.jsx'
import '../styles/dialog.scss'

const Dialog = ({ valUrl, valLabel, visible, handlerUrlChange, handlerLabelChange, setVisibility }) => {
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
    <div className="dialog" style={style} onClick={(e)=>{if (e.target.className === 'dialog') {setVisibility(false)}}}>
      <div className="dialog-content">
        <a className="close" href="javascript:void(0)" onClick={()=>{setVisibility(false)}}>X</a>
        <DialogRow title="标签">
          <DropDown />
        </DialogRow>
        <DialogRow title="标题" val={valLabel} placeholder="请输入标题" handlerChange={handlerLabelChange}/>
        <DialogRow title="链接" val={valUrl} placeholder="请输入链接" handlerChange={handlerUrlChange}/>      
        <div className="dialog-btn">
          <button onClick={()=>{setVisibility(false)}}>取消</button>
          <button className="ensure">添加</button>
        </div>
      </div>
    </div>
  )
}

module.exports = Dialog
