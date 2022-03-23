import React from 'react'
import { useState } from 'react'

export default function UseState() {

     const [name,setName]=useState("samad");
     const [count,setCount]=useState(0);
  return (
    <div style={{textAlign: 'center'}}>
      <h1>welcome to {name}</h1>
      <button onClick={()=>setName("nikhil")}>click</button>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>add</button>
      <button onClick={()=>setCount(count-1)}>remove</button>

    </div>
  )
}
