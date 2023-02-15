import React, { useState } from 'react';
import './App.css';

interface Operator {
  operators: '+' | '-' | "*" | "/";
} 

function App() {
  return (
    <div className="Calculator">
      <div>{/*displayValue*/}</div>
      <button onClick={()=> {}}>7</button>
      <button onClick={()=> {}}>8</button>
      <button onClick={()=> {}}>9</button>
    </div>
  );
}

export default App;
