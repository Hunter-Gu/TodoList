import React from 'react'
import '../styles/dialog.scss'

const Dialog = () => (
  <div className="dialog">
    <div className="dialog-wrap"></div>
    <div className="dialog-content">
      <div className="dialog-row">
        <label htmlFor="title">hunter</label>
        <input type="text" id="title"

        />
      </div>
      <div className="dialog-btn">
        <button>取消</button>
        <button>添加</button>
      </div>
    </div>
  </div>
)

module.exports = Dialog
