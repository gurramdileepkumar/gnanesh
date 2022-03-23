import React from 'react'

export default function Prop1({ getName,name }) {
  function fClick(e){
    e.preventDefault();
        console.log('welcome');
  }
  function Bit(e){
      e.preventDefault();
  }
  function Tech(e){
    console.log(e)
  }
  return (
    <div>
      <h1>welcome {name}</h1>
      <button onClick={()=>getName("samad")}>click</button>
      <button onClick={()=>fClick()}>click me</button>
      <a href="http://in.youtube.com/" onClick={Bit}>youtube</a>
      <button onClick={()=>Tech('welcome')}>click me</button>

    </div>
  )
}
