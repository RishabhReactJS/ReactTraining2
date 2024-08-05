import {
  increment,
  decrement,
  incrementByAmount,
} from "../redux/actions/countActions";
import React, { Component, createRef } from "react";
import { connect } from "react-redux";

class CounterClass extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  amountRef = createRef()

  render() {

    const {increment, decrement, incrementByAmount, counterValue} = this.props;

    return (
      <>
        <button onClick={increment}>+</button>
        <input type={"number"} value={counterValue} />
        <button onClick={decrement}>-</button>
        <br></br>
        <label>Amount to Increase</label>
        <input type={"number"} ref={this.amountRef} />
        <button
          onClick={() => incrementByAmount(+this.amountRef.current.value)}
        >
          Increment By Amount
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) =>( {
  counterValue: state.counter.value,
});

const mapDispatchToProps = {
  increment,
  decrement,
  incrementByAmount,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
