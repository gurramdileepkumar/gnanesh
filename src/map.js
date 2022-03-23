import React from 'react'

class Map extends React.Component{
    constructor(){
        super();
        this.state={
            value:["nikhil","samad","gnanesh","neeraj","swathi",1,2],
            names:[
                {
                    id:1,
                    title:"angular"
                },
                {
                    id:2,
                    title:"angularjs"
                },
                {
                    id:3,
                    title:"reactjs"
                }
            ]
        }
    }

    render(){
        return(
            <div>
               {/* <h1>{this.state.value}</h1> */}
               <ol>{this.state.value.map((bit,index)=>{
                   return(
                   <li key={index}>{bit}</li>
                        
                   )
               })}
               </ol>
               <br/>
               <ol>
                   {this.state.names.map((tech,i)=>{
                       return(
                           <li key={i}>{tech.id}-{tech.title}</li>
                       )
                   })}
               </ol>
            </div>
        )
    }
}
export default Map;