import React from 'react'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Redux1 from './Redux1';
import Redux2 from './Redux2';



const intialState = {
    count:50
}
function reducer(state=intialState,action){
    switch(action.type){
        case 'ADD':
            return {
                count: state.count + 1
            }
            case 'REMOVE':
                return {
                    count: state.count - 1
                }

                default:
                    return state;
    }
}

const store=createStore(reducer);
store.dispatch({type:"ADD"})
store.dispatch({type:"REMOVE"})

export default function Redux() {
  return (
    <Provider store={store}>
    <div style={{textAlign:"center"}}>
        <Redux1 />
        <Redux2 />
      
    </div>
    </Provider>
  )
}


