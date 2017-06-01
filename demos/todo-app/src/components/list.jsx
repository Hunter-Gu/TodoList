import React, { Component } from 'react'
import '../styles/list.scss'

const List = ({ data }) => (
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

export default List
