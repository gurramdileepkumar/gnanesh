import React, { Component } from 'react';
import Home from './Home';
import About from './Components/About'
 
class App extends Component {
  constructor(){
    super();
    this.state={
      name:"bit technologies",
      location:"hyderbad",
      bit:"sharath",
      count:0
    };
  }
    changeName(){
      this.setState({bit:"nikhil"});
    }
    increment(){
      this.setState({count:this.state.count+1});
    }
    decrement(){
      this.setState({count:this.state.count-1});
    }
  render() { 
    return (
      <div>
      <center>
      <h1>welcome to {this.state.name}</h1>
      <h2>is located at {this.state.location}</h2>
      <h3>{this.state.bit}</h3>
      <button onClick={()=>this.changeName()}>changeName</button>
      <h1>{this.state.count}</h1>
      <button onClick={()=>this.increment()}>Add</button>
      <button onClick={()=>this.decrement()}>Remove</button>
      <Home />
      <About />
      </center>
        
        </div>
    );
  }
}


 
export default App;