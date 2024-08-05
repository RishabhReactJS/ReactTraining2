import logo from './logo.svg';
import './App.css';
import React from 'react';
import Counter from './features/counter/CounterComponent';
import CounterClass from './component/CounterClass';

function App() {
  return (
    <div className="App">
        <CounterClass />
    </div>
  );
}

export default App;
