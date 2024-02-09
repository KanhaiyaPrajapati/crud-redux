import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function CounterComponent() {
let state = useSelector(state =>state.count);
console.log(state);
let dispatch = useDispatch()
  return (
    <>
            <div>Counter Component</div>
            <h4>count : {state}</h4>
            <button className='btn btn-danger me-2' onClick={()=>dispatch({type:"INCREMENT"}) }>Increment</button>
            <button className='btn btn-info' onClick={()=>dispatch({type:"DECREMENT"}) }>DECREMENT</button>
    </>
  )
}

export default CounterComponent;