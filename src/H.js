import React, { Component } from 'react'
import Data from './Data';



export default class H extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      myData:[
        {
            id:1,
            name: 'John',
            age:24
        },
        {
           id:2,
           name: 'arion',
           age:25
       },
        {
           id:3,
           name: 'teaser',
           age:26
       },
        {
           id:4,
           name: 'error',
           age:27
       }
    ],
     search:'',
    }
  }

  handleChange(e){
    this.setState({search:e.target.value});
    console.log(this.state.search)
  }

  
  render() {
    const {search,myData} = this.state
    const filteredData =myData.filter(item=>{
         return item.name.toLowerCase().indexOf(search.toLowerCase()) !==-1 
    })
    return (
      <div>
        <input type="text" placeholder="Search" 
        value={search}
        onChange={this.handleChange.bind(this)}
        />
        <table border="1" width="50%">
          <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
          </thead>
          <tbody>
            {filteredData.map((val,index)=>{
              return(
                <tr key={index}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.age}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
