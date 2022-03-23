import React from 'react'
import Prop1 from './Prop1'


const getName = (tech) =>{
     console.log("welcome "+tech);
}
export default function Prop() {
  return (
    <div>
        <center>
       
       <Prop1 name="neeraj" getName={getName}/>

       </center>
    </div>
  )
}
