import React, { useState } from 'react';
import './App.css';

type Operator =  '+' | '-' | "*" | "/";

const Calculator = () =>{
  const [displayValue, setDisplayValue] = useState('0');
}

function App() {
  return (
    <div className="Calculator">
      <div>{/*displayValue*/}</div>
      <button onClick={()=> {}}>7</button>
      <button onClick={()=> {}}>8</button>
      <button onClick={()=> {}}>9</button>
      <button onClick={()=> {}}>/</button>
      <br />
      <button onClick={()=> {}}>4</button>
      <button onClick={()=> {}}>5</button>
      <button onClick={()=> {}}>6</button>
      <button onClick={()=> {}}>*</button>
      <br />
      <button onClick={()=> {}}>1</button>
      <button onClick={()=> {}}>2</button>
      <button onClick={()=> {}}>3</button>
      <button onClick={()=> {}}>-</button>
      <br />
      <button onClick={()=> {}}>0</button>
      <button onClick={()=> {}}>+</button>
      <button onClick={()=> {}}>=</button>
      <button onClick={()=> {}}>C</button>
    </div>
  );
}

export default App;
