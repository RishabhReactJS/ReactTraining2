import React, { useCallback, useEffect, useMemo, useState } from "react";
import { SecondClassMemo } from "../Class/SecondClass";
import { useForm } from "react-hook-form";

function CustomValidationReactForm() {
//   const [contact, setContact] = useState();
//   const [name, setName] = useState("User");
//   const [errorContact, setErrorContact] = useState();
//   const [errorName, setErrorName] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    console.log("in componentDidMount");
  }, []);

  useEffect(() => {
    console.log("in componentDidUpdate");

    return () => {
      console.log("in componentWillUnmount >>");
    };
  }, []);

  const onSubmit = data => {
    console.log('in onSubmit >> ', data);
  }

  const handleValidatName = (value) => {
    console.log('in handleValidatName >> ', value)
    if(value.includes(1)){
        return "Name can't include numbers"
    }else{
        return true
    }
  }

  return (
    <div>
      In First Functional Comp
      <br></br>
      <form onSubmit={handleSubmit(onSubmit)}>
      <span>Mobile</span>
      <input
        {...register("contact", {
          required: `Contact can't be empty`,
          minLength: {
            value: 10,
            message: "Contact length should be 10",
          },
          maxLength: {
            value: 10,
            message: "Contact length can't be greater than 10",
          },
        })}
        type={"number"}
      />
      <br></br>
      {errors.contact && <span className="erorrMessage">{errors.contact.message}</span>}
      <br></br>
      <span>Name</span>
      <input {...register("name", {
        required: "Name is a required field",
        validate: handleValidatName,
        minLength: {
            value: 10,
            message: "Name length should be 10",
          },
          maxLength: {
            value: 10,
            message: "Name length can't be greater than 10",
          },
      } )} type={"string"} />
      <br></br>
      {errors.name && <span className="erorrMessage">{errors.name.message}</span>}
      <br></br>
      <button type={"submit"} >Submit</button>
      </form>
    </div>
  );
}

export default CustomValidationReactForm;
