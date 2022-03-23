import React, { Component } from 'react';
 
class Condition extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:false
      }
    }
    
    render() {
       return(
            //   this.state.name && <h1>welcome</h1>
              this.state.name ? (<h1>welcome</h1>):(<h1>bye!</h1>)
       )
    }
}
 
export default Condition;