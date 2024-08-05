import React, { useCallback, useEffect, useMemo, useState } from "react";
import {SecondClassMemo} from '../Class/SecondClass'


function FirstFunctional() {
  const [contact, setContact] = useState();
  const [name, setName] = useState("User");
  const [errorContact, setErrorContact]= useState()
  const [errorName, setErrorName]= useState()

  useEffect(() => {
    console.log("in componentDidMount");
  }, []);

  useEffect(() => {
    console.log("in componentDidUpdate");

    return () => {
        console.log("in componentWillUnmount >>")
    }
  }, []);

  const handleInuptChange = (e) => {
    const value = e.target.value;
    if(value.length === 10){
      setContact(value);
    }
    if(value.length > 10){
      
      setErrorContact('Contact number length should be 10')

    }
  }

  const handleNameChange = (e) => {
    const value = e.target.value;
    if(value.length === 5){
      setName(value);
    }
    if(value.includes([1,2,3])){
      
      setErrorName("Name shouldn't include number")

    }
  }

  return (
    <div>
      In First Functional Comp
      <br></br>
      <span>Mobile</span>
      <input type={"number"} onChange={handleInuptChange} />
      {errorContact && <span className="erorrMessage">{errorContact}</span> }
      <br></br>
      <span>Name</span>
      <input type={"string"} onChange={handleNameChange} />
      {errorName && <span className="erorrMessage">{errorName}</span> }
      <br></br>
      {/* <span>contact: {contact}</span> */}
      {/* <SecondClassMemo handleInuptChange={handleInuptChange} /> */}
    </div>
  );
}

export default FirstFunctional;
