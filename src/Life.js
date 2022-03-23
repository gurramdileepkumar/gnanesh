import React, { Component } from 'react'
import Child from './Child';

export default class Life extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"nikhil",
         show:true
      }
      console.log('this constructor');
    }
     delHandler =()=>{
       this.setState({show:false});
     }
    changeName(){
      this.setState({name:"samad"})
    }
    // static getDerivedStateFromProps(props,state) {
    //     console.log('getDerivedStateFromProps');
    //     return null
    // }
    // componentWillMount(){
    //     console.log('componentWillMount');
    // }
    // componentDidMount(){
    //     console.log('componentDidMount');
    // }
    shouldComponentUpdate(){
      console.log('shouldComponentUpdate')
      return true;
    }
    componentDidUpdate(){
      console.log('componentDidUpdate');
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log('getSnapshotBeforeUpdate');
      return null;
    }
    
  render() {
      console.log('render');
      let myCnt;
      if(this.state.show){
        myCnt =<Child />;
      }
    return (
      <div>
        {myCnt}
        <button onClick={this.delHandler}>click</button>
        {/* <h1>{this.state.name}</h1>
        <button onClick={()=>this.changeName()}>cilck</button> */}
      </div>
    )
  }
}
