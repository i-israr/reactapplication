import React, { useState } from 'react';
import './App.css';
import Israr from './israr.js'

function App() {
  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(true)
  return (
    // <div className="box"> if calling single class
    // If we want to write multiple line strings then we use `` e.g for concatination
    // If we want to appand some veriable in `` then we use ${}
    // If the isMorning will be true then the class day light will be called  
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <Israr myName="Israr ul haq" />
      
      <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>
      
      <h1>The counter is {count}</h1>
      
      <button onClick={() => setCount(count + 1)}>
        Update Counter
      </button>
    
      <button onClick={() => setMorning(!isMorning)}>
        Update day
      </button>

    </div>
  );
}

export default App;
