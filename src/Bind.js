import React, { Component } from 'react';
 
class Bind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"samad"
      }
    }

    changeName(){
        this.setState({name:"neeraj"});
    }
    
    clickHandler(e){
        console.log(e);
    }
    render() { 
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.changeName.bind(this)}>changeName</button>
                <button onClick={this.clickHandler.bind(this,"welcome")}>Click</button>
            </div>
        );
    }
}
 
export default Bind;