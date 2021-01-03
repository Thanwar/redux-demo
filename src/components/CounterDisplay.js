import React from 'react';
import {useSelector} from 'react-redux'


function CounterDisplay() {
    const counter = useSelector((state)=>{
        return state.counter
    })
  return (
    <div >
        <h1>Counter Display {counter}</h1>
    </div>
  );
}

export default CounterDisplay;
