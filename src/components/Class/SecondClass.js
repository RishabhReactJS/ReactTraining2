import React, { Component } from "react";
import FirstClass from "./FirstClass"
import useUsersContext from "../../Context/usersContext"

class SecondClass extends Component {
  constructor(props) {
    super(props);
  }
  
  state = {
    users: [
      { name: "Raj", age: "32" },
      { name: "Rajiv", age: "21" },
      { name: "Rajesh", age: "23" },
      { name: "Rajand", age: "35" },
    ],
    contact: this.props.contact
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("in componentDidUpdate SecondClass", snapshot);
    if(prevProps?.contact?.length >= 10){
      alert("Contacht is greater than 10")
    }

  }

  static getDerivedStateFromProps(nextProps, prevState){

    if(prevState.contact !== nextProps.contact){
        return {
            contact: nextProps.contact
        }
    }

    return null

  }

  getSnapshotBeforeUpdate(){

    return "test"
  }


  componentWillUnmount(){
    console.log("in componentWillUnmount >>")
  }

//   shouldComponentUpdate(nextProps, nextState){
//     if(nextProps?.contact?.length >= 10){
//         return true
//     }
//     return false
//   }


  render() {
    return (
    <>
    <h1>In SecondClass</h1>
      <ul>
        {this.state.users.map((user) => (
          <li>
            {user.name} : {user.age}
          </li>
        ))}
      </ul>
      <span>contact: {this.state?.contact}</span>
      {/* <FirstClass /> */}
      </>
    );
  }
}

export const SecondClassMemo = React.memo(SecondClass) ;
