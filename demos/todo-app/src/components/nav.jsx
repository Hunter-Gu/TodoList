import React from 'react'
import '../styles/navbar.scss'

const Nav = ({ val, handlerChange, setVisibility }) => (
  <div className="nav-bar">
    <p className="name">
      <a href="/">HUnter</a>
    </p>
    <input type="text"
      value={val}
      onChange={handlerChange}
    />
    <button className="add-btn" onClick={() => {setVisibility(true)}}>添加</button>
  </div>
)

export default Nav
