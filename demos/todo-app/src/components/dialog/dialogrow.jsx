import React from 'react'
import PropTypes from 'prop-types'

const DialogRow = ({ title, placeholder, val, handlerChange, children }) => (
  <div className="dialog-row">
    <label htmlFor={title}>{title}</label>
    {
      children
        ? children
        : <input type="text" id={title}
            placeholder={placeholder}
            value={val}
            onChange={handlerChange}
          />
    }
  </div>
)

// DialogRow.propTypes = {
//   title: PropTypes.node,
//   val: PropTypes.node,
//   handlerChange: PropTypes.func
// }
// DialogRow.defaultProps = {
//   title: 'title',
//   val: '这是标题',
//   handlerChange: () => {throw new Error('please add handlerChange func')}
// }

module.exports = DialogRow
