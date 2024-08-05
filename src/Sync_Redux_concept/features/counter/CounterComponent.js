import React, { createRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement } from "./counterSclie";
import { increment, decrement, incrementByAmount } from "../../redux/actions/countActions";

function Counter() {

    const dispatch = useDispatch()
    const counterValue = useSelector(state => state.counter.value)
    const amountRef =  createRef()

    console.log('in >. ', counterValue);
  return (
    <>
      <button onClick={() => dispatch(increment())}>+</button>
      <input type={"number"} value={counterValue} />
      <button onClick={() => dispatch(decrement())}>-</button>
      <br></br>
      <label>Amount to Increase</label>
      <input type={"number"} ref={amountRef} />
      <button onClick={() => dispatch(incrementByAmount(+amountRef.current.value))} >Increment By Amount</button>
    </>
  );
}

export default Counter;
