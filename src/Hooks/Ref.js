import React from 'react'
import { useRef,useEffect } from 'react'

export default function Ref() {

    const elementRef=useRef();
    const qunatityRef=useRef();

   const increment=()=>{
       qunatityRef.current.value++;
   }
     useEffect(() =>{
          const myElement = elementRef.current;
          console.log(myElement);
    },[])

    // const focusRef= useRef();
    // useEffect(() =>{
    //      focusRef.current.focus();
    // },[])
  return (
    <div style={{textAlign: 'center'}}>
        <br/><br/>
        {/* <input type="text" ref={focusRef} /> */}
        <input  value="0" ref={qunatityRef}/>
        <button type="button" onClick={increment}>add</button>
        <h1 ref={elementRef}>welcome</h1>
      
    </div>
  )
}
