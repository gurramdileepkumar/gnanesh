import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         mobileno:'',
         country:''
      }
    }
    changeUserName=(e)=>{
        this.setState({username: e.target.value})
    }
    changeMnumber=(e)=>{
        this.setState({mobileno: e.target.value})
    }
    changeCountry=(e)=>{
        this.setState({country: e.target.value})
    }
    handleSubmit=(e)=>{
        console.log(`${this.state.username} ${this.state.mobileno} ${this.state.country}`)
        e.preventDefault()
    
    }
    
    
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <form onSubmit={this.handleSubmit}>
            <label>UseName:</label>
            <input type="text"
              value={this.state.username}
              onChange={this.changeUserName}
             /><br/><br/>
            <label>M.Number:</label>
            <input type="number" 
              value={this.state.mobileno}
              onChange={this.changeMnumber}
            /><br/><br/>
            <label>Country</label>
            <select value={this.state.country} onChange={this.changeCountry}>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
            </select><br/><br/>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
