import React, { Component } from 'react'
import { Button,Alert,Container } from 'react-bootstrap'

export default class Reactstrap extends Component {
  render() {
    return (
      <div>
        <Container>
          <Button variant="secondary">click</Button>
           <Alert variant="danger">Warning</Alert>
        </Container>
        <div className="container">
            <h1>samad</h1>
            <a href="">youtube</a>
        </div>
      </div>
    )
  }
}
