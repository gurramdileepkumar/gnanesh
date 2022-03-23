import React, { Component } from 'react'

export default class Child extends Component {
    componentWillUnmount() {
        console.log('Child componentWillUnmount')
    }
  render() {
    return (
      <div>
         <h1>i am gone!</h1>
      </div>
    )
  }
}
