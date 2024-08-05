import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement } from "./counterSclie";
import { increment, decrement } from "../redux/actions/counterActions";

function Counter() {

    const dispatch = useDispatch()
    const counterValue = useSelector(state => state.counter.value)

    console.log('in >. ', counterValue);
  return (
    <>
      <button onClick={() => dispatch(increment())}>+</button>
      <input type={"number"} value={counterValue} />
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
}

export default Counter;
