import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "../store/action";

function Counter() {
  //const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    console.log(state);
    return state.counter;
  });
  return (
    <div>
      <div>
        <h1>Counter: {counter}</h1>
      </div>
      <div>
        <button
          onClick={() => {
            //setCounter(counter+1);
            //dispatch( {type:"INCREMENT"} );
            dispatch(increment());
          }}
        >
          Increment
        </button>
        {"  |  "}
        <button
          onClick={() => {
            //setCounter(counter-1);
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
      </div>
      <br />
      <div>
        <input
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <br />
        <br />

        <button
          onClick={() => {
            //setCounter(counter+ Number(value))
            //dispatch( {type: "INCREMENT_BY_AMOUNT", payload:Number(value) } )
            dispatch(incrementByAmount(Number(value)));
          }}
        >
          Increment By Value
        </button>
      </div>
    </div>
  );
}

export default Counter;
