import logo from './logo.svg';
import './App.css';
import React, { useRef } from 'react';
import FirstClass from './components/Class/FirstClass';
import FirstFunctional from './components/Functional/FirstFunctional';
import ForwaedRefUncontrolledComp from './components/Functional/UncontrolledComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import {UsersContextProvider} from "./Context/usersContext"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CustomValidationReactForm from "./components/Functional/CustomValidationReactForm"

function App() {

  const inputRef = useRef()

  return (
    <UsersContextProvider>
      <div className="App">
        {/* <FirstClass /> */}
        <CustomValidationReactForm />
        {/* <button onClick={() => {inputRef.current.focus()}}>Focus Input</button>
        <ForwaedRefUncontrolledComp forRef={inputRef} /> */}
      </div>
    </UsersContextProvider>
  );
}

export default App;
