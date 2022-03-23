import React,{ createContext } from 'react'
import UseContext1 from './UseContext1';


export const context=createContext();

export default function UseContext() {
    const name="bit technologies"
  return (
      <div style={{textAlign: 'center'}}>
      <context.Provider value={name}>
          <UseContext1 />
      </context.Provider>
      </div>
  )
}
