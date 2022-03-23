import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'


export default class About extends Component {
  render() {
    return (
      <div>
        <p>This is about component</p>
        <Link to="about/about1">About-1</Link>
        <Outlet />
      </div>
    )
  }
}
