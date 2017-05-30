import React from 'react'
import DialogRow from './dialog/dialogrow.jsx'
import DropDown from './dropdown/dropdown.jsx'
import '../styles/dialog.scss'

const Dialog = ({ visible, setVisibilityHidden }) => {
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
    <div className="dialog" style={style} onClick={(e)=>{if (e.target.className === 'dialog') {setVisibilityHidden()}}}>
      <div className="dialog-content">
        <a className="close" href="javascript:void(0)" onClick={setVisibilityHidden}>X</a>
        <DialogRow title="标签">
          <DropDown />
        </DialogRow>
        <DialogRow title="标题" val="" placeholder="请输入标题" handlerChange={()=>{console.log('hello world')}}/>
        <DialogRow title="链接" val="" placeholder="请输入链接" handlerChange={()=>{console.log('hello klisna')}}/>      
        <div className="dialog-btn">
          <button onClick={setVisibilityHidden}>取消</button>
          <button className="ensure">添加</button>
        </div>
      </div>
    </div>
  )
}

module.exports = Dialog
