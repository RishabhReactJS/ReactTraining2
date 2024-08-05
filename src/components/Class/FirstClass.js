import React, { Component } from "react";
import SecondClass from "./SecondClass";
import FirstFunctional from "../Functional/FirstFunctional";
import { usersContext } from "../../Context/usersContext";

class FirstClass extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("in componentDidMount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("in componentDidUpdate", prevState);
    if (prevState?.contact?.length >= 10) {
      alert("Contacht is greater than 10");
    }
  }

  state = {
    contact: 91,
  };

  handleInuptChange = (e) => {
    const value = e.target.value;
    this.setState({
      contact: value,
    });
  };

  render() {
    return (
      <usersContext.Consumer>
        {(usersContext) => (
          <div>
            In First Class Comp
            <span>Mobile</span>
            <input type={"number"} onChange={this.handleInuptChange} />
            <br></br>
            <span>contact: {usersContext.users[0]?.contact}</span>
            {/* <span>contact: {this.state.contact}</span>
        { this.state.contact.length > 10 ? null : <SecondClass contact={this.state.contact} />} */}
            {/* { this.state.contact.length > 10 ? null : <FirstFunctional />} */}
          </div>
        )}
      </usersContext.Consumer>
    );
  }
}

export default FirstClass;
