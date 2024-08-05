import React, { forwardRef, useEffect, useRef, useState } from "react";
import {SecondClassMemo} from '../Class/SecondClass'
import useUsersContext from "../../Context/usersContext"
import FirstClass from "../Class/FirstClass"

const ForwaedRefUncontrolledComp = forwardRef(function UncontrolledComp(props) {
  const [contact, setContact] = useState();
  const [contact1, setContact1] = useState("User");
  const nameRef =  useRef();
  const contactRef =  useRef();
  const locRef =  useRef();

  const usersContext = useUsersContext()

  useEffect(() => {
    console.log("in componentDidMount");
  }, []);

  useEffect(() => {
    console.log("in componentDidUpdate");

    return () => {
        console.log("in componentWillUnmount >>")
    }
  }, [contact1]);

  const handleInuptChange = (e) => {
    // const value = inEleRef.current.value;
    // const eValue = e.target.value
    console.log("in handleInuptChange >> ", e.target, e.currentTarget)
    // setContact(value);
  };

  const handleFormSubmit = (e) => { 
    e.preventDefault()
    usersContext.setUser([...usersContext.users, {
        name: nameRef.current.value,
        contact: contactRef.current.value,
        location: locRef.current.value
    }])
    nameRef.current.value = ""
    contactRef.current.value = ""
    locRef.current.value = ""

    nameRef.current.focus();
  }

  return (
    <div>
      In First Functional Comp
      <span>Mobile</span>
      <br></br>
      <input type={"number"} ref={props.forRef} />
      <br></br>
      <form className="userFo" style={{"display": "flex", "justify-content": "center" }} onSubmit={handleFormSubmit} >
        <span>Name</span>
        <input type={"string"} name={"name"} ref={nameRef}  />
        <br/>
        <span>Contact No.</span>
        <input type={"number"} name={"contact"}  ref={contactRef}  />
        <br/>
        <span>Location</span>
        <input type={"string"} name={"location"}  ref={locRef}  />
        <br/>
        <input type={"submit"} value="Submit" />
      </form>
      <br></br>
      <h1>Users:</h1>
      <ul>
      {
        usersContext.users.map(user => {
            return <li key={user.name + user.contact} >
                <div>{user.name}</div>
                <div>{user.location}</div>
                <div>{user.contact}</div>
            </li>
        })
      }
      </ul>
      {/* <FirstClass /> */}
    </div>
  );
})

export default ForwaedRefUncontrolledComp;
