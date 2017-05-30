import React from 'react'
import '../styles/navbar.scss'

const Nav = ({ val, handlerChange, setVisibilityVisible }) => (
  <div className="nav-bar">
    <p className="name">
      <a href="/">HUnter</a>
    </p>
    <input type="text"
      value={val}
      onChange={handlerChange}
    />
    <button className="add-btn" onClick={setVisibilityVisible}>添加</button>
  </div>
)

export default Nav
