import React,{ useContext } from 'react'
import { context } from './UseContext'

export default function UseContext1() {
  return (
    <div>
        <context.Consumer>
            {value=><p>{value}</p>}
        </context.Consumer>
      
    </div>
  )
}
