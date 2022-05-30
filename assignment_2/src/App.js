import React, { useState } from "react";
import './App.css';
function App() {
  const[count,setCount]= useState(0)
  return (
    <div className="App">
      <h1>{count}</h1>
      <div className="Button">
        <button onClick={()=>setCount(count-1)} id="Minus">-</button>
        <button onClick={()=> setCount (count +1)} id="Plus">+</button>
        </div>
    </div>
  );
}

export default App;
